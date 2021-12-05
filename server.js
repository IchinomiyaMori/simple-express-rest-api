// Konfigurasi variable environment (variable yg ada di file .env)
const dotenv = require('dotenv')
dotenv.config()

// Memanggil express + setting port
const express = require('express')
const app = express()
const port = 5000

// Menyiapkan koneksi ke database dengan msyql2
const mysql = require("mysql2")
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'siswa'
})

// Konfigurasi body-parser
const bodyParser = require('body-parser') 
// application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Membuat Routing di Express
// Route untuk mengambil seluruh data siswa [Method GET]
app.get('/', (req, res) => {
  // SQL SELECT QUERY
  connection.query(
    `SELECT * FROM tb_siswa`,
    (err, results) => {
      if(err){
        res.json({
          message: "Server Error",
          error_type: err
        })
      }else{
        res.json(results)
      }
    }
  )
})

// Route untuk mengambil spesifik data siswa berdasarkan id_siswa [Method GET]
app.get('/:id_siswa', (req, res) => {
  // SQL SELECT QUERY
  connection.query(
    `SELECT * FROM tb_siswa WHERE id_siswa = ${req.params.id_siswa}`,
    (err, results) => {
      if(err){
        res.json({
          message: "Server Error",
          error_type: err
        })
      }else{
        res.json(results)
      }
    }
  )
})

// Route untuk menambah siswa [Method POST]
app.post('/add', urlencodedParser, (req, res) => {
  // SQL INSERT Query 
  connection.query(
    `INSERT INTO tb_siswa VALUES (NULL, '${req.body.nama}', '${req.body.alamat}', '${req.body.no_hp}', '${req.body.tempat_lahir}')`,
    (err, results) => {
      if(err){
        res.json({
          message: "Data gagal ditambahkan",
          error_type: err
        })
      }else{
        res.json({
          message: "Data Berhasil ditambahkan",
          data: req.body,
          additional_info: results
        })
      }
    }
  )
})

// Route untuk mengedit data siswa [Method PUT]
app.put('/edit/:id_siswa', urlencodedParser, (req, res) => {
  connection.query(
    `UPDATE tb_siswa SET nama = '${req.body.nama}', alamat = '${req.body.alamat}', no_hp = '${req.body.no_hp}', tempat_lahir = '${req.body.tempat_lahir}' WHERE id_siswa = ${req.params.id_siswa}`,
    (err, results) => {
      if(err){
        res.json({
          message: "Data gagal diedit",
          error_type: err
        })
      }else{
        res.json({
          message: "Data Berhasil diedit",
          data: req.body,
          info: results
        })
      }
    }
  )
})

// Route untuk menghapus siswa [Method DELETE]
app.delete('/delete/:id_siswa', (req, res) => {
  connection.query(
    `DELETE FROM tb_siswa WHERE id_siswa = ${req.params.id_siswa}`,
    (err, results) => {
      if(err){
        res.json({
          message: "Data gagal dihapus",
          error_type: err
        })
      }else{
        res.json({
          message: "Data Berhasil dihapus",
          info: results
        })
      }
    }
  )
})

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})