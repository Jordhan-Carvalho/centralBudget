import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../../components/navBar';

test('should render NavBar correctly', () => {
    const wrapper = shallow(<NavBar startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();

});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<NavBar startLogout={startLogout}/>);
    wrapper.find('span').at(1).simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
