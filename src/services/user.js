const { UserModel } = require('../models/user')

class UserService {
  async createUser(body) {
    const newUser = new UserModel(body)
    const res = await newUser.save()
    return res
  }

  async updateUser(id, body) {
    await UserModel.updateOne({ _id: id }, { ...body })
    const res = UserModel.findById(id)
    return res
  }

  async deleteUser(id) {
    await UserModel.deleteOne({ _id: id })
  }

  async listUser() {
    const res = await UserModel.find()
    return res
  }

  async findUser(id) {
    const res = await UserModel.findById(id)
    return res
  }
}
const userService = new UserService()
module.exports = userService
