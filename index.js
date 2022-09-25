const express = require('express')
const app = express()
const port = 3000

require('./worker');
require('./new_task');

app.get('/', (req, res) => {
  res.send('Hellow world!');
});

app.listen(port, () => {
  console.log(`running ... PORT: ${port}`);
});