const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const publicationSchema = new Schema({
    title: String,
    image: String,
    description: String,
    group: String,
    room: String,
    category: String
}, {
    timestamps: true
})

module.exports = mongoose.model("Publication", publicationSchema)