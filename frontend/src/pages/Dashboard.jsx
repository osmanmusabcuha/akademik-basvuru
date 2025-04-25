import { useAuthStore } from "../store/auth-store";

const Dashboard = () => {
  const { user } = useAuthStore();

  return (
    <>
      <section className="flex flex-col relative text-white text-left mb-4 shadow-md px-6 h-60 bg-center bg-cover bg-[url('/kou-banner.webp')] rounded-2xl">
        <div className="mt-auto">
          <div className="absolute inset-0 bg-green-500 rounded-2xl opacity-40 mix-blend-multiply"></div>
          <h1 className="text-5xl text-white relative z-10 lg:text-6xl w-fit p-2 rounded font-bold mb-2">
            Panel{" "}
          </h1>
        </div>
      </section>
      <section className="container py-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-6 ">
          <div className="flex-shrink-0">
            <img
              src="./kou-logo.png"
              alt="KOU Logo"
              className="w-32 h-32 object-contain rounded-full border border-gray-200"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Kullanıcı Bilgileri
            </h2>
            {user ? (
              <div className="text-gray-700 space-y-1 text-sm">
                <p>
                  <span className="font-semibold">TC No:</span>{" "}
                  {user.tcNo || "Bilinmiyor"}
                </p>
                <p>
                  <span className="font-semibold">Ad:</span>{" "}
                  {user.name || "Bilinmiyor"}
                </p>
                <p>
                  <span className="font-semibold">Soyad:</span>{" "}
                  {user.surname || "Bilinmiyor"}
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  {user.email || "Bilinmiyor"}
                </p>
                <p>
                  <span className="font-semibold">Role:</span>{" "}
                  {user.role || "Bilinmiyor"}
                </p>
              </div>
            ) : (
              <p className="text-gray-500">Kullanıcı bilgisi bulunamadı.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
