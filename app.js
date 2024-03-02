//dependencies <- packages
const express = require('express');

//imports <- other files in project
const list = require("./agents")
const { calculateElevatorCost } = require('./agents');

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
    const agentsByRegion = list.agentList.filter(agent => agent.region === selectedRegion);
    //get list of rating and fees for agents in selectedRegion
    const agentRatings = listOfAgents.map(agent => agent.rating);
    const agentFees = listOfAgents.map(agent => agent.fee);
   console.log(agentRatings);
   console.log(agentFees);
    
     // apply math for avg rating and fees
   const ratingSum = Number(agentsByRegion.reduce((sum, agent) => sum + agent.rating, 0));
    console.log(ratingSum);
    const feeSum = Number(agentsByRegion.reduce((sum, agent) => sum + agent.fee, 0));
console.log(feeSum);
   const avgRating = Math.ceil(ratingSum / agentRatings.length);
    console.log(avgRating);
    const avgFee = Math.ceil(feeSum / agentFees.length);
    console.log(avgFee);
    //send out
    res.status(200).json({
       "Average Rating": avgRating,
       "Average Fee": avgFee
    });
});

//elevators calculations //
app.get('/calc-res', (req, res) => {
    const apartments = parseInt(req.query.apartments, 10);
    const floors = parseInt(req.query.floors, 10);
    const tier = req.query.tier;
    console.log(`apartments: ${apartments}`);
    console.log(`floors: ${floors}`);
    console.log(`tier: ${tier}`);
//validate inputs
    if (isNaN(apartments) || isNaN(floors) || !['standard', 'premium', 'excelium'].includes(tier)){
        return res.status(400).send('Invalid input');
    }
// define tier costs
    const tierCosts = {
        standard: 8000,
        premium: 12000,
        excelium: 15000,
    };
// calculate number of elevators needed
    const elevators = Math.ceil(apartments / 6);

// calculate final cost based on selected tier
    const finalCost = elevators * tierCosts[tier];

// return elevators needed and final cost
    res.status(200).send({elevators, finalCost});

});
// end elevator calculations

//set up contact us POST
app.post('/contact-us', (req,res) => {
    const { first_name, last_name, message } = req.body;

    console.log(first_name);
    console.log(last_name);
    console.log(message);
//log message
console.log(` Message from ${first_name} ${last_name}: ${message} `);

// validating data

if (!first_name || !last_name || !message) {
    return res.status(400).json({error:'All fields are required.'});
}

    res.status(201).json({
        "First Name": first_name,
        "Last Name": last_name,
        "Message": message
    });
});

// feedback
app.listen(3000, () => {
  console.log(` server listening on port ${3000} `)
})