const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 3001
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const mongoUrl = process.env.MONGOURL
mongoose.connect(mongoUrl, { useNewUrlParser: true });
const postSchema = new mongoose.Schema({
    blogid: String,
    content: String,
    title: String,
    tag: String,
    image: String
})

const Article = mongoose.model('Article', postSchema);
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get("/articles", (req, res) => {
    Article.find((err, findItems) => {
        res.json(findItems)
    })
})
app.get("/compose", (req, res) => {
    res.render("compose");
})

app.post("/compose",(req,res)=>{
    let postContent = JSON.stringify(req.body.content)
    const postForAdd = new Article({
        blogid: req.body.blogid,
        content: postContent,
        title: req.body.title,
        tag: req.body.tag,
        image: req.body.image
    })
    postForAdd.save();
    console.log("Saved Successfully")
    res.redirect("/articles");
})


app.get("/articles/:id", async (req, res) => {
    try {
        const post = await Article.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
})


app.listen(port, () => {
    console.log("Server is up")
})

