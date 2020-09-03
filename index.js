const express = require('express')
const shortid = require('shortid')

const server = express()

let users = []

server.use(express.json())

//-------------------------------------------------------------
// Running API
//-------------------------------------------------------------

server.get("/", (req, res) => {
    res.json({ message: "Users API is RunNinG..." })
})

//-------------------------------------------------------------
// Create
//-------------------------------------------------------------

server.post('/api/users', (req, res) => {
    const user = req.body
    console.log("Created a new user:", user)
    user.id = shortid.generate()
    users.push(user)
    res.status(201).json(user)
})

//-------------------------------------------------------------
// Read
//-------------------------------------------------------------

server.get('/api/users', (req, res) => {
    res.json(users)
})

//-------------------------------------------------------------
// Update
//-------------------------------------------------------------


const PORT = 5000

server.listen(PORT, () => {
    console.log(`LisTeninG oN HttP://LoCaLhOsT:${PORT}`)
})
