import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSumary } from '../../components/expenseSumary';
import expenses from '../fixtures/expenses';

// Testing with expenses
test('should render ExpenseSumary with expenses', () => {
    const wrapper = shallow(<ExpenseSumary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

// Testing w/o expenses
test('should render ExpenseSumary in caso of no expenses', () => {
    const wrapper = shallow(<ExpenseSumary expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});
