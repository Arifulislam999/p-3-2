export const formatMoney = (amount) => {
  const formattedAmount = amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parseInt(formattedAmount); // Convert back to integer after formatting
};
