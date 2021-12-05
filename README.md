# simple-express-rest-api
Simple REST API menggunakan Express + Body Parser + Mysql2

## Dependencies
- "body-parser": "^1.19.0",
- "dotenv": "^10.0.0",
- "express": "^4.17.1",
- "mysql2": "^2.3.3"

## Requirement Tools
- Web Server (ex. XAMPP, laragon, LAMPP, etc) atau MySQLyog, dll | Yang terpenting bisa menjalankan MySQL
- NodeJS v.14++

## Preparation
- Clone repo-nya
- Import database file "siswa.sql" (Tutorial bisa dibrowsing)
- Buat file .env dan isi seperti ini ( *kalau menggunakan XAMPP, defaultnya user = 'root', dan password = ''* )
```
HOST = 'localhost' 
USER = 'isi usernamenya disini'
PASSWORD = 'isi password disini'
```
- Silahkan masuk ke directory dari repo-nya kemudian buka terminal / CMD, lalu jalankan perintah
> npm install
- Untuk menjalankan servernya jalankan perintah
> npm run start
- Nanti akan menampilkan output seperti ini
```
> expressjs-rest-api@1.0.0 start
> node server.js

App running on http://localhost:5000
```
