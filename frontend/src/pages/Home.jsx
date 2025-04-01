import AnnouncementTable from "../components/announcement-table";

const Home = () => {
  return (
    <>
      <section className="bg-gray-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Akademik Başvuru Sistemi
        </h1>
        <p className="text-gray-600 text-lg">
          Başvuru sürecini kolaylaştırmak için buradayız.
        </p>
      </section>
      <section className="container mx-auto px-6 py-10">
        {<AnnouncementTable />}
      </section>
    </>
  );
};

export default Home;
