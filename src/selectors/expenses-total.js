


const getExpensesTotal = (expenses) => {
    if (expenses && expenses.length !== 0) {
    return expenses.map(expense => expense.amount).reduce((sum, value) => sum+value);
} else {
    return 0;
}
};

export default getExpensesTotal