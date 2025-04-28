import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/auth-store";
import { useFetch } from "../../hooks/use-fetch";
import RoleAddDialog from "../../components/manage-dialog";

const ApplicationDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const { token } = useAuthStore();

  const data = location?.state;

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

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userData && <UserCard user={userData} />}
        {requirements && <PostingCard requirements={requirements} />}
        <StatusCard
          onClick={handleClick}
          status={data?.status.replace("-", " ")}
        />
      </div>
      <div>
        <RoleAddDialog
          open={open}
          onOpenChange={handleClose}
          title="Jüri Ekle"
        ></RoleAddDialog>
      </div>
    </>
  );
};

const UserCard = ({ user }) => {
  return (
    <div className="max-w-full lg:col-span-1 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">User Details</h2>
      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-medium text-gray-800">ID:</span> {user?.id}
        </p>
        <p className="text-gray-600">
          <span className="font-medium text-gray-800">Name:</span> {user?.name}
        </p>
        <p className="text-gray-600">
          <span className="font-medium text-gray-800">Email:</span>{" "}
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

const StatusCard = ({ status, onClick }) => {
  console.log(status);
  return (
    <div className="max-w-full lg:col-span-1 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Başvuru Durumu</h2>
      <p className="text-gray-600"> {status}</p>
      {status == "belgeler inceleniyor" ? (
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
