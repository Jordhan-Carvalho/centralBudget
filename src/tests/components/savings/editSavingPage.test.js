import React from 'react';
import { shallow } from 'enzyme';
import { EditSavingPage } from '../../../components/savings/editSavingPage';
import expenses from '../../fixtures/expenses';

// using lifecycle methods (global) refactoring
let startEditSaving, history, wrapper, startRemoveSaving;
beforeEach(() => {
    startRemoveSaving = jest.fn();
    startEditSaving = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditSavingPage startEditSaving={startEditSaving} startRemoveSaving={startRemoveSaving} history={history} saving={expenses[0]}/>);
});
//

test('should render edit income page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditSaving', () => {
    wrapper.find('Form').prop('onSubmit')(expenses[0]);
    //check if spies (mock fn) are ij
    let expWoId = Object.assign({}, expenses[0], {id: undefined }) ;
    expect(history.push).toHaveBeenLastCalledWith('/savings');
    expect(startEditSaving).toHaveBeenLastCalledWith(expenses[0].id, expWoId);
});

test('should handle startRemoveSaving', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/savings');
    expect(startRemoveSaving).toHaveBeenLastCalledWith(expenses[0]);
});