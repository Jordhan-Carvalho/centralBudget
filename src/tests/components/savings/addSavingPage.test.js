import React from 'react';
import { shallow } from 'enzyme';
import { AddSavingPage } from '../../../components/savings/addSavingPage';
import expenses from '../../fixtures/expenses';

// using lifecycle methods (global) refactoring
let startAddSaving, history, wrapper;
beforeEach(() => {
    startAddSaving = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddSavingPage startAddSaving={startAddSaving} history={history} />);
});
//

test('should render AddSavingPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

//test in case of submiting everything right
test('should handle onSubmit', () => {
    wrapper.find('Form').prop('onSubmit')(expenses[0]);
    //check if spies (mock fn) are ij
    expect(history.push).toHaveBeenLastCalledWith('/savings');
    expect(startAddSaving).toHaveBeenLastCalledWith(expenses[0]);
});