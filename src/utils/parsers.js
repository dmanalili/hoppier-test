export const parseBalance = (balance) =>
  Number(balance.replace(/[^0-9\.-]+/g, ""));
