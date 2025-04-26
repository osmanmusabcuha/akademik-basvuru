import AnnouncementCard from "../components/announcement-card";
import { useFetch } from "../hooks/use-fetch";

const Home = () => {
  const { data, error, loading } = useFetch(
    "http://localhost:3000/api/postings",
    "GET"
  );

  const handleButtonClick = (id) => {
    console.log("Button clicked for item:", id);
    // Perform any action you want when the button is clicked
  };

  return (
    <>
      <div>
        <section className="flex flex-col relative text-white text-left mb-4 shadow-md px-6 mx-6 h-60 bg-center bg-cover bg-[url('/kou-banner.webp')] rounded-2xl">
          <div className="mt-auto">
            <div className="absolute inset-0 bg-green-500 rounded-2xl opacity-40 mix-blend-multiply"></div>
            <h1 className="text-3xl text-white relative z-10 md:text-4xl lg:text-6xl w-fit p-2 rounded font-bold mb-2">
              Aktif İlanlar
            </h1>
          </div>
        </section>
        <section className="container mx-auto px-6 py-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {data &&
            data.map(
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
      </div>
    </>
  );
};

export default Home;
