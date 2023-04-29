const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());


const trains = [
  {
    name: 'Express 1',
    img :"https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/01/27141337/Indian-Railways-launches-%E2%80%98Ideal-Train-Profile%E2%80%99-.png",
    info : "The Ideal Train Profile is seat capacity optimization decision support, which is done because the number of ticket class combinations on a single train journey can exceed 5,000.",
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
    img : "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/05/06/1039502-bharat-train-up.jpg",
    info : "Under the new strategy of the Ministry of Railways, the Indian Railway Catering and Tourism Corporation (IRCTC) will launch its inaugural Bharat Gaurav Tourist Train. On June 21, the train will make its first journey.",
    delays: 5,
    expensive: false,
    cheap: true,
    seats: [
      { coach: 'Business Class', availability: 30 },
      { coach: 'Economy Class', availability: 150 },
    ],
  },
  {
    name: 'Express 3',
    img : "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/05/06/1039502-bharat-train-up.jpg",
    info : "Under the new strategy of the Ministry of Railways, the Indian Railway Catering and Tourism Corporation (IRCTC) will launch its inaugural Bharat Gaurav Tourist Train. On June 21, the train will make its first journey.",
    delays: 5,
    expensive: false,
    cheap: true,
    seats: [
      { coach: 'Business Class', availability: 30 },
      { coach: 'Economy Class', availability: 150 },
    ],
  },
  {
    name: 'Express 4',
    img : "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/05/06/1039502-bharat-train-up.jpg",
    info : "Under the new strategy of the Ministry of Railways, the Indian Railway Catering and Tourism Corporation (IRCTC) will launch its inaugural Bharat Gaurav Tourist Train. On June 21, the train will make its first journey.",
    delays: 5,
    expensive: false,
    cheap: true,
    seats: [
      { coach: 'Business Class', availability: 30 },
      { coach: 'Economy Class', availability: 150 },
    ],
  },
  {
    name: 'Express 5',
    img : "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/05/06/1039502-bharat-train-up.jpg",
    info : "Under the new strategy of the Ministry of Railways, the Indian Railway Catering and Tourism Corporation (IRCTC) will launch its inaugural Bharat Gaurav Tourist Train. On June 21, the train will make its first journey.",
    delays: 5,
    expensive: false,
    cheap: true,
    seats: [
      { coach: 'Business Class', availability: 30 },
      { coach: 'Economy Class', availability: 150 },
    ],
  },
  {
    name: 'Express 6',
    img : "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/05/06/1039502-bharat-train-up.jpg",
    info : "Under the new strategy of the Ministry of Railways, the Indian Railway Catering and Tourism Corporation (IRCTC) will launch its inaugural Bharat Gaurav Tourist Train. On June 21, the train will make its first journey.",
    delays: 5,
    expensive: false,
    cheap: true,
    seats: [
      { coach: 'Business Class', availability: 30 },
      { coach: 'Economy Class', availability: 150 },
    ],
  },
  {
    name: 'Express 7',
    img : "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/05/06/1039502-bharat-train-up.jpg",
    info : "Under the new strategy of the Ministry of Railways, the Indian Railway Catering and Tourism Corporation (IRCTC) will launch its inaugural Bharat Gaurav Tourist Train. On June 21, the train will make its first journey.",
    delays: 5,
    expensive: false,
    cheap: true,
    seats: [
      { coach: 'Business Class', availability: 30 },
      { coach: 'Economy Class', availability: 150 },
    ],
  },
];


app.get('/trains', (req, res) => {
  res.json(trains);
});


app.get('/trains/:name', (req, res) => {
  const trainName = req.params.name;
  const train = trains.find((t) => t.name === trainName);
  if (train) {
    res.json(train);
  } else {
    res.status(404).send('Train not found');
  }
});


const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
