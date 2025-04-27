import React from "react";
import { useFetch } from "../../hooks/use-fetch.js";
import { useAuthStore } from "../../store/auth-store.jsx";

const Application = () => {
  const { user, token } = useAuthStore();
  const { data: applicationsData, fetchData: fetchApplicationData } = useFetch(
    "http://localhost:3000/api/applications/user/" + user.id,
    "GET",
    token
  );
  console.log(applicationsData);
  return (
    <div>
      <h1>Application Page</h1>
      <p>Welcome to the application page!</p>
    </div>
  );
};

export default Application;
