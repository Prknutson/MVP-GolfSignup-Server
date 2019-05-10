/* eslint-disable no-console */
const express = require('express');
const router = require('./routes');
const cors = require("cors");

// const { DatabaseQueryHandler } = require('./database/index.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));
app.use('/data', router);

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.error('failed to open server');
  } else {
    console.log(`Listening on ${PORT}`);
  }
});