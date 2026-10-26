const prisma = require('../config/prisma')

const getAll = async (req, res, next) => {
  try {
    const data = await prisma.user.findMany()
    return res.json(data)
  } catch (err) {
    next(err)
  }
}


const getOne = async (req, res, next) => {
  try {
    const id = +req.params.id
    const data = await prisma.user.findUnique({ where: { id } })
    return res.json(data)
  } catch (err) {
    next(err)
  }
}


const create = async (req, res, next) => {
  try {
    console.log(req.body)
    const data = await prisma.user.create({ data: req.body })
    return res.json(data)
  } catch (err) {
    next(err)
  }
}


const update = async (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
}


const remove = async (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
}


module.exports = { getAll, getOne, create, update, remove }
