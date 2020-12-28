const express = require('express');

const router = express.Router();
const User = require('../Models/Users');

//GET ALL user
router.get('/',async(req,res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        res.json({message : error});
    }
});

//CREATE USER
router.post('/',async(req,res) =>{
    console.log(req.body);
     const user = new User({
         name : req.body.name,
         email: req.body.email,
         password: req.body.password,
         role: req.body.role
     });
    try {
        const SavedUser = await user.save();
        res.json(SavedUser);
    } catch (error) {
        res.json({message: error});
        
    }
});

//GET single user by id
router.get('/:postId',async(req,res) => {
    try {
        const user = await User.findById(req.params.postId);
        res.json(user);
    } catch (error) {

        res.json({message: error});
    }
})

// Delete a User by id
router.delete('/:postId',async(req,res) => {
    try {
        const user = await User.remove({_id : req.params.postId});
        res.json(user);
    } catch (error) {
        res.json({message: error});
    }
})

//Update a single user
router.patch('/:postId', async(req,res) => {
    console.log("requested");
    console.log(req.params.postId);
    try {
        const UpdatePost = await User.updateOne(
            {_id : req.params.postId},
            {$set : {password : req.body.password}}
        );
        res.json(UpdatePost);
    } catch (error) {
        res.json({message : error});
    }
})
module.exports = router;