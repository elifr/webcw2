
const express = require("express");
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req,res) => {
    try {
        const Users = await User.find();
        res.json(Users);
    } catch (err){
        res.json({message:err});
    }
});

router.post('/', async (req,res) => {
    const user = new User({
        username: req.body.username,
        modules_id: req.body.modules_id,
        forename: req.body.forename,
        surname: req.body.surname,
        year_joined: req.body.year_joined,
        placement: req.body.placement,
        degree_length: req.body.degree_length
    });

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    }
    catch(err){
        res.json({message: err});
    }
       
});

router.get('/:id', async (req,res) => {
    // get user profile by username
    try {
    const user = await User.findById(req.params.id);
    res.json(user);
    } catch(err){
    res.json({message: err});
    }
    
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
