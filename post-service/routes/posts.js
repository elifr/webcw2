const express = require("express");
const router = express.Router();
const Post = require('../models/Post');
const mongoose = require('mongoose');
const { default: axios } = require("axios");

router.get('/', async (req,res) => {
    try {
        const Posts = await Post.find();
        res.json(Posts);
    } catch (err){
        res.json({message:err});
    }
});

router.post('/', async (req,res) => {
    const post = new Post ({
        UserId: mongoose.Types.ObjectId(req.body.UserId),
        title: req.body.title,
        text: req.body.text
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    }
    catch(err){
        res.json({message: err});
    }
       
});

router.get('/:id', async (req,res) => {

    Post.findById(req.params.id).then((post) => {
        if(post){

            axios.get("http://localhost:3333/users/" + post.UserId).then((response) => {
                var postObject = {username: response.data.username}

                res.json(postObject)
            })
        }

        else{
            res.send("Grrr error")
        }
    })
    
});

router.delete('/:username', async (req,res) => {
    try {
    const removedUser = await User.deleteOne({username: req.params.username});
    res.json(removedUser);
    } catch(err){
    res.json({message: err});
    }
    
});

router.patch('/:username', async (req,res) => {
    try {
    const updatedUser = await User.updateOne({username: req.params.username}, 
        {$set: { degree_length: req.body.degree_length }}
        );

    res.json(updatedUser);
    } catch(err){
    res.json({message: err});
    }
    
});




module.exports = router;
