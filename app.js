//dependencies <- packages
const express = require('express');

//imports <- other files in project
const list = require("./agents")

// configuration
const app = express();
app.use(express.json()); //<-- for consistency
const port = 3000; // <- enventually in env for safety reasons

// API calls
app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.get('/status', (req, res) => {
    res.send(`The port is ${port}.`);
});

app.get('/error', (req, res) => {
    res.status(500).send("Something went wrong.");
});

app.get ('/email-list', (req, res) => {
    //loop through array to find email
    //save email into new variable, separated by comma
    //add new variable into res.send


    res.send('testing');
});
// feedback
app.listen(3000, () => {
  console.log(` server listening on port ${3000} `)
})