import React from 'react';
import { shallow } from 'enzyme';
import { EditIncomePage } from '../../../components/incomes/editIncomePage';
import expenses from '../../fixtures/expenses';

// using lifecycle methods (global) refactoring
let startEditIncome, history, wrapper, startRemoveIncome;
beforeEach(() => {
    startRemoveIncome = jest.fn();
    startEditIncome = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditIncomePage startEditIncome={startEditIncome} startRemoveIncome={startRemoveIncome} history={history} income={expenses[0]}/>);
});
//

test('should render edit income page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditIncome', () => {
    wrapper.find('Form').prop('onSubmit')(expenses[0]);
    //check if spies (mock fn) are ij
    let expWoId = Object.assign({}, expenses[0], {id: undefined }) ;
    expect(history.push).toHaveBeenLastCalledWith('/incomes');
    expect(startEditIncome).toHaveBeenLastCalledWith(expenses[0].id, expWoId);
});

test('should handle startRemoveIncome', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/incomes');
    expect(startRemoveIncome).toHaveBeenLastCalledWith(expenses[0]);
});