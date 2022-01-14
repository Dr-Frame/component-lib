interface IGetProfitFnREsult {
  profit: number;
  profitInPercent: number;
}

type GetProfitFnType = (
  buyPrice: number,
  assetPrice: number,
  amount: number,
  invested: number,
  type: 'Sell' | 'Buy',
) => IGetProfitFnREsult;

export const getProfit: GetProfitFnType = (
  buyPrice,
  assetPrice,
  amount,
  invested,
  type,
) => {
  console.log(buyPrice, assetPrice, amount, invested, type);

  let profit = 0;
  let profitInPercent = 0;
  if (type === 'Sell') {
    profit = (buyPrice - assetPrice) * amount;
    profitInPercent = (profit / invested) * 100;
  }
  if (type === 'Buy') {
    profit = (assetPrice - buyPrice) * amount;
    profitInPercent = (profit / invested) * 100;
  }
  console.log(profit, profitInPercent);

  return { profit, profitInPercent };
};
