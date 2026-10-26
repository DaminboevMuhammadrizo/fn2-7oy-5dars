const { z } = require('zod')

const createUserSchema = z.object({
  firstname: z.string().trim().min(1).max(30),
  phone: z.string(),
  password: z.string(),
})

module.exports = { createUserSchema }
