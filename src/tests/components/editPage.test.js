import React from 'react';
import { shallow } from 'enzyme';
import { EditPage } from '../../components/editPage';
import expenses from '../fixtures/expenses';

// using lifecycle methods (global) refactoring
let startEditExpense, history, wrapper, startRemoveExpense;
beforeEach(() => {
    startRemoveExpense = jest.fn();
    startEditExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditPage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenses[0]}/>);
});
//

test('should render edit page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    //check if spies (mock fn) are ij
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0]);
})