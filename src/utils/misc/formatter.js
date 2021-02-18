// Its a good practice to keep reusable functions in separate script
export const formatCurrency = (amount, decimals) => {
    return new Intl.NumberFormat("de-DE").format(amount + decimals);
};