export function symbolsUrlConstructor(symbols: string[]) {
  if (symbols) {
    const urlItems = symbols.map(item => {
      return `symbols[]=${item}`;
    });
    return urlItems.join('&');
  }
  return;
}

export function uuidUrlConstructor(uuid: string[]) {
  if (uuid) {
    const urlItems = uuid.map(item => {
      return `uuids[]=${item}`;
    });

    return urlItems.join('&');
  }
  return;
}
