const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set up middleware to handle JSON data
app.use(bodyParser.json());

// Define some sample train data
const trains = [
  {
    name: 'Express 1',
    delays: 10,
    expensive: true,
    cheap: false,
    seats: [
      { coach: 'First Class', availability: 10 },
      { coach: 'Business Class', availability: 20 },
      { coach: 'Economy Class', availability: 100 },
    ],
  },
  {
    name: 'Express 2',
    delays: 5,
    expensive: false,
    cheap: true,
    seats: [
      { coach: 'Business Class', availability: 30 },
      { coach: 'Economy Class', availability: 150 },
    ],
  },
];

// Define a route to retrieve all train data
app.get('/trains', (req, res) => {
  res.json(trains);
});

// Define a route to retrieve a specific train's data by name
app.get('/trains/:name', (req, res) => {
  const trainName = req.params.name;
  const train = trains.find((t) => t.name === trainName);
  if (train) {
    res.json(train);
  } else {
    res.status(404).send('Train not found');
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
