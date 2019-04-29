import React from 'react';
import { shallow } from 'enzyme';
import LoadExpenses from '../../../components/expenses/loadExpenses';

test('should render expenses page', () => {
    const wrapper = shallow(<LoadExpenses />);
    expect(wrapper).toMatchSnapshot();
});