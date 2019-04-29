import React from 'react';
import { shallow } from 'enzyme';
import LoadSavings from '../../../components/savings/loadSavings';

test('should render saving page', () => {
    const wrapper = shallow(<LoadSavings />);
    expect(wrapper).toMatchSnapshot();
});