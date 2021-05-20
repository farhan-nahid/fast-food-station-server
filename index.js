const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const fs = require('fs')
require('dotenv').config();

const port = process.env.PORT ||  5000;

 app.use(cors())
 app.use(bodyParser.json())

 
 app.get('/user-information', (req, res) => {
    fs.readFile('./Data/Information.json', 'utf-8', (err, data) => {
        const userData = JSON.parse(data)
        res.send(userData)
    })
})


app.get('/order-summery', (req, res) => {
    fs.readFile('./Data/Order.json', 'utf-8', (err, data) => {
        const orderData = JSON.parse(data)
        res.send(orderData)
    })
})


app.get('/', (req, res) => {
    res.send('This is My Restaurants API')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })