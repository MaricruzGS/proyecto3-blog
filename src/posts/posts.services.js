const postsControllers = require('./posts.controllers')

const getAllPosts = (req, res) => {
    postsControllers.findAllPosts()
    .then (data => {
        res.status(200).json(data)
    })
    .catch (err => {
        res.status(400).json(err)
    })
}

const getPostsById = (req, res) => {
    const id = Number(req.params.id)
    postsControllers.findPostById(id)
    .then(data => {
        if (data){
            res.status(200).json(data)
        } else {
            res.status(404).json({
                message: 'Posts not found'
            })
        }
    })
    .catch (err => {
        res.status(400).json(err)
    })
}

const postNewPosts = (req, res)=> {
    const postObj = req.body
    postsControllers.createPost(postObj)
    .then(data => {
        res.status(201).json(data)
    })
    .catch (err => {
        res.status(400).json(err)
    })
}

const patchPosts = (req, res) => {
    const id = req.params.id
    const postObj = req.body
    postsControllers.updatePost( id, postObj)
     .then (data => {
        if(data[0]) {
            res.status(200).json({message: `Posts with id: ${id} updated succesfully`})
        } else {
            res.status(404).json({message: 'Posts not found'})
        }
     })
     .catch(err => {
        res.status(400).json(err)
     })

}


const deletePosts = (req, res) => {
    const id = req.params.id
    postsControllers.deletePost(id)
    .then (data => {
        if(data){
            res.status(204).json()
        }else{
            res.status(404).json({
                message: 'Posts not found'
            })
        }
    })
    .catch(err => {
        res.status(400).json(err)
    })
}

module.exports = {
    getAllPosts,
    getPostsById,
    postNewPosts,
    patchPosts,
    deletePosts,
}