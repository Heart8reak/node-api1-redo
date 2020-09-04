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

server.patch('/api/users/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body

    let found = users.find(user => user.id === id)

    if (found) {
        Object.assign(found, changes)
        res.status(200).json(found)
    } else {
        res.status(404).json({ message: "User ID was not found" })
    }
})


//-------------------------------------------------------------
// Delete
//-------------------------------------------------------------

server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params

    const deleted = users.find(user => user.id === id)
    if (deleted) {
        users = users.filter(user => user.id !== id)
        res.status(200).json(deleted)
    } else {
        res.status(404).json({ message: "user not Found!" })
    }
})

const PORT = 5000

server.listen(PORT, () => {
    console.log(`LisTeninG oN HttP://LoCaLhOsT:${PORT}`)
})
