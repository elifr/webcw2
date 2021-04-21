const express = require("express");
const router = express.Router();
const Friendship = require('../models/Friendship');
const mongoose = require('mongoose');
const { default: axios } = require("axios");

router.get('/', async (req,res) => {
    try {
        const Friends = await Friendship.find();
        res.json(Friends);
    } catch (err){
        res.json({message:err});
    }
});

router.post('/', async (req,res) => {
    const friendship = new Friendship ({
        UserId: mongoose.Types.ObjectId(req.body.UserId),
        FriendId: mongoose.Types.ObjectId(req.body.FriendId),
        status: req.body.status
        
    });

    try {
        const savedFriendship = await friendship.save();
        res.json(savedFriendship);
    }
    catch(err){
        res.json({message: err});
    }
       
});

router.get('/:id', async (req,res) => {

    Friendship.findById(req.params.id).then((friendship) => {
        if(friendship){

            axios.get("http://localhost:3333/users/" + friendship.UserId).then((response) => {
                
            var friendshipObject = {user_name: response.data.username, friend_name:''}

            axios.get("http://localhost:3333/users/" + friendship.FriendId).then((response) => {

                friendshipObject.friend_name = response.data.username
                res.json(friendshipObject)

            } )

               
            })
        }

        else{
            res.send("Grrr error")
        }
    })
    
});






module.exports = router;
