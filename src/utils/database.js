const mongoose = require('mongoose')

async function connectDatabase() {
  try {
    await mongoose.connect(
      `mongodb://${process.env.DATABASE_URL}:${process.env.DATABASE_PORT}`,
      {
        dbName: process.env.DATABASE_NAME,
        auth: {
          username: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASS,
        },
      }
    )
    console.log('🍔 Database Connected')
  } catch (error) {
    console.log('Opps, failed to connect database')
  }
}

module.exports = {
  connectDatabase,
}
