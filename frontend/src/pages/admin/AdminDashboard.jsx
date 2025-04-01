export const AdminPanel = () => (
  <div className="container mx-auto py-12">
    <h1 className="text-3xl font-bold mb-4">🛠 Yönetici Paneli</h1>
    <p className="text-gray-600 mb-6">
      Akademik kadro işlemlerini ve jüri yönetimini burada gerçekleştirin.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <DashboardCard
        title="Kadro Oluştur"
        desc="Yeni ilan oluşturun ve yayınlayın"
      />
      <DashboardCard
        title="Başvuruları Yönet"
        desc="Aday başvurularını inceleyin ve yönlendirin"
      />
      <DashboardCard
        title="Jüri Atama"
        desc="İlanlara jüri ataması yapın ve puanlayıcıları belirleyin"
      />
    </div>
  </div>
);
const DashboardCard = ({ title, desc }) => (
  <div className="bg-white shadow rounded-lg p-6 hover:shadow-md transition cursor-pointer">
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-500">{desc}</p>
  </div>
);
