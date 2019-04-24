


const getTotal = (transactions) => {
    if (transactions && transactions.length !== 0) {
    return transactions.map(expense => expense.amount).reduce((sum, value) => sum+value);
} else {
    return 0;
}
};

export default getTotal