const express = require('express');

const router = express.Router();
const User = require('../Models/Users');


router.get('/',(req,res) => {
    res.send("From User screen section");
});

router.post('/',(req,res) =>{
     const user = new User({
         name : req.body.name,
         email: req.body.email,
         password: req.body.password,
         role: req.body.role
     });
     user.save()
     .then( data => {
         res.json(data);
     })
     .catch(err => {
         res.json({ message : err});
     })
});
module.exports = router;