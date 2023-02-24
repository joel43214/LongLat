const express = require('express')
const app = express()


const dbcontroller = require('./dbcontroller')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs');
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log('Client on server')
    res.send('WELCOME')
})

app.get("/add", (req, res) => {
    console.log(req.query.latitude);
    
    var latitude = req.query.latitude;
    var alititude = req.query.alittude;
    var longitude = req.query.longitude;
    dbcontroller.add(latitude, longitude, alititude, () => {
        console.log("Done");
        res.send("Stored");
    });
});


app.listen(3005, () => {
    console.log('Server started at http://localhost:3005')
})

