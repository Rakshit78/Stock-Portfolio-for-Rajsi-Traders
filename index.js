const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const {
  getReturns,
  getTotalReturns,
  getReturnPercentage,
  getAllStocksReturns,
} = require('./utils');
const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// /calculate-returns?boughtAt=300&marketPrice=400&quantity=2

app.get('/calculate-returns', (req, res) => {
  try {
    const { boughtAt, marketPrice, quantity } = req.query;
    if (!boughtAt || !marketPrice || !quantity)
      return res.status(404).json({ msg: 'not found' });
    const result = getReturns(boughtAt, marketPrice, quantity);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e);
  }
});
// /total-returns?stock1=100&stock2=200&stock3=200&stock4=400
app.get('/total-returns', (req, res) => {
  try {
    const { stock1, stock2, stock3, stock4 } = req.query;
    if (!stock1 || !stock2 || !stock3 || !stock4)
      return res.status(404).json({ msg: 'not found' });
    const result = getTotalReturns(stock1, stock2, stock3, stock4);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e);
  }
});

// /calculate-return-percentage?boughtAt=400&returns=200
app.get('/calculate-return-percentage', (req, res) => {
  try {
    const { boughtAt, returns } = req.query;
    if (!boughtAt || !returns)
      return res.status(404).json({ msg: 'not found' });
    const result = getReturnPercentage(boughtAt, returns);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e);
  }
});

// /total-return-percentage?stock1=10&stock2=20&stock3=20&stock4=40
app.get('/total-return-percentage', (req, res) => {
  try {
    const { stock1, stock2, stock3, stock4 } = req.query;
    if (!stock1 || !stock2 || !stock3 || !stock4)
      return res.status(404).json({ msg: 'not found' });
    const result = getAllStocksReturns(stock1, stock2, stock3, stock4);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e);
  }
});
// /status?returnPercentage=90
app.get('/status', (req, res) => {
  try {
    const { returnPercentage } = req.query;
    if (!returnPercentage) {
      return res.status(404).json({ msg: 'not found' });
    }
    const parsedreturnPercentage = parseFloat(returnPercentage);
    const result = parsedreturnPercentage > 0 ? 'profit' : 'loss';
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
