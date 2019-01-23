const express = require('express');
const fs = require('fs');
//Create an Express app.
const app = express();
const port = 3000;

// Define a single route to show html data in browser from index.html
app.get('/', (req, res) => {
    fs.readFile(`${__dirname}/index.html`, 'utf-8', function (err, data) {
        res.send(data);
    });
});

// Handle error 404 - Not Found.
app.use((req, res, next) => {
    res.status(404).send({message: '404. Not Found'})
    next()
})

//Handle error 500 - Server Error.
app.use((err, req, res, next) => {
    res.status(500).send({message: '500. Server Error'})
})

app.listen(port, () => {
    console.log(`Node Server is running on PORT: ${port}`)
});