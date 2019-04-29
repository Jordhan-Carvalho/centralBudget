import React from 'react';
import { shallow } from 'enzyme';
import { SavingList } from '../../../components/savings/savingList';
import expenses from '../../fixtures/expenses';

// Testing with savings
test('should render SavingList with savings', () => {
    const wrapper = shallow(<SavingList savings={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

// Testing w/o savings
test('should NOT render SavingList in caso of no savings', () => {
    const wrapper = shallow(<SavingList savings={[]}/>);
    expect(wrapper).toMatchSnapshot();
});