const express = require('express')
const app = express()
const postsRouter = require('./posts/posts.router')
const db = require('./utils/database')


app.use(express.json())

db.authenticate()
  .then(() => {
    console.log('Las credenciales de la base de datos son correctas')
  })
  .catch((err) => {
    console.log(err)
  })

  db.sync()
  .then(() => {
    console.log('Las credenciales de la base de datos son correctas')
  })
  .catch((err) => {
    console.log(err)
  })

app.get('/', (req, res) => {
    res.json({
        message: 'Server OK' ,
        routes: {
            posts: 'http://localhost:9000/api/v1/posts'
        }
    })
})

app.use('/api/v1', postsRouter)

app.listen(9000, () => {
    console.log({
        message: 'Server OK'
    })
})

module.exports = app
