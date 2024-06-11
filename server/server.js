const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.listen(5000, ()=>{console.log('server online on 5000')})

app.get('/api', (req, res)=>{
    res.json([
        {
        name: "Name",
        content: 'kejriswbtfgiuergiyugteaskuirygv ukyaesvouyftgailuYRWfop3qfaWIULyfpq8faEWp;89uqtfg',
        author: "Author1"
        },
        {
        name: "Name1",
        content: 'kejriswbtfgiuergiyugteaskuirygv ukyaesvouyftgailuYRWfop3qfaWIULyfpq8faEWp;89uqtfg',
        author: "Author1"
        },
        {
        name: "Name1",
        content: 'kejriswbtfgiuergiyugteaskuirygv ukyaesvouyftgailuYRWfop3qfaWIULyfpq8faEWp;89uqtfg',
        author: "Author1"
        },
        {
        name: "Name1",
        content: 'kejriswbtfgiuergiyugteaskuirygv ukyaesvouyftgailuYRWfop3qfaWIULyfpq8faEWp;89uqtfg',
        author: "Author1"
        },
        {
        name: "Name1",
        content: 'kejriswbtfgiuergiyugteaskuirygv ukyaesvouyftgailuYRWfop3qfaWIULyfpq8faEWp;89uqtfg',
        author: "Author1"
        },
        {
        name: "Name1",
        content: 'kejriswbtfgiuergiyugteaskuirygv ukyaesvouyftgailuYRWfop3qfaWIULyfpq8faEWp;89uqtfg',
        author: "Author1"
        },
        {
        name: "Name1",
        content: 'kejriswbtfgiuergiyugteaskuirygv ukyaesvouyftgailuYRWfop3qfaWIULyfpq8faEWp;89uqtfg',
        author: "Author1"
        },
        {
        name: "Name1",
        content: 'kejriswbtfgiuergiyugteaskuirygv ukyaesvouyftgailuYRWfop3qfaWIULyfpq8faEWp;89uqtfg',
        author: "Author1"
        },
        {
        name: "Name1",
        content: 'kejriswbtfgiuergiyugteaskuirygv ukyaesvouyftgailuYRWfop3qfaWIULyfpq8faEWp;89uqtfg',
        author: "Author1"
        },
        {
        name: "Name1",
        content: 'kejriswbtfgiuergiyugteaskuirygv ukyaesvouyftgailuYRWfop3qfaWIULyfpq8faEWp;89uqtfg',
        author: "Author1"
        },
        {
        name: "Name1",
        content: 'kejriswbtfgiuergiyugteaskuirygv ukyaesvouyftgailuYRWfop3qfaWIULyfpq8faEWp;89uqtfg',
        author: "Author1"
        },
        {
        name: "Name1",
        content: 'kejriswbtfgiuergiyugteaskuirygv ukyaesvouyftgailuYRWfop3qfaWIULyfpq8faEWp;89uqtfg',
        author: "Author1"
        },
        {
        name: "Name1",
        content: 'kejriswbtfgiuergiyugteaskuirygv ukyaesvouyftgailuYRWfop3qfaWIULyfpq8faEWp;89uqtfg',
        author: "Author1"
        },
        {
          name: "Name2",
          content: 'kejriswbtfgiuergiyugteaskuirygv ukyaesvouyftgailuYRWfop3qfaWIULyfpq8faEWp;89uqtfg',
          author: "Author2"
      }
    ])

})