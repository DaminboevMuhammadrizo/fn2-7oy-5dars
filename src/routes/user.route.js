const express = require('express')
const controller = require('../controllers/user.controller')
const validate = require('../middlewares/validate')
const { createUserSchema } = require('../validations/user.validation')

const router = express.Router()

router.get('/', controller.getAll)
router.get('/one/:id', controller.getOne)
router.post('/', validate(createUserSchema), controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router
