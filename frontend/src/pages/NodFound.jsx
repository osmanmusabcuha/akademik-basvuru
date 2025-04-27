import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-6 bg-green-100 shadow-lg rounded-lg">
        <h1 className="text-5xl font-bold text-green-600">404</h1>
        <p className="text-xl mt-4">Sayfa Bulunamadı</p>
        <p className="mt-2 text-gray-500">
          Üzgünüz, aradığınız sayfa bulunamadı.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
