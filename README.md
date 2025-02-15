# sistem-manajemen-proyek-dengan-AI

manfaatkan AI membuat sistem manajemen proyek sederhana yang bisa memberikan estimasi waktu penyelesaian berdasarkan histori proyek sebelumnya.

## membuat file package.json

`npm init -y`

## install dependensi

`npm install express mongoose dotenv cors jsonwebtoken bcryptjs`

Keterangan:

    express → Framework backend
    mongoose → ORM untuk MongoDB
    dotenv → Mengelola variabel lingkungan
    cors → Mengizinkan akses dari frontend
    jsonwebtoken → Untuk autentikasi JWT
    bcryptjs → Untuk enkripsi password

    {

"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjBmNGYzZWM5ZWNiMzJhYzMxYzJhYiIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNzM5NjUwMzE3LCJleHAiOjE3Mzk2NTM5MTd9.IfXLftxJ5YfmOSH1laNgaJzM3gHqBX4Snh9ingN5_tg",
"user": {
"id": "67b0f4f3ec9ecb32ac31c2ab",
"name": "admin",
"email": "admin@gmail.com",
"role": "User"
}
}
