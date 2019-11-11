const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const certification = require('./Certification')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  let cert = certification(req.body)
  if (cert === '') {
    cert += 'Username / Password 錯誤'
    res.render('index', { cert: cert })
  }
  else {
    res.render('show', { cert: cert })
  }

})

app.listen(port, () => {
  console.log(`this is running on http://localhost:${port}`)
})