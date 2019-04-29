import React from 'react';
import { shallow } from 'enzyme';
import { AddIncomePage } from '../../../components/incomes/addIncomePage';
import expenses from '../../fixtures/expenses';

// using lifecycle methods (global) refactoring
let startAddIncome, history, wrapper;
beforeEach(() => {
    startAddIncome = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddIncomePage startAddIncome={startAddIncome} history={history} />);
});
//

test('should render AddIncomePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

//test in case of submiting everything right
test('should handle onSubmit', () => {
    wrapper.find('Form').prop('onSubmit')(expenses[0]);
    //check if spies (mock fn) are ij
    expect(history.push).toHaveBeenLastCalledWith('/incomes');
    expect(startAddIncome).toHaveBeenLastCalledWith(expenses[0]);
});