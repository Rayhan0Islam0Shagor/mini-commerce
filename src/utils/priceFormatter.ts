export const priceFormat = (num: number) => {
  return num.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
