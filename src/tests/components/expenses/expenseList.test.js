import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../../components/expenses/expenseList';
import expenses from '../../fixtures/expenses';

// Testing with expenses
test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

// Testing w/o expenses
test('should NOT render ExpenseList in caso of no expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});
