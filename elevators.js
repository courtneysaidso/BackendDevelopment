//dependencies <- packages
const express = require('express');

//imports <- other files in project

// configuration
const app = express();
app.use(express.json()); //<-- for consistency
const port = 3000; // <- enventually in env for safety reasons

// API calls

// get number of apartments and floors from form
app.get('/calc-res', (req, res) => {
    const apartments = parseInt(req.query.apartments);
    console.log(apartments);
    const numberOfFloors = parseInt(req.query.floors);
    console.log(numberOfFloors);
    const tier = req.query.tier;
    console.log(tier);

// calculate number of elevators needed
    const elevators = Math.ceil(apartments / 6);

// calculate final cost
    const finalCost = elevators * 10000;

// return elevators needed and final cost
    res.status(200).send({elevators, finalCost});

});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});