import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/notFound';

test('should render not found page', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
});