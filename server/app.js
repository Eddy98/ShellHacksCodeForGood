const express = require('express')
var bodyParser = require('body-parser');

const api = require('./routes/api')
const app = express()

const PORT = 3000


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/api', api)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
