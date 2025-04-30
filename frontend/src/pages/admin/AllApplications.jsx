import React from "react";
import { useFetch } from "../../hooks/use-fetch";
import { useAuthStore } from "../../store/auth-store";
import { useNavigate } from "react-router-dom";

const AllApplications = () => {
  const { token } = useAuthStore();

  const navigate = useNavigate();

  const { data: applicationsData, fetchData: fetchAppData } = useFetch(
    "http://localhost:3000/api/applications",
    "GET",
    token
  );

  const groupedApplications = applicationsData?.reduce((acc, application) => {
    const { postingId } = application;
    if (!acc[postingId]) {
      acc[postingId] = [];
    }
    acc[postingId].push(application);
    return acc;
  }, {});

  console.log(groupedApplications);

  const handleClick = (applicationId, postingId, status, userId) => {
    navigate(`/dashboard/all-applications/${applicationId}`, {
      state: { applicationId, postingId, status, userId },
    });
  };

  const handleUpdateStatus = async (postingId) => {
    const filteredApplications = applicationsData.filter(
      (application) => application.postingId == postingId
    );
    console.log("Filtered Applications:", filteredApplications);
    const maxScore = Math.max(
      ...filteredApplications.map((application) => application.totalScore)
    );
    console.log("Max Score:", maxScore);

    filteredApplications.forEach(async (application) => {
      await fetch(
        `http://localhost:3000/api/applications/${application.id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status:
              application.totalScore == maxScore ? "onaylandı" : "reddedildi",
          }),
        }
      );
    });
    fetchAppData();
  };

  return (
    <div>
      <section className="flex flex-col relative px-6 text-white text-left mb-4 shadow-md h-60 bg-center bg-cover bg-[url('/kou-banner.webp')] rounded-2xl">
        <div className="mt-auto">
          <div className="absolute inset-0 bg-green-500 rounded-2xl opacity-40 mix-blend-multiply"></div>
          <h1 className="text-4xl text-white relative z-10 md:text-5xl lg:text-6xl w-fit p-2 rounded font-bold mb-2">
            Tüm Başvurular
          </h1>
        </div>
      </section>
      {groupedApplications &&
        Object.entries(groupedApplications).map(([postingId, applications]) => (
          <div
            key={postingId}
            className="shadow-lg mb-4 max-w-full pb-4 flex flex-col justify-center gap-4 rounded-lg"
          >
            <h2 className="text-2xl rounded-t-lg p-2 border-b-1 px-6 flex items-center bg-gray-100 font-semibold mb-4 text-gray-800">
              <div className="flex gap-6">
                <p>
                  İlan ID: <span className="text-green-600">{postingId}</span>
                </p>
                {applications.every((app) => app.status == "puanlama-bitti") ? (
                  <button
                    className="hover:text-green-500 underline"
                    onClick={() => handleUpdateStatus(postingId)}
                  >
                    Sonuclandır
                  </button>
                ) : (
                  ""
                )}
              </div>
            </h2>
            {applications.map((application) => (
              <div
                key={application.id}
                className="flex flex-col md:bg-gray-100 md:flex-row gap-6 items-center justify-between transition-shadow duration-300 hover:shadow-xl p-3 rounded-xl hover:bg-gray-200 mx-6"
              >
                <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
                  <div className="bg-gray-100 rounded-full flex justify-center items-center">
                    <img
                      src="/kou-logo.png"
                      alt="Logo"
                      className="w-32 h-32 md:w-24 md:h-24"
                    />
                  </div>
                  <div className="text-2xl md:text-[18px] text-gray-600 flex flex-col items-center md:items-baseline">
                    <p className="mb-2">
                      <strong>Başvuru ID:</strong>{" "}
                      <span className="text-green-600">{application.id}</span>
                    </p>
                    <p className="mb-2">
                      <strong>Başvuru Tarihi:</strong>{" "}
                      {new Date(
                        application.applicationDate
                      ).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600 font-medium">
                      <strong>Durum:</strong>{" "}
                      {application.status.replace("-", " ")}
                    </p>
                  </div>
                </div>
                <div className="text-green-500 text-4xl md:text-3xl flex font-semibold">
                  {application.status == "puanlama-bitti"
                    ? application.totalScore
                    : ""}
                </div>
                {application.status == "puanlama-bitti" ? (
                  <button
                    className="bg-gray-600 w-full md:w-fit text-white px-6 py-3 rounded-lg text-md font-medium hover:bg-gray-700 transition-colors duration-300"
                    disabled
                  >
                    Detaylar
                  </button>
                ) : (
                  <button
                    className="bg-green-600 w-full md:w-fit text-white px-6 py-3 rounded-lg text-md font-medium hover:bg-green-700 transition-colors duration-300"
                    onClick={() =>
                      handleClick(
                        application.id,
                        postingId,
                        application.status,
                        application.userId
                      )
                    }
                  >
                    Detaylar
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default AllApplications;
