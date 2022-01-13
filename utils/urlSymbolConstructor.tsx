function symbolsUrlConstructor(symbols: string[]) {
  if (symbols) {
    const urlItems = symbols.map(item => {
      return `symbols[]=${item}`;
    });
    return urlItems.join('&');
  }
  return;
}

export default symbolsUrlConstructor;
