import React from 'react';
import { shallow } from 'enzyme';
import { SavingsChart } from '../../components/savingsChart';

test('should render SavingsChart correctly', () => {
    const wrapper = shallow(<SavingsChart height={400} />);
    expect(wrapper).toMatchSnapshot();
});