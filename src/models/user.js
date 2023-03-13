const { Schema, model } = require('mongoose')

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    username: String,
    bio: String,
  },
  { timestamps: true }
)

const UserModel = model('User', UserSchema, 'users')

module.exports = {
  UserSchema,
  UserModel,
}
