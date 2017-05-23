const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

const mapToIds = function (items) {
  return items.map(function (name, index) {
    return {
      id: index,
      name: name
    };
  });
};
const mockItems = mapToIds(['Coke', 'Water', 'Cell phone', 'Paper', 'Wood', 'Gold']);

app.get('/items', function (req, res) {
  const page = +req.query.page || 0;
  const count = +req.query.count || mockItems.length;
  res.json(mockItems.slice(page * count, (page * count) + count));
});

app.listen(8080, function () {
  console.log('listening on port 8080');
});
