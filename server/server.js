const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const dotenv = require("dotenv")

const Blogs = require('./models/blogModel.js')

const app = express()

dotenv.config()
mongoose.connect(process.env.DBKey1)

const corsOptions = {
  origin: 'https://getBlogs.onrender.com',
  optionsSuccessStatus: 200
}

app.use(cors())
// app.use(cors(corsOptions)) //uncomment this to enable origin in cors
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.listen(5000, ()=>{console.log('server online on 5000')})

app.get('/api', async function (req, res) {
  const db = await Blogs.find()
  if (db) {
    res.json(db)
  }
  else console.log('Could not access database')
})

app.post('/new', async function (req, res) {
  console.log('Data recieved from frontend')
  const newBlog = await Blogs.create({
    Name: req.body.name,
    Heading: req.body.heading,
    Content: req.body.textarea
  })
  if (newBlog) {
    console.log('New entry has been added to database...')
  }
  else console.log('An Error has been encountered while uploading Blog...')
})

app.post('/del', async function (req, res) {
  console.log('request to delete blog recieved')
  console.log(req.body.id)
  const del = await Blogs.findByIdAndDelete(req.body.id)
  if (del) console.log('Blog deleted successfully')
  else console.log('Error encountered while deleting Blog')
})