var express = require('express')
var hard = express()
var data = require('./public/database.json')
hard.get('/workers', (res) => {
    if(!data) {
        res.status(404).send("Could not find information")
    }
    res.send(data)
})

hard.get('/workers/:id', (reg, res) => {
    const findE = data.workers.find(function(employee){
        return parseInt(reg.params.id) === employee.id
    })

    if(!findE) {
        res.status(404).send("Could not find information")
    }
    res.send(findE)
})

hard.listen(8080)