const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/init', (req, res) => {
  res.send('initializing db. env: ' + process.env.TEST)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
