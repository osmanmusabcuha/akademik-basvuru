import React, { useState } from "react";
import { useFetch } from "../../hooks/use-fetch.js";
import AnnouncementCard from "../../components/announcement-card.jsx";
import { useAuthStore } from "../../store/auth-store.jsx";
import ManageDialog from "../../components/manage-dialog.jsx";
import axios from "axios";

const Posting = () => {
  const [open, setOpen] = useState(false);
  const [postingId, setPostingId] = useState(null);
  const { user, token } = useAuthStore();
  const { data, error, loading } = useFetch(
    "http://localhost:3000/api/postings",
    "GET"
  );
  const { data: applicationsData, fetchData: fetchApplicationData } = useFetch(
    "http://localhost:3000/api/applications/user/" + user.id,
    "GET",
    token
  );

  const handleButtonClick = (id) => {
    setPostingId(id);
    setOpen(!open);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/applications/`,
        {
          userId: user.id,
          postingId: postingId,
          status: "belgeler-bekleniyor",
          applicationDate: new Date().toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      fetchApplicationData();
      console.log("Onaylandı:", response.data);
    } catch (error) {
      console.error("Onaylama hatası:", error);
    } finally {
      setOpen(!open);
    }
  };

  return (
    <>
      <div>
        <section className="flex flex-col relative px-6 text-white text-left mb-4 shadow-md h-60 bg-center bg-cover bg-[url('/kou-banner.webp')] rounded-2xl">
          <div className="mt-auto">
            <div className="absolute inset-0 bg-green-500 rounded-2xl opacity-40 mix-blend-multiply"></div>
            <h1 className="text-4xl text-white relative z-10 md:text-5xl lg:text-6xl w-fit p-2 rounded font-bold mb-2">
              Aktif İlanlar
            </h1>
          </div>
        </section>
        <section className="container mx-auto py-2 grid grid-cols-1 lg:grid-cols-2 gap-4 space-y-1">
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {data &&
            data
              .filter((item) =>
                applicationsData?.some((app) => app?.postingId !== item?.id)
              )
              .map(
                (item, index) =>
                  item.requirements.length > 0 && ( // Eğer requirements boş değilse
                    <div key={index} className="h-full">
                      <AnnouncementCard
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        startDate={item.startDate}
                        endDate={item.endDate}
                        facultyName={item.facultyName}
                        requirements={item.requirements}
                        onClick={(id) => handleButtonClick(id)}
                      />
                    </div>
                  )
              )}
        </section>
        <ManageDialog open={open} setOpen={setOpen}>
          <div key={postingId} className="flex flex-col gap-4 p-4">
            <div className="flex flex-col text-2xl items-center justify-center h-full">
              <h2>Başvuruyu onaylıyor musunuz?</h2>
            </div>
            <div className="flex gap-4 items-center justify-center h-full">
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Onayla
              </button>
              <button
                onClick={() => {
                  setOpen(!open);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                İptal Et
              </button>
            </div>
          </div>
        </ManageDialog>
      </div>
    </>
  );
};

export default Posting;
