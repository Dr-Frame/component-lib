type getAmount = (fisrt: number, second: number) => number;

export const getAmount: getAmount = (invested, buyPrice) =>
  Number((invested / buyPrice).toFixed(2));
