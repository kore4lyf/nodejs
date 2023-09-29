const mongoose = require('mongoose')


const connectDB = URI => {
  mongoose.connect(URI, 
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


