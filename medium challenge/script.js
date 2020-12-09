var solar = require('solar');

solar.readFile('./solarSystem.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})