import React, { useState } from "react";
import { useAuthStore } from "../../store/auth-store";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/use-fetch";
import ManageDialog from "../../components/manage-dialog";

const Evaluation = () => {
  const { token } = useAuthStore();
  const [open, setOpen] = useState(false);
  const [documentScore, setDocumentScore] = useState(0);
  const [stateDocumentId, setStateDocumentId] = useState(null);
  const location = useLocation();
  console.log(location.state);
  const { applicationId } = location?.state || {};
  const { data: evaluationsData, loading: evaluationsLoading } = useFetch(
    `http://localhost:3000/api/evaluations/application/${applicationId}`,
    "GET",
    token
  );

  const {
    data: applicationsData,
    loading: applicationsLoading,
    fetchData: fetchApplicationsData,
  } = useFetch(`http://localhost:3000/api/applications/`, "GET", token);
  console.log("Applications Data: ", applicationsData);

  const applicationData = applicationsData?.find(
    (application) => application.id === applicationId
  );

  console.log("Application Data: ", applicationData);

  const { data: answerData, loading: answerLoading } = useFetch(
    `http://localhost:3000/api/answers/application/${applicationId}`,
    "GET",
    token
  );

  console.log("Answer Data: ", answerData);

  const {
    data: applicationDocument,
    loading: documentLoading,
    fetchData: fetchApplicationData,
  } = useFetch(
    `http://localhost:3000/api/documents/application/${applicationId}`,
    "GET",
    token
  );

  const handleDocument = async (documentId) => {
    console.log("Document ID: ", documentId);
    setStateDocumentId(documentId);
    setOpen(true);
    fetchApplicationData();
  };

  const handleTotalScore = async () => {
    const totalDocumentScore = applicationDocument.reduce((acc, document) => {
      if (document.score) {
        return acc + document.score;
      }
      return acc;
    }, 0);

    const totalAnswerScore = answerData.reduce((acc, answer) => {
      if (answer.score) {
        return acc + answer.score;
      }
      return acc;
    }, 0);
    const totalScore = totalDocumentScore + totalAnswerScore;

    console.log("Total Score: ", totalScore);

    try {
      const response = await fetch(
        `http://localhost:3000/api/applications/${applicationId}/score`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            totalScore: totalScore,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update total score");
      }
      const responseStatus = await fetch(
        `http://localhost:3000/api/applications/${applicationId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status: "puanlama-bitti",
          }),
        }
      );
      if (!responseStatus.ok) {
        console.error("Failed to update application status");
      }
      fetchApplicationData();
      fetchApplicationsData();
    } catch (error) {
      console.error("Error updating total score:", error);
    }
  };

  const handleSubmitDocumentScore = async (documentScore) => {
    console.log("documentScore: ", documentScore);
    console.log("stateDocumentId: ", stateDocumentId);
    try {
      const response = await fetch(
        `http://localhost:3000/api/documents/${stateDocumentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            score: documentScore,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update document score");
      }
      fetchApplicationData();
    } catch (error) {
      console.error("Error updating document score:", error);
    }
  };

  return (
    <>
      <div>
        {applicationsLoading && (
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Loading...</h1>
          </div>
        )}
        <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-4">
          <h1 className="text-3xl font-bold m-2">Degerlendirme</h1>
          {applicationData?.totalScore == 0 ? (
            <button
              onClick={handleTotalScore}
              className="bg-green-600 hover:bg-green-700 p-2 rounded-md text-white font-semibold transition"
            >
              Puan Hesapla
            </button>
          ) : (
            <p className="text-lg font-bold text-green-600">
              Toplam Puan: {applicationData?.totalScore}
            </p>
          )}
        </div>
        <h1 className="text-2xl font-bold m-2">Juri Degerlendirmeleri</h1>
        {evaluationsLoading && (
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Loading...</h1>
          </div>
        )}
        {evaluationsData && evaluationsData.length > 0 ? (
          <div className="container max-w-full grid @min-6xl:grid-cols-2 grid-cols-1 gap-4">
            {evaluationsData.map((evaluation) => (
              <EvaluationCard key={evaluation.id} evaluation={evaluation} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Henüz Değerlendirme Yok</h1>
          </div>
        )}
      </div>
      <div>
        <h1 className="text-3xl font-bold m-2">Adayın (Tablo-1) Attıkları</h1>
        {documentLoading && (
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Loading...</h1>
          </div>
        )}
        {applicationDocument && applicationDocument.length > 0 ? (
          <div className="container max-w-full grid @min-6xl:grid-cols-2 grid-cols-1 gap-4">
            {applicationDocument.map((document) => (
              <DocumentCard
                key={document.id}
                handleDocument={handleDocument}
                document={document}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Henüz Değerlendirme Yok</h1>
          </div>
        )}
      </div>
      <div>
        <h1 className="text-3xl font-bold m-2">Adayın (Tablo-3) Cevapları</h1>
        {answerLoading && (
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Loading...</h1>
          </div>
        )}
        <div className="container max-w-full grid @min-6xl:grid-cols-2 grid-cols-1 gap-4">
          {answerData?.map((answer) => (
            <AnswerCard key={answer.id} answerData={answer} />
          ))}
        </div>
      </div>
      <ManageDialog open={open} onOpenChange={setOpen} title="Puanlama">
        <div className="flex flex-col gap-4">
          <label className="text-lg font-bold text-gray-700">
            Puan:
            <input
              type="number"
              className="mt-2 p-2 border rounded-md w-full"
              placeholder="Puanı girin"
              onChange={(e) => {
                setDocumentScore(e.target.value);
              }}
            />
          </label>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            onClick={() => {
              handleSubmitDocumentScore(documentScore);
              setOpen(false);
            }}
          >
            Kaydet
          </button>
        </div>
      </ManageDialog>
    </>
  );
};

const EvaluationCard = ({ evaluation }) => {
  return (
    <div className="flex items-baseline flex-col bg-gray-100 md:flex-row gap-6 md:items-center justify-between transition-shadow duration-300 hover:shadow-xl p-3 rounded-xl hover:bg-gray-200 ">
      <div className="flex flex-col items-start gap-3">
        <h2 className="text-lg font-semibold">Jüri ID: {evaluation.juryId}</h2>
        <p className="text-sm text-gray-500">
          <strong>Yorum:</strong> {evaluation.comment}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Karar:</strong> {evaluation.decision}
        </p>
        {evaluation.evaluationFilePath && (
          <a
            href={evaluation.evaluationFilePath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline"
          >
            Değerlendirme Dosyasını Görüntüle
          </a>
        )}
      </div>
    </div>
  );
};

const DocumentCard = ({ document, handleDocument }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border">
      <h2 className="text-lg font-bold text-green-600 mb-2">
        <span className="font-bold text-gray-800">ID:</span> {document.id}
      </h2>
      <p className="text-lg font-bold text-gray-600 mb-4">
        <span className="font-bold text-gray-800">Doküman Türü:</span>{" "}
        {document.documentType || "Belirtilmemiş"}
      </p>
      <p className="text-lg font-bold text-gray-600 mb-4">
        <span className="font-bold text-gray-800">Yazar Rolü:</span>{" "}
        {document.authorRole || "Belirtilmemiş"}
      </p>
      <a
        href={document.documentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        İndir
      </a>
      {document.score == 0 ? (
        <button
          onClick={() => handleDocument(document.id)}
          className="mt-4 ml-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Puanla
        </button>
      ) : (
        <p className="mt-4 ml-2 text-green-600 font-bold">
          Puan: {document.score}
        </p>
      )}
    </div>
  );
};

const AnswerCard = ({ answerData }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border">
      <h2 className="text-lg font-bold text-green-600 mb-2">
        <span className="font-bold text-gray-800">Soru ID:</span>{" "}
        {answerData.questionId}
      </h2>
      <p className="text-lg font-bold text-gray-600 mb-4">
        <span className="font-bold text-gray-800">Cevap:</span>{" "}
        {answerData.answer || "Boş"}
      </p>
      <p className="text-lg font-bold text-gray-600 mb-4">
        <span className="font-bold text-gray-800">Puan:</span>{" "}
        {answerData.score}
      </p>
      {answerData.filePath && (
        <a
          href={answerData.filePath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          İndir
        </a>
      )}
    </div>
  );
};

export default Evaluation;
