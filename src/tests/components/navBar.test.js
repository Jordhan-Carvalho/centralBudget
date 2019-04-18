import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../components/navBar';

test('should render NavBar correctly', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('button')).toBe(1);
    // const renderer = new ShallowRenderer();
    // renderer.render(<NavBar />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});