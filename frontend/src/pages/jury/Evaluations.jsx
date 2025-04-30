import React from "react";
import { useFetch } from "../../hooks/use-fetch";
import { useAuthStore } from "../../store/auth-store";
import { useNavigate } from "react-router-dom";

const Evaluations = () => {
  const navigate = useNavigate();
  const { token, user } = useAuthStore();
  console.log(user?.id);

  const { data: evaluationsData, loading: evaluationsLoading } = useFetch(
    `http://localhost:3000/api/juries/user/${user?.id}`,
    "GET",
    token
  );

  const handleClick = (applicationId) => {
    navigate(`/dashboard/evaluations/${applicationId}`, {
      state: { applicationId },
    });
  };

  console.log("Evaluations Data: ", evaluationsData);
  return (
    <div>
      {evaluationsLoading && (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-2xl font-bold">Loading...</h1>
        </div>
      )}
      <section className="flex flex-col relative px-6 text-white text-left mb-4 shadow-md h-60 bg-center bg-cover bg-[url('/kou-banner.webp')] rounded-2xl">
        <div className="mt-auto">
          <div className="absolute inset-0 bg-green-500 rounded-2xl opacity-40 mix-blend-multiply"></div>
          <h1 className="text-4xl text-white relative z-10 md:text-5xl lg:text-6xl w-fit p-2 rounded font-bold mb-2">
            Değerlendirmeler
          </h1>
        </div>
      </section>
      <div className="container max-w-full grid @min-6xl:grid-cols-2 grid-cols-1 gap-4 justify-center">
        <>
          {evaluationsData && evaluationsData.length > 0 ? (
            evaluationsData.map((evaluation) => (
              <EvaluationCard
                key={evaluation.id}
                handleClick={handleClick}
                evaluation={evaluation}
              />
            ))
          ) : (
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-2xl font-bold">Henüz Değerlendirme Yok</h1>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

const EvaluationCard = ({ evaluation, handleClick }) => {
  return (
    <div className="bg-white flex flex-col sm:flex-row gap-5 sm:justify-between items-center text-xl shadow-lg p-4 rounded-lg">
      <p>
        <strong className="text-6xl text-green-500">{evaluation?.id}</strong>
      </p>
      <div className="flex flex-col gap-2 items-center sm:flex-row">
        <p>
          <strong>Basvuru ID:</strong> {evaluation.applicationId}
        </p>
        <p>
          <strong>Durum:</strong> {evaluation.status.replace("-", " ")}
        </p>
      </div>
      <button
        onClick={() => handleClick(evaluation?.applicationId)}
        className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Detay
      </button>
    </div>
  );
};

export default Evaluations;
