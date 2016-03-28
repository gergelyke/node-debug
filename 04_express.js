const fs = require('fs')
const express = require('express')
const app = express()

app.get('/hello/:text', (req, res) => {
  res.send(`<h1>Hello ${req.params.text}</h1>`)
})

app.get('/some-error', (req, res) => {
  a;
})

app.get('/some-async-error', (req, res, next) => {
  fs.readFile('some-file', (err) => {
    next(err)
  })
})

app.use((err, req, res, next) => {
  //log error here with wiston or something
  console.log(err)
  res.sendStatus(500)
})


app.listen(3000)
