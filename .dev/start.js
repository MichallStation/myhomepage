const path = require('path');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '..')));

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
