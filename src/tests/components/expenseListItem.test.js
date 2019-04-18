import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/expenseListItem';
import expenses from '../fixtures/expenses';

test('should render list of expenses', () => {
    const wrapper = shallow(<ExpenseListItem expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});