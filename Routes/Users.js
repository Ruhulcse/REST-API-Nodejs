const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
    res.send("From User screen section");
});

router.get('/user',(req,res) => {
    res.send("From individual user");
});

module.exports = router;