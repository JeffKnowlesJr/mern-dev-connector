console.log('db init')
console.log('------------------------------------------------')

const mongoose = require('mongoose')
const db = process.env.mongoURI

// 2.7 Connecting to MongoDB With Mongoose
const connectDB = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
    // When mongoURI has no DB path (…mongodb.net/?…), the driver defaults to "test".
    // Set mongoDBName in .env to the Atlas database that holds your data (e.g. production).
    const dbName = process.env.mongoDBName && process.env.mongoDBName.trim()
    if (dbName) {
      options.dbName = dbName
    }
    await mongoose.connect(db, options)
    console.log('MongoDB Connected...', dbName ? `(database: ${dbName})` : '(default database from URI)')
  } catch (err) {
    console.error('MongoDB Rejection ', err.message)
    // Exit process with failure
    process.exit(1)
  }
}

module.exports = connectDB
