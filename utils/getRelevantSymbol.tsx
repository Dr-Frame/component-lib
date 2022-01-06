import topCryptoList from './topCryptoList';

export const getRelevantSymbol = (name: string) => {
  const symbol = topCryptoList.find(item => item.name === name)?.symbol;
  return symbol;
};
