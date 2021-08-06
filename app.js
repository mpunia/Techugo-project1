const express = require('express')
const app = express();
const fs = require("fs");
var mydata = fs.readFileSync("text.json");
var data = JSON.parse(mydata);
let port = 3000

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))


// Home page
app.get('/', (req, res) => {
    res.sendFile("/index.html", { root: __dirname })
});

app.post("/", (req, res) => {
    var user = {
        name: req.body.Name,
        email: req.body.Email,
        age: req.body.Age
    }

    data.push(user);
    var new_data = JSON.stringify(data)
    fs.writeFileSync("text.json", new_data, (err, data) => {
        if (err) throw err

        console.log("Successfull")

    });
    res.send("Data succesfully added")
});

app.listen(port, () => {
    console.log("Server is runnig at " + port)
})

