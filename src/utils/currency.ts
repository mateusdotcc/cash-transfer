import currency from 'currency.js';

import symbols from 'assets/mock/symbols.json';

function addCurrency(value: number | string, from: string) {
  return currency(value, {
    fromCents: false,
    symbol: Object.values(symbols)[Object.keys(symbols).indexOf(from)],
  }).format();
}

export default addCurrency;
