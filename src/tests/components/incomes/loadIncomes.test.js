import React from 'react';
import { shallow } from 'enzyme';
import LoadIncomes from '../../../components/incomes/loadIncomes';

test('should render incomes page', () => {
    const wrapper = shallow(<LoadIncomes />);
    expect(wrapper).toMatchSnapshot();
});