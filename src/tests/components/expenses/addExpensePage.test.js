import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../../components/expenses/addExpensePage';
import expenses from '../../fixtures/expenses';

// using lifecycle methods (global) refactoring
let startAddExpense, history, wrapper;
beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});
//

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

//test in case of submiting everything right
test('should handle onSubmit', () => {
    wrapper.find('Form').prop('onSubmit')(expenses[0]);
    //check if spies (mock fn) are ij
    expect(history.push).toHaveBeenLastCalledWith('/expenses');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
});