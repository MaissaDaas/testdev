// const express = require('express');
// const app = express();

// // Define routes
// app.get('/api/data', (req, res) => {
//   res.status(200).json({ data: [1, 2, 3, 4, 5] }); 
// });

// module.exports = app;


const express = require('express');
const app = express();

app.get('/api/number', (req, res) => {
  res.status(200).json({ number: 42 }); 
});

module.exports = app;
