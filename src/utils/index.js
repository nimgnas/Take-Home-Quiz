export const fromSourceToTarget = (targetAmount, currencyRate) => {
  return targetAmount / currencyRate;
};

export const fromTargetToSource = (sourceAmount, currencyRate) => {
  return sourceAmount * currencyRate;
};
