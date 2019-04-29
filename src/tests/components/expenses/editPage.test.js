import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../../components/expenses/editExpensePage';
import expenses from '../../fixtures/expenses';

// using lifecycle methods (global) refactoring
let startEditExpense, history, wrapper, startRemoveExpense;
beforeEach(() => {
    startRemoveExpense = jest.fn();
    startEditExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenses[0]}/>);
});
//

test('should render edit page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
    wrapper.find('Form').prop('onSubmit')(expenses[0]);
    //check if spies (mock fn) are ij
    let expWoId = Object.assign({}, expenses[0], {id: undefined }) ;
    expect(history.push).toHaveBeenLastCalledWith('/expenses');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expWoId);
});

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/expenses');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0]);
});