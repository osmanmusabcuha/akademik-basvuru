import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 text-sm">
      <p>
        &copy; {new Date().getFullYear()} Akademik Başvuru Sistemi. Tüm Hakları
        Saklıdır.
      </p>
    </footer>
  );
};

export default Footer;
