const express = require('express');

const router = express.Router();
const User = require('../Models/Users');


router.get('/',async(req,res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        res.json({message : error});
    }
});

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
module.exports = router;