const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new mongoose.Schema({
    articleID: {
        type: String,
    },
    headline: {
        type: String,
    },
    snippet: {
        type: String,
    },
    publishedDate: {
        type: String,
    },
    viewLink: {
        type: String,
    },
},

);

const article = mongoose.model("Article", articleSchema);

module.exports = articleSchema;