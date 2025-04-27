import React from "react";

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-6 bg-red-100 shadow-lg rounded-lg">
        <h1 className="text-5xl font-bold text-red-600">403</h1>
        <p className="text-xl mt-4">Yetkisiz Erişim</p>
        <p className="mt-2 text-gray-500">
          Bu sayfayı görüntüleme yetkiniz bulunmamaktadır.
        </p>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
