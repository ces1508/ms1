const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({ hi: 'microservices running' })
})

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log(`server runnin in port ${process.env.PORT}`)
})
