export const getAdItem = () => {};
export const TenKFormatter = (num: number) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e4, symbol: '만' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return Math.abs(num) >= item.value;
    });

  if (item) {
    const val = num / item.value;
    return (
      (Math.abs(val) > 10
        ? Math.floor(val).toLocaleString()
        : (Math.floor(val * 10) / 10).toLocaleString()
      ).replace(rx, '$1') + item.symbol
    );
  }
  return '0';
};

export const ChartFormatter = (num: number) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e4, symbol: '만' },
    { value: 1e6, symbol: '백만' },
    { value: 1e7, symbol: '천만' },
    { value: 1e8, symbol: '억' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return Math.abs(num) >= item.value;
    });

  if (item) {
    const val = num / item.value;
    return (
      (Math.abs(val) > 10
        ? Math.floor(val).toLocaleString()
        : (Math.floor(val * 10) / 10).toLocaleString()
      ).replace(rx, '$1') + item.symbol
    );
  }
  return '0';
};
