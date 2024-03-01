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
    const listOfAgents = list.agentList;
    const agentEmails = listOfAgents.map(agent => agent.email).join(', ');
    //.map() makes a new array based off criteria
    //save email into new variable, separated by comma
    //add new variable into res.send
    res.status(200).send(agentEmails);
});
app.get('/region-avg', (req, res) => {
    //get region
    const selectedRegion = req.query.region;
    //get region rating for agents in region
    const listOfAgents = list.agentList;
    // find agents in region
    const agentsByRegion = list.agentList.map(agent => agent.region === selectedRegion);
    //get list of rating and fees for agents in selectedRegion
    const agentRatings = listOfAgents.map(agent => agent.rating)
    const agentFees = listOfAgents.map(agent => agent.fee);
    console.log(agentRatings);
    console.log(agentFees);
    
    // apply math for avg rating and fees
    const ratingSum = agentRatings.reduce((sum, rating) => sum + rating, 0);
    console.log(ratingSum);
    const feeSum = agentFees.reduce((sum, fee) => sum + fee, 0);
console.log(feeSum);
    const avgRating = ratingSum / agentRatings.length;
    console.log(avgRating);
    const avgFee = feeSum / agentFees.length;
    console.log(avgFee);
    //send out
    res.status(200).json({
        "Average Rating": avgRating,
        "Average Fee": avgFee
    });
});

//
// feedback
app.listen(3000, () => {
  console.log(` server listening on port ${3000} `)
})