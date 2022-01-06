type getAvaragePriceFn = (fisrt: number, second: number) => number;

export const getAvaragePrice: getAvaragePriceFn = (invested, buyPrice) =>
  Number((invested / buyPrice).toFixed(2));
