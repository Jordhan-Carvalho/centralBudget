import getExpensesTotal from '../../selectors/transaction-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('correctly add a single expense', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195);
});