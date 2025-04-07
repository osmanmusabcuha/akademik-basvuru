# Akademik Başvuru Backend

## Overview

Bu proje, akademik başvuru süreçlerini yönetmek için bir backend uygulamasıdır. Kullanıcıların başvurularını oluşturmasını, güncellemesini ve görüntülemesini sağlar.

## Installation

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn
- Postgres
- MinIO (object storage)

### Kurulum Adımları

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/osmanmusabcuha/akademik-basvuru.git
   ```
2. Backend dizinine gidin:
   ```bash
   cd akademik-basvuru/backend
   ```
3. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
4. `.env` dosyasını oluşturun ve gerekli ortam değişkenlerini ekleyin:
   ```env
   DATABASE_URL=postgresql://postgres:mysecretpassword@localhost:5432/postgres
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRATION=1h
   MINIO_ENDPOINT=localhost
   MINIO_PORT=9000
   MINIO_USE_SSL=false
   MINIO_ACCESS_KEY=minioadmin
   MINIO_SECRET_KEY=minioadmin
   ```
5. Tabloları migrate edin

   ```bash
    npm run db:generate
   ```

6. Feed'leri veritabanına ekleyin
   ```bash
   npm run db:seed
   ```
7. Uygulamayı başlatın:
   ```bash
   #Gelistirici modunda calısır
   npm run dev
   #Uygulama modunda calısır
   npm run start
   ```
