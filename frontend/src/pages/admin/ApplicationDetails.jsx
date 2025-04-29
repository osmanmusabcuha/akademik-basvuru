import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/auth-store";
import { useFetch } from "../../hooks/use-fetch";
import RoleAddDialog from "../../components/manage-dialog";

const ApplicationDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [selectedJury, setSelectedJury] = useState([]);

  const { token } = useAuthStore();

  const data = location?.state;

  console.log(data);

  const { data: userData } = useFetch(
    `http://localhost:3000/api/users/${data?.userId}`,
    "GET",
    token
  );

  const { data: postingData } = useFetch(
    `http://localhost:3000/api/postings/${data?.postingId}`,
    "GET",
    token
  );

  const { data: usersData } = useFetch(
    `http://localhost:3000/api/users/`,
    "GET",
    token
  );

  const { data: juryPostingData, loading: juryPostingLoading } = useFetch(
    `http://localhost:3000/api/juries/posting/${data?.postingId}`,
    "GET",
    token
  );

  console.log("Jury Posting Data: ", juryPostingData);
  console.log("Jury Posting Loading: ", juryPostingLoading);

  const userRoleJuries = usersData?.filter((user) => {
    return user.role === "juri";
  });

  console.log(userRoleJuries);

  const requirements = postingData?.requirements;

  useEffect(() => {
    if (!data) {
      navigate("/404");
    }
  }, [data, navigate]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleJury = async (userId) => {
    setSelectedJury([...selectedJury, { userId }]);
  };

  useEffect(() => {
    const updateApplicationStatus = async () => {
      if (juryPostingData?.length > 0) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/applications/${data?.applicationId}/status`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                status: "juri-degerlendiriyor",
              }),
            }
          );

          if (!response.ok) {
            console.error("Failed to update application status");
          }
        } catch (error) {
          console.error("Error updating application status:", error);
        }
      }
    };

    updateApplicationStatus();
  }, [juryPostingData, data?.applicationId, token]);

  const handleSubmit = async () => {
    selectedJury.forEach(async (jury) => {
      const response = await fetch(`http://localhost:3000/api/juries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: jury.userId,
          postingId: data?.postingId,
        }),
      });
      if (!response.ok) {
        console.error("Failed to add jury");
      }
    });

    const response = await fetch(
      `http://localhost:3000/api/applications/${data?.applicationId}/status`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          status: "juri-degerlendiriyor",
        }),
      }
    );
    if (!response.ok) {
      console.error("Failed to update application status");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userData && <UserCard user={userData} />}
        {requirements && <PostingCard requirements={requirements} />}
        {juryPostingLoading && (
          <div className="flex items-center justify-center">
            <p className="text-gray-600">Kontrol Ediliyor...</p>
          </div>
        )}
        <StatusCard
          onClick={handleClick}
          status={data?.status.replace("-", " ")}
          isAdded={juryPostingData?.length > 0}
          juryPostingData={juryPostingData}
        />
      </div>
      <div>
        <RoleAddDialog open={open} onOpenChange={handleClose} title="Jüri Ekle">
          <div className="flex flex-col gap-4">
            {userRoleJuries?.map((user) => {
              const isSelected = selectedJury.some(
                (jury) => jury.userId == user.id
              );
              return (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-md"
                >
                  <p className="text-gray-800">{user.name}</p>

                  <button
                    onClick={() => {
                      handleJury(user.id);
                    }}
                    disabled={isSelected}
                    className={`px-4 py-2 rounded-lg ${
                      isSelected
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {isSelected ? "Eklendi" : "Ekle"}
                  </button>
                </div>
              );
            })}
            <button
              onClick={() => {
                handleSubmit();
                handleClose();
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Onayla
            </button>
          </div>
        </RoleAddDialog>
      </div>
    </>
  );
};

const UserCard = ({ user }) => {
  return (
    <div className="max-w-full lg:col-span-1 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Aday Detayları</h2>
      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-medium text-gray-800">ID:</span> {user?.id}
        </p>
        <p className="text-gray-600">
          <span className="font-medium text-gray-800">İsim:</span> {user?.name}
        </p>
        <p className="text-gray-600">
          <span className="font-medium text-gray-800">E-posta:</span>{" "}
          {user?.email}
        </p>
        <p className="text-gray-600">
          <span className="font-medium text-gray-800">Role:</span> {user?.role}
        </p>
      </div>
    </div>
  );
};

const PostingCard = ({ requirements }) => {
  console.log(requirements);
  return (
    <div className="max-w-full lg:col-span-1 p-6 bg-green-400 border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-white mb-4">İlan Gereksinımleri</h2>
      <div className="space-y-2">
        {requirements.map((req, index) => (
          <div className="flex flex-col">
            <p key={index} className="text-gray-600">
              <span className="font-medium text-white">Gereksinim:</span>{" "}
              {req.requirement}
            </p>
            <p className="text-gray-900">
              <span className="font-medium text-white">Sayısı:</span>{" "}
              {req.requiredCount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatusCard = ({ status, onClick, isAdded, juryPostingData }) => {
  console.log(isAdded);
  return (
    <div className="max-w-full lg:col-span-1 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Başvuru Durumu</h2>
      <p className="text-gray-600 mb-2"> {status}</p>
      {isAdded ? (
        <div className="max-w-full text-white bg-green-400 rounded-lg">
          {juryPostingData?.length > 0 &&
            juryPostingData.map((jury) => {
              return (
                <div className="flex gap-2 justify-evenly">
                  <p
                    key={jury.id}
                    className="text-gray-600 mb-2 bg-green-400 p-2 rounded-lg"
                  >
                    <span className="font-medium text-white">ID:</span>{" "}
                    {jury.userId}
                  </p>
                  <p
                    key={jury.name}
                    className="text-gray-600 mb-2 bg-green-400 p-2 rounded-lg"
                  >
                    <span className="font-medium text-white">Adı:</span>{" "}
                    {jury.name}
                  </p>
                </div>
              );
            })}
        </div>
      ) : status == "belgeler inceleniyor" ? (
        <div>
          <button
            onClick={onClick}
            className="bg-green-400 text-white p-2 rounded-lg mt-4"
          >
            Juri Ekle
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ApplicationDetails;
