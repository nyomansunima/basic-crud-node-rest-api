const userService = require('../services/user')

class UserController {
  async createUser(req, res) {
    const body = req.body
    res.json(await userService.createUser(body))
  }

  async updateUser(req, res) {
    const body = req.body
    const id = req.params.id
    res.json(await userService.updateUser(id, body))
  }

  async deleteUser(req, res) {
    const id = req.params.id
    res.json(await userService.deleteUser(id))
  }

  async findUser(req, res) {
    const id = req.params.id
    res.json(await userService.findUser(id))
  }

  async listUser(req, res) {
    res.json(await userService.listUser())
  }
}

const userController = new UserController()
module.exports = userController
