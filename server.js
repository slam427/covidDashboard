const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// const db = require('./models');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

app.get('/api/allnews', function (req, res) {
    db.Book.find({}).then((allNews)=> {
        res.json(allNews);
    })
})
app.post('/api/savearticle', function (req, res) {
    console.log("SAAAAAVVVVVEEEEED",req.body);
    db.Article.create(req.body).then(newsData => {
        res.json(newsData);
    });
})

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/coviddb");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});