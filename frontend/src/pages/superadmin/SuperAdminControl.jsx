export const SuperAdminControl = () => (
  <div className="container mx-auto py-12">
    <h1 className="text-3xl font-bold mb-4">⚙️ Sistem Yöneticisi Paneli</h1>
    <p className="text-gray-600 mb-6">
      Sistem genel ayarlarını ve kullanıcı yönetimini sağlarsınız.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <DashboardCard
        title="Kullanıcı Yönetimi"
        desc="Yeni kullanıcı oluştur, rolleri düzenle"
      />
      <DashboardCard
        title="Yetki Denetimi"
        desc="Tüm sistem rollerinin izinlerini kontrol et"
      />
      <DashboardCard
        title="Sistem Kıyıtları"
        desc="Loglar ve işlem tarihçesini gözlemle"
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
