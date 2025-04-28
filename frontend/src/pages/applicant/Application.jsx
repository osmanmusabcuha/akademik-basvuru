import React, { useState } from "react";
import { useFetch } from "../../hooks/use-fetch.js";
import { useAuthStore } from "../../store/auth-store.jsx";
import ManageDialog from "../../components/manage-dialog.jsx";
import { useNavigate } from "react-router-dom";

const Application = () => {
  const { user, token } = useAuthStore();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { data: applicationsData } = useFetch(
    "http://localhost:3000/api/applications/user/" + user.id,
    "GET",
    token
  );
  console.log(applicationsData);

  const handleClick = (applicationId, postingId) => {
    console.log("Application ID:", applicationId);
    console.log("Posting ID:", postingId);
    navigate(`${applicationId}/application-documents`, {
      state: { applicationId, postingId },
    });
  };

  return (
    <div>
      <section className="flex flex-col relative px-6 text-white text-left mb-4 shadow-md h-60 bg-center bg-cover bg-[url('/kou-banner.webp')] rounded-2xl">
        <div className="mt-auto">
          <div className="absolute inset-0 bg-green-500 rounded-2xl opacity-40 mix-blend-multiply"></div>
          <h1 className="text-4xl text-white relative z-10 md:text-5xl lg:text-6xl w-fit p-2 rounded font-bold mb-2">
            Başvurularım
          </h1>
        </div>
      </section>
      {applicationsData && applicationsData.length > 0 ? (
        <div className="container max-w-full flex flex-col gag-2 justify-center">
          {applicationsData.map((application) => (
            <div
              key={application.id}
              className="bg-white shadow-lg px-6 py-4 flex flex-col justify-center gap-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Başvuru ID:{" "}
                <span className="text-green-600">{application.id}</span>
              </h2>
              <div className="flex gap-6 items-center mb-4">
                <div className=" bg-gray-100 rounded-full flex justify-center items-center">
                  <img src="/kou-logo.png" alt="Logo" className="w-24 h-24" />
                </div>
                <div className="text-md text-gray-600">
                  <p className="mb-2">
                    <strong>Başvuru Tarihi:</strong>{" "}
                    {new Date(application.applicationDate).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600 font-medium">
                    <strong>Durum:</strong>{" "}
                    {application.status.replace("-", " ")}
                  </p>
                </div>
              </div>
              {application.status === "belgeler-bekleniyor" && (
                <button
                  className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors duration-300"
                  onClick={() =>
                    handleClick(application.id, application.postingId)
                  }
                >
                  Belgeleri Yükle
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Başvuru bulunmamaktadır.</p>
      )}
      <div>
        <ManageDialog open={open} setOpen={setOpen}></ManageDialog>
      </div>
    </div>
  );
};

export default Application;
