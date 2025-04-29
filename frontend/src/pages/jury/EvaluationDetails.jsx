import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth-store";
import { useFetch } from "../../hooks/use-fetch";

const EvaluationDetails = () => {
  const { token, user } = useAuthStore();

  return (
    <div>
      <h1>Evaluation Details</h1>
      <p>Details about the evaluation will be displayed here.</p>
    </div>
  );
};

export default EvaluationDetails;
