import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/use-fetch";
import { useAuthStore } from "../../store/auth-store";
import { IconFilePlus } from "@tabler/icons-react";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import ManageDialog from "../../components/manage-dialog";
import ReactPDF from "@react-pdf/renderer";
import axios from "axios";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import { Input } from "../../components/ui/input";
import SelectComp from "../../components/select";

const EvaluationDetails = () => {
  const location = useLocation();
  const { token, user } = useAuthStore();
  const data = location?.state;

  const [comment, setComment] = useState("");
  const [decision, setDecision] = useState("");

  const [open, setOpen] = useState(false);
  console.log("open: ", open);

  const { data: documentData } = useFetch(
    `http://localhost:3000/api/documents/application/${data?.applicationId}`,
    "GET",
    token
  );

  const { data: answersData } = useFetch(
    `http://localhost:3000/api/answers/application/${data?.applicationId}`,
    "GET",
    token
  );

  const { data: questionData, loading: questionLoading } = useFetch(
    `http://localhost:3000/api/questions`,
    "GET",
    token
  );

  console.log(questionData);

  const {
    data: evaluationData,
    fetchData: fetchEvaData,
    loading: evaLoading,
  } = useFetch(
    `http://localhost:3000/api/evaluations/application/${data?.applicationId}`,
    "GET",
    token
  );
  console.log("Evaluation Loading: ", evaLoading);
  console.log("Evaluation Data: ", evaluationData);

  const handleButtonDialog = () => {
    setOpen(!open);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment || !decision) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    const MyDocument = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Basvuru ID: {data?.applicationId}</Text>
            <Text>Jury ID: {user?.id}</Text>
            <Text>Yorum: {comment}</Text>
            <Text>Karar: {decision}</Text>
          </View>
        </Page>
      </Document>
    );

    try {
      // PDF'i Blob olarak oluştur
      const blob = await pdf(MyDocument).toBlob();

      // FormData oluştur ve verileri ekle
      const formData = new FormData();
      formData.append("applicationId", data?.applicationId);
      formData.append("juryId", user?.id);
      formData.append("comment", comment);
      formData.append("decision", decision);
      formData.append("file", blob, "evaluation.pdf");

      // Backend'e POST isteği gönder
      await axios.post("http://localhost:3000/api/evaluations", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Evaluation başarıyla oluşturuldu!");
      setOpen(false);
      setComment("");
      setDecision("");
      fetchEvaData();
    } catch (error) {
      alert(`Hata: ${error.message}`);
      console.error("Error creating evaluation:", error);
      setOpen(false);
      setComment("");
      setDecision("");
    }

    try {
      await axios.put(
        `http://localhost:3000/api/applications/${data?.applicationId}/status`,
        {
          status: "yonetici-degerlendirme",
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

  console.log("Document Data: ", documentData);
  console.log("Answers Data: ", answersData);

  const answersResult = answersData?.map((answer) => {
    const question = questionData?.questions.find(
      (q) => q.id === answer?.questionId
    );
    return {
      ...answer,
      question: question ? question.question : "Soru bulunamadı",
    };
  });
  console.log("answersData: ", answersData);

  console.log("Answers Result: ", answersResult);
  return (
    <>
      <div className="p-6 min-h-screen container">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Degerlendirme</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {evaLoading && (
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-2xl font-bold">Loading...</h1>
            </div>
          )}
          {evaluationData?.length > 0 ? (
            <>
              <Card className=" border-gray-200 bg-white shadow-lg py-6 px-3 flex flex-col justify-between h-full transition-shadow duration-300 hover:shadow-lg">
                <div className="flex flex-col items-center justify-center h-full">
                  <h2 className="text-4xl font-bold text-gray-600 mb-4">
                    Olusturuldu
                  </h2>
                </div>
              </Card>
            </>
          ) : (
            <EvaluationCard handleButtonDialog={handleButtonDialog} />
          )}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Tablo 1 Dökümanları
        </h1>
        {documentData?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 @min-7xl:grid-cols-5 @min-6xl:grid-cols-4 gap-6">
            {documentData.map((doc) => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <h1 className="text-xl font-semibold text-gray-600">
              Doküman bulunamadı.
            </h1>
          </div>
        )}
        <h1 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
          Tablo 3 Dökümanları
        </h1>
        {questionLoading && (
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Loading...</h1>
          </div>
        )}
        {answersData?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {answersResult.map((answer) => (
              <AnswerCard key={answer.id} answer={answer} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-32">
            <p className="text-lg text-gray-500">Cevap bulunamadı.</p>
          </div>
        )}
        <ManageDialog
          title={"Yeni Değerlendirme Oluştur"}
          open={open}
          onOpenChange={setOpen}
        >
          <form onSubmit={handleSubmit}>
            <br />
            <label>
              Acıklama:
              <textarea
                className="border border-gray-200 rounded-md p-2 w-full"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Karar:
              <SelectComp
                options={[
                  { value: "kabul", label: "Kabul" },
                  { value: "reddedildi", label: "Reddedildi" },
                ]}
                value={decision}
                onChange={(select) => setDecision(select)}
                required
              />
            </label>
            <br />
            <button
              className="bg-green-500 text-white text-lg p-2 rounded-lg"
              type="submit"
            >
              Oluştur
            </button>
          </form>
        </ManageDialog>
      </div>
    </>
  );
};

const DocumentCard = ({ document }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-2 border">
      <h2 className="text-lg font-bold text-green-600 mb-2">
        <span className="font-bold text-gray-800">ID:</span> {document.id}
      </h2>
      <p className="text-lg font-bold text-gray-600 mb-4">
        {"Dokuman: " + (document.documentType || "Doküman")}
      </p>
      <p className="text-lg font-bold text-gray-600 mb-4">
        {document.authorRole && (
          <span className="font-bold text-gray-800">Yazar: </span>
        )}
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
    </div>
  );
};

const AnswerCard = ({ answer }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border">
      <h3 className="text-md font-bold text-gray-700 mb-2">
        Soru ID: {answer.questionId}
      </h3>
      <p className="text-gray-700 mb-2">
        <strong>Soru:</strong> {answer.question || "Boş"}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Cevap:</strong> {answer.answer || "Boş"}
      </p>
      {answer.filePath && (
        <a
          href={answer.filePath}
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

const EvaluationCard = ({ handleButtonDialog }) => {
  return (
    <Card className="border-4 border-dashed border-gray-200 bg-white shadow-lg py-6 px-3 flex flex-col justify-between h-full transition-shadow duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl font-bold text-gray-600 mb-4">Olustur</h2>
        <button
          onClick={handleButtonDialog}
          className="bg-white border-2 border-dashed text rounded"
        >
          <IconFilePlus
            className="inline-block cursor-pointer text-green-600 hover:text-green-800 hover:bg-green-100"
            width={64}
            height={64}
          />
        </button>
      </div>
    </Card>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
});

export default EvaluationDetails;
