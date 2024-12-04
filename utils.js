const getReturns = (boughtAt, marketPrice, quantity) => {
  let floatedboughtAt = parseFloat(boughtAt);
  let floatedmarketPricet = parseFloat(marketPrice);
  let profit = (floatedmarketPricet - floatedboughtAt) * quantity;
  return profit.toString();
};

const getTotalReturns = (stock1, stock2, stock3, stock4) => {
  let floatedStock1 = parseFloat(stock1);
  let floatedStock2 = parseFloat(stock2);
  let floatedStock3 = parseFloat(stock3);
  let floatedStock4 = parseFloat(stock4);
  const totalReturns =
    floatedStock1 + floatedStock2 + floatedStock3 + floatedStock4;
  return totalReturns.toString();
};

const getReturnPercentage = (boughtAt, returns) => {
  const FloatedboughtAt = parseFloat(boughtAt);
  const Floatedreturns = parseFloat(returns);
  const percentage = (Floatedreturns / FloatedboughtAt) * 100;

  return percentage.toString();
};

const getAllStocksReturns = (stock1, stock2, stock3, stock4) => {
  let floatedStock1 = parseFloat(stock1);
  let floatedStock2 = parseFloat(stock2);
  let floatedStock3 = parseFloat(stock3);
  let floatedStock4 = parseFloat(stock4);
  const totalReturns =
    floatedStock1 + floatedStock2 + floatedStock3 + floatedStock4;
  return totalReturns.toString();
};

module.exports = {
  getReturns,
  getTotalReturns,
  getReturnPercentage,
  getAllStocksReturns,
};
