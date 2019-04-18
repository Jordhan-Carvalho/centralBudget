import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/addExpensePage';
import expenses from '../fixtures/expenses';

// using lifecycle methods (global) refactoring
let addExpense, history, wrapper;
beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});
//

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

//test in case of submiting everything right
test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    //check if spies (mock fn) are ij
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
});