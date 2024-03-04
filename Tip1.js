// const express = require('express');
// const app = express();

// app.post('/api/data', (req, res) => {
//   res.status(400).json({ message: 'Données reçues avec succès !' }); 
// });

// module.exports = app;

// *******************************************************

const express = require('express');
const app = express();

app.post('/api/data', (req, res) => {
  res.status(200).json({ message: 'Données reçues avec succès !' }); 
});

module.exports = app;

