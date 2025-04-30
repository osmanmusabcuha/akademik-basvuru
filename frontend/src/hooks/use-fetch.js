import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export function useFetch(url, method = "GET", token = null, body = null) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const customHeaders = {};

      // Token varsa Authorization başlığı ekle
      if (token) {
        customHeaders["Authorization"] = `Bearer ${token}`;
      }

      // Axios konfigürasyonu
      const axiosConfig = {
        url,
        method,
        headers: customHeaders,
      };

      // Eğer body verisi varsa
      if (body) {
        if (body instanceof FormData) {
          axiosConfig.headers = {
            ...axiosConfig.headers,
          };
          axiosConfig.data = body;
        } else {
          axiosConfig.headers["Content-Type"] = "application/json";
          axiosConfig.data = body;
        }
      }

      const response = await axios(axiosConfig);
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  }, [url, method, token, body]);

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url, fetchData]);

  return { data, error, loading, fetchData };
}
