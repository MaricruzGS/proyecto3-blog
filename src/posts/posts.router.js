const postServices = require('./posts.services')

const router = require('express').Router( )

router.get('/posts', postServices.getAllPosts)

router.post('/posts', postServices.postNewPosts)

router.get('/posts/:id', postServices.getPostsById)

router.patch('/posts/:id', postServices.patchPosts)

router.delete('/posts/:id', postServices.deletePosts)

module.exports = router