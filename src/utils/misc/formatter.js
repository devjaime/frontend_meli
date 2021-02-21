// Its a good practice to keep reusable functions in separate script
export const formatCurrency = (amount, decimals) => new Intl.NumberFormat('de-DE').format(amount + decimals);
export default formatCurrency;
