const prisma = require('../src/config/prisma')

const MySeed = async () => {
  await prisma.user.deleteMany()``

  const user = {
    firstname: "Ali",
    phone: "+998905242981",
    password: "jamila02"
  }

  const recipe = {
    title: "Osh",
    description: "Prsota osh",
    imgUrl: "https://zira.uz/wp-content/uploads/2021/02/prazdnichnyi---plov-ai--ran-grohe-2.jpg",
    preptime: 120
  }

  const userSql = await prisma.user.create({ data: user })
  const recipeSql = await prisma.recipe.create({ data: { ...recipe, userId: userSql.id } })

  console.log('Successs')
}

MySeed()
