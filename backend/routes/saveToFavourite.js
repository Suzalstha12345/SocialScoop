const express = require('express');
const { message } = require('statuses');
const auth = require("../auth/auth")
const savedRouter = express.Router();
const SaveToFavourite = require("../models/saveToFavourite")
const User = require('../models/userModel');
const PhotoQuotes = require("../models/photoQuotesModel");

// quotes post code here
savedRouter.post("/post/save-to-favourite", auth.verifyUser, (req, res) => {
    try {
        // declaring the const variable to genererate the current date for post
        const saved = new SaveToFavourite({
            user: req.userInfo._id,
            photoQuote: req.body.quoteId,
        });
        saved.save().then(() => {
            res.status(200).json({ message: "Your post has been successfully Saved", type: "success", success: true })
            console.log(req.body.quoteId);
            }).catch(() => {
                res.status(500).json({ message: "Something went wrong while Saving", type: "error", })
            });
    }
    catch (e) {
        res.json({ message: "Error is occurred due to " + e })
    }
})

// getting the saved data to the saved files
savedRouter.get("/get/post-saved-details/:id", (req, res)=>{
    const id = req.params.id
    PhotoQuotes.findOne({_id:id})
    .then((result)=>{
      res.json(result);
    }).catch(()=>{
      res.json({message: "Error Occurred"})
    })
  })


module.exports = savedRouter;