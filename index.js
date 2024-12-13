const express = require('express')
const app = express()
const port = 3000
const db = require("./connection")
const response = require("./response")
const bodyParser = require('body-parser')
const { error } = require('console')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Get mahasiswa
app.get('/mahasiswa', (req, res) => {
    const sql = "SELECT * FROM mahasiswa"
    db.query(sql, (error, result) => {
        if (error) throw error
        response(200, result, "Get all data Mahasiswa", res)
    })
})

// Get mahasiswa
app.get('/matkul', (req, res) => {
    const sql = "SELECT * FROM mata_kuliah"
    db.query(sql, (error, result) => {
        if (error) throw error
        response(200, result, "Get all data Mata Kuliah", res)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})