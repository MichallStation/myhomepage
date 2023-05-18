const path = require('path');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '..')));

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.headers);
  res.status(200).json(req.body);
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
