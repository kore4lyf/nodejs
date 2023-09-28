const mongoose = require('mongoose')


const connectDB = uri => {
  mongoose.connect(uri, 
    {
      useNewUrlParser: true,
      useCreateIndex: true, 
      useFindAndModify: false, 
      useUnifiedTopology: true
    }
  )
}

module.exports = connectDB

  // .then(() => console.log('Connected to DB ...'))
  // .then(() => console.log('Connected to DB ...'))
  // .catch(err => console.log(err))


