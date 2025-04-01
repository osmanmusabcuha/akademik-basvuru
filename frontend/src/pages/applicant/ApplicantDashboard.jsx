export const ApplicantDashboard = () => (
  <div className="container mx-auto py-12">
    <h1 className="text-3xl font-bold mb-4">👤 Aday Paneli</h1>
    <p className="text-gray-600 mb-6">
      Akademik pozisyonlara yaptığınız başvuruları buradan yönetebilirsiniz.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <DashboardCard
        title="Başvuru Yap"
        desc="Yayınlanan ilanlara yeni başvuru yap"
      />
      <DashboardCard
        title="Başvuru Takibi"
        desc="Yaptığınız başvuruların durumunu gözlemleyin"
      />
      <DashboardCard
        title="Puan Görüntüleme"
        desc="Jüri tarafından verilen puanları inceleyin"
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
