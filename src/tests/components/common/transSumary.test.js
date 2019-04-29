import React from 'react';
import { shallow } from 'enzyme';
import { TransSumary } from '../../../components/common/transSumary';
import expenses from '../../fixtures/expenses';


// Testing with expenses
test('should render TransSumary with expenses', () => {
    const wrapper = shallow(<TransSumary expenses={expenses} type={'expense'}/>);
    expect(wrapper).toMatchSnapshot();
});


// Testing w/o expenses
test('should render TransSumary in caso of no expenses', () => {
    const wrapper = shallow(<TransSumary expenses={[]} type={'expense'}/>);
    expect(wrapper).toMatchSnapshot();
});
