import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/use-fetch";
import axios from "axios";
import SelectComp from "../../components/select";

const ApplicationDocuments = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const data = location.state;

  const { data: postingData } = useFetch(
    `http://localhost:3000/api/postings/${data.postingId}`,
    "GET"
  );

  const applicationId = data.applicationId;

  const { data: applicationData } = useFetch(
    `http://localhost:3000/api/documents//application/${applicationId}`,
    "GET"
  );

  const requirements = postingData?.requirements;
  const filteredRequirements = requirements?.filter(
    (item) => item.requirement !== "baslıca-yazar"
  );

  useEffect(() => {
    if (!data) {
      navigate("/404");
    }
  }, [data, navigate]);

  const handleFileChange = (e, requirement, index) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      [requirement]: {
        ...(prev[requirement] || {}),
        [index]: {
          ...prev[requirement]?.[index],
          file,
        },
      },
    }));
  };

  const handleAuthorChange = (e, requirement, index) => {
    const isMainAuthor = e.target.value === "true";
    setFormData((prev) => ({
      ...prev,
      [requirement]: {
        ...(prev[requirement] || {}),
        [index]: {
          ...prev[requirement]?.[index],
          isMainAuthor,
        },
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      for (const requirement in formData) {
        for (const index in formData[requirement]) {
          const formDataToSend = new FormData();
          formDataToSend.append("applicationId", data.applicationId);
          formDataToSend.append(
            "authorRole",
            formData[requirement][index].isMainAuthor ? "baslıca-yazar" : ""
          );
          formDataToSend.append("documentType", requirement);
          formDataToSend.append("file", formData[requirement][index].file);

          await axios.post(
            "http://localhost:3000/api/documents/upload",
            formDataToSend,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
        }
      }
      alert("Tüm dosyalar başarıyla yüklendi!");
    } catch (err) {
      console.error("Hata:", err);
      alert("Dosyalar yüklenirken bir hata oluştu.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-6 bg-gray-100 rounded shadow-md"
      >
        <div className="space-y-4">
          {filteredRequirements?.map((item, index) => {
            const isCompleted =
              applicationData?.some(
                (doc) => doc.documentType === item.requirement
              ) ?? false;

            return (
              <div key={index} className="p-4 bg-white rounded shadow">
                <h3 className="text-lg font-semibold mb-2">
                  {item.requirement}
                </h3>
                {isCompleted ? (
                  <p className="text-green-600 font-semibold">Tamamlandı</p>
                ) : (
                  [...Array(item.requiredCount)].map((_, inputIndex) => (
                    <div
                      key={inputIndex}
                      className="flex flex-col space-y-2 mb-4"
                    >
                      <input
                        type="file"
                        onChange={(e) =>
                          handleFileChange(e, item.requirement, inputIndex)
                        }
                        className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                      />
                      <label
                        htmlFor={`mainAuthor-${item.requirement}-${inputIndex}`}
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Başlıca Yazar Mısınız?
                      </label>
                      <SelectComp
                        options={[
                          { value: "true", label: "Evet" },
                          { value: "false", label: "Hayır" },
                        ]}
                        onChange={(value) =>
                          handleAuthorChange(
                            { target: { value } },
                            item.requirement,
                            inputIndex
                          )
                        }
                        placeholder="Seçiniz"
                      />
                    </div>
                  ))
                )}
              </div>
            );
          })}
        </div>
        {!filteredRequirements?.every((item) =>
          applicationData?.some((doc) => doc.documentType === item.requirement)
        ) && (
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:ring focus:ring-blue-300"
          >
            Gönder
          </button>
        )}
      </form>
      <form className="space-y-6 p-6 bg-gray-100 rounded shadow-md"></form>
    </>
  );
};

export default ApplicationDocuments;
