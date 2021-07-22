const router = require("express").Router();
const mongoose = require("mongoose");
const Mailbox = require("../models/Mailbox.model");



router.post('/', (req, res)=>{
    const { name, comment, userId } = req.body
    
    User.create({
        name,
        comment, 
        userId
    })
    .populate('user')
    .then( createdSuggestion => res.json(createdSuggestion))
    .catch(err=>res.json(err))
})






//falta meter el mail 
