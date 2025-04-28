import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/use-fetch";
import axios from "axios";
import SelectComp from "../../components/select";
import { useAuthStore } from "../../store/auth-store.jsx";

const ApplicationDocuments = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { token } = useAuthStore();

  const [formData, setFormData] = useState({});
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const data = location.state;

  const { data: postingData } = useFetch(
    `http://localhost:3000/api/postings/${data.postingId}`,
    "GET"
  );

  const applicationId = data.applicationId;

  const { data: applicationData, fetchData: fetchAppData } = useFetch(
    `http://localhost:3000/api/documents//application/${applicationId}`,
    "GET"
  );

  const { data: answersData, fetchData: fetchAnsData } = useFetch(
    `http://localhost:3000/api/answers/application/${applicationId}`,
    "GET"
  );

  console.log("answersData", answersData);

  const { data: questionsData, error: questionsError } = useFetch(
    `http://localhost:3000/api/questions/`,
    "GET"
  );

  useEffect(() => {
    if (questionsError) {
      console.error("Sorular yüklenirken bir hata oluştu:", questionsError);
    } else if (!questionsData || questionsData.length === 0) {
      console.warn(
        "Sorular verisi boş veya beklenmeyen bir formatta:",
        questionsData
      );
    } else {
      console.log("Sorular verisi:", questionsData);
    }
  }, [questionsData, questionsError]);

  const requirements = postingData?.requirements;
  const filteredRequirements = requirements?.filter(
    (item) => item.requirement !== "baslıca-yazar"
  );

  useEffect(() => {
    if (!data) {
      navigate("/404");
    }
  }, [data, navigate]);

  useEffect(() => {
    const isRequirementsCompleted = filteredRequirements?.every((item) =>
      applicationData?.some((doc) => doc.documentType === item.requirement)
    );

    const isQuestionsCompleted = answersData && answersData.length > 0;

    if (isRequirementsCompleted && isQuestionsCompleted) {
      console.log("Tamamlandı");

      const updateApplicationStatus = async () => {
        try {
          await axios.put(
            `http://localhost:3000/api/applications/${applicationId}/status`,
            {
              status: "belgeler-inceleniyor",
            },
            {
              headers: {
                Authorization: `Bearer ${token}`, // Token ekleniyor
              },
            }
          );
          console.log("Başvuru durumu güncellendi.");
        } catch (err) {
          console.error("Başvuru durumu güncellenirken bir hata oluştu:", err);
        }
      };

      updateApplicationStatus();
    }
  }, [filteredRequirements, applicationData, answersData, applicationId]);

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

  const isSelecting = useRef(false); // Seçim kontrolü için useRef

  const handleQuestionSelect = (value) => {
    if (isSelecting.current) return; // Eğer işlem devam ediyorsa çık
    isSelecting.current = true; // İşlem başladığını işaretle

    const questionId = Number(value); // questionId'yi sayıya dönüştür
    console.log("Seçilen soru ID'si:", questionId);

    setSelectedQuestions((prev) => [
      ...prev,
      { questionId, files: [], answer: "" },
    ]);

    setTimeout(() => {
      isSelecting.current = false; // İşlem tamamlandıktan sonra sıfırla
    }, 0);
  };

  const handleQuestionFileChange = (e, questionIndex) => {
    const file = e.target.files[0];
    setSelectedQuestions((prev) => {
      const updatedQuestions = [...prev];
      updatedQuestions[questionIndex].files.push(file);
      return updatedQuestions;
    });
  };

  const handleAnswerChange = (e, questionIndex) => {
    const answer = e.target.value;
    setSelectedQuestions((prev) => {
      const updatedQuestions = [...prev];
      updatedQuestions[questionIndex].answer = answer;
      return updatedQuestions;
    });
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

      for (const question of selectedQuestions) {
        const formDataToSend = new FormData();
        formDataToSend.append("applicationId", data.applicationId);
        formDataToSend.append("questionId", question.questionId);
        formDataToSend.append("answer", question.answer || "");
        if (question.files.length > 0) {
          formDataToSend.append("file", question.files[0]);
        }

        await axios.post(
          "http://localhost:3000/api/answers/upload",
          formDataToSend,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      }
      fetchAppData(); // Başvuru belgelerini güncelle
      fetchAnsData();
      alert("Sorular başarıyla gönderildi!");
    } catch (err) {
      console.error("Hata:", err);
      alert("Sorular gönderilirken bir hata oluştu.");
    }
  };

  const limitedQuestionsData = Array.isArray(questionsData?.questions)
    ? questionsData.questions.slice(0, 10) // İlk 10 elemanı al
    : [];

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
      <form className="space-y-6 p-6 bg-gray-100 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-4">Sorular</h2>
        {answersData && answersData.length > 0 ? (
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Sorular</h3>
            <p className="text-green-600 font-semibold">Tamamlandı</p>
          </div>
        ) : (
          <>
            {limitedQuestionsData.length > 0 ? (
              <SelectComp
                options={limitedQuestionsData.map((q) => ({
                  value: q.id,
                  label: q.question,
                }))}
                onChange={(value) => {
                  console.log(
                    "onChange tetiklendi, seçilen soru ID'si:",
                    value
                  );
                  handleQuestionSelect(value);
                }}
                placeholder="Bir soru seçiniz"
              />
            ) : (
              <p>Soru bulunamadı. Lütfen API'yi kontrol edin.</p>
            )}
            {selectedQuestions.map((question, index) => (
              <div key={index} className="p-4 bg-white rounded shadow mt-4">
                <h3 className="text-lg font-semibold mb-2">
                  {
                    limitedQuestionsData.find(
                      (q) => q.id === question.questionId
                    )?.question
                  }
                </h3>
                <textarea
                  placeholder="Cevabınızı giriniz"
                  value={question.answer || ""}
                  onChange={(e) => handleAnswerChange(e, index)}
                  className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                />
                <input
                  type="file"
                  onChange={(e) => handleQuestionFileChange(e, index)}
                  className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none mt-2"
                />
              </div>
            ))}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:ring focus:ring-blue-300 mt-4"
            >
              Gönder
            </button>
          </>
        )}
      </form>
    </>
  );
};

export default ApplicationDocuments;
