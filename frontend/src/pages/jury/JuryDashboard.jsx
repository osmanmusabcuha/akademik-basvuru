export const JuryDashboard = () => (
  <div className="container mx-auto py-12">
    <h1 className="text-3xl font-bold mb-4">📋 Jüri Paneli</h1>
    <p className="text-gray-600 mb-6">
      Size atanılmış ilanları ve başvuruları değerlendirin.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <DashboardCard
        title="Başvuruları İncele"
        desc="Size atanan aday başvurularını görüntüleyin"
      />
      <DashboardCard
        title="Aday Değerlendirme"
        desc="Puanlama formunu doldurun"
      />
      <DashboardCard
        title="Değerlendirme Durumları"
        desc="Tamamlanan ve bekleyen işlemleri takip edin"
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
