let express = require('express');
let path = require('path')
let bodyParser = require('body-parser')

let app = express(); 

let publicPath = path.join(__dirname, 'public')

const log = (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
}

const getTime = (req, res, next) => {
  req.time = new Date().toString()
  next()
}

// app.use(bodyParser.urlencoded({extended: false})) // parse body data
app.use(express.urlencoded({extended: false})) // parse body data

app.use(log)

app.use('/public', express.static(publicPath))

app.get('/', (req, res) => {
  let filePath = path.join(__dirname, 'views/index.html')

  console.log(publicPath)
  res.sendFile(filePath)
}
)

app.get('/now', getTime, (req, res) => {
  //setTimeout(function() {
  res.json({ 'time': req.time })
  //}, 1000);
})

app.get('/json', (req, res) => {
  let messageStyle = process.env.MESSAGE_STYLE

  let message = messageStyle === 'uppercase' ? 'HELLO JSON' : 'Hello json'

  res.json({ 'message': message })
})

app.get('/:word/echo', (req, res) => {
  res.json({ echo: req.params.word })
})


app.route('/name').get((req, res) => {
  const { first, last } = req.query
  res.json({name: `${first} ${last}`})
}).post((req, res) => {
  console.log(req.body)
  const { first, last } = req.body
  res.json({name: `${first} ${last}`})
})






module.exports = app;
