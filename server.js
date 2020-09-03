const express = require('express')
// const shortid = require('shortid')

const server = express()

// server.use(express.json())

// let users = []

server.get("/"), (req, res) => {
    res.json({ message: "Hola Mundo!" })

    // res.status(200).json({ message: "Users API is RunNiNg..." })
}

const PORT = 8080

server.listen(PORT, () => {
    console.log(`LisTeninG oN HttP://LoCaLhOsT:${PORT}`)
})
