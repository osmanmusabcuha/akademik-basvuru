import AnnouncementCard from "../components/announcement-card";

const Home = () => {
  return (
    <>
      <div>
        <section className="flex flex-col text-white text-left mb-4 shadow-md px-6 mx-6 h-60 bg-center bg-cover bg-[url('/kou-banner.webp')] rounded-2xl">
          <div className="mt-auto">
            <h1 className="text-4xl font-bold mb-2">Aktif İlanlar</h1>
          </div>
        </section>
        <section className="container mx-auto px-6 py-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[0, 1, 2, 3].map((_, index) => (
            <div key={index} className="h-full">
              <AnnouncementCard
                title="İlan Başlığı"
                category="doc"
                startDate="2023-10-01"
                endDate="2023-10-31"
              />
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Home;
