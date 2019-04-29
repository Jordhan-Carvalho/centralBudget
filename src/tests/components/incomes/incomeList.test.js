import React from 'react';
import { shallow } from 'enzyme';
import { IncomeList } from '../../../components/incomes/incomeList';
import expenses from '../../fixtures/expenses';

// Testing with incomes
test('should render IncomeList with incomes', () => {
    const wrapper = shallow(<IncomeList expenses={expenses} incomes={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

// Testing w/o incomes
test('should NOT render IncomeList in caso of no incomes', () => {
    const wrapper = shallow(<IncomeList expenses={[]} incomes={[]}/>);
    expect(wrapper).toMatchSnapshot();
});