const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/describe', (req, res) => {
  res.send('running on port ' + process.env.PORT)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
