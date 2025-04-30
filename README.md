# Akademik Başvuru Sistemi

Bu proje, adayların başvuru yapabileceği ve jüri üyelerinin bu başvuruları değerlendirebileceği, ayrıca yöneticilerin tüm süreci yönetebileceği bir rol tabanlı kullanıcı sistemi sunar.

## 🚀 Kurulum

Proje iki ana kısımdan oluşmaktadır:

### 🔧 Frontend

React tabanlı kullanıcı arayüzü. Kurulum ve çalıştırma adımları için:

👉 [Frontend README](./frontend/README.md)

### 🛠️ Backend

Node.js tabanlı RESTful API. Kurulum ve çalıştırma adımları için:

👉 [Backend README](./backend/README.md)

## 🌐 Sayfa Yapısı

### Genel Sayfalar

- `/` – Ana Sayfa
- `/login` – Giriş Sayfası
- `/register` – Kayıt Sayfası
- `/unauthorized` – Yetkisiz Erişim Sayfası
- `/404` – Sayfa Bulunamadı

### Dashboard (Korunan Alan)

Tüm dashboard sayfaları `ProtectedRoute` bileşeniyle yetkilendirme kontrolünden geçmektedir.

#### Ortak

- `/dashboard` – Rol bazlı ana panel

#### 👤 Aday Paneli

- `/dashboard/postings` – Yayınlanan ilanları görüntüleme
- `/dashboard/applications` – Başvurularım
- `/dashboard/applications/:id/application-documents` – Başvuruya ait belgeler

#### 🧑‍⚖️ Jüri Paneli

- `/dashboard/evaluations` – Atanan değerlendirmeler
- `/dashboard/evaluations/:id` – Değerlendirme detayları

#### 🛡️ Admin / Yönetici Paneli

- `/dashboard/manage-roles` – Rol yönetimi (`admin`)
- `/dashboard/manage-postings` – İlan yönetimi (`admin`, `yonetici`)
- `/dashboard/all-applications` – Tüm başvurulara erişim
- `/dashboard/all-applications/:id` – Başvuru detayları
- `/dashboard/all-applications/:id/evaluation` – Başvuru değerlendirme

## 🛠️ Kullanılan Teknolojiler

- React & React Router
- Node.js & Express
- Role-Based Access Control (RBAC)
- Protected Routes
