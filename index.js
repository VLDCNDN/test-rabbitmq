const express = require('express')
const app = express()
const port = 3000

require('./send');
require('./receive');

app.get('/', (req, res) => {
  res.send('Hellow world!');
});

app.listen(port, () => {
  console.log(`running ... PORT: ${port}`);
});