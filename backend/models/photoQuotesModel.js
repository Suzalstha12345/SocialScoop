const mongoose = require('mongoose');

const PhotoQuotes = mongoose.model("PhotoQuotes", {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    date: { type: String},
    photoquotes: { type: String},
    photo: { type: String}
})

module.exports = PhotoQuotes;

