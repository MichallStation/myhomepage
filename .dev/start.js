const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 5000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '..')));

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
