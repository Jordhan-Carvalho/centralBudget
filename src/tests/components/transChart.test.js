import React from 'react';
import { shallow } from 'enzyme';
import { TransChart } from '../../components/transChart';

test('should render transChart correctly', () => {
    const wrapper = shallow(<TransChart height={400} />);
    expect(wrapper).toMatchSnapshot();
});
