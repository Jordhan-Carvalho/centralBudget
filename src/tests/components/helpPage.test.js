import React from 'react'
import { shallow } from 'enzyme';
import HelpPage from  '../../components/helpPage';

test('should correctly render HelpPage', () => {
    const wrapper = shallow(<HelpPage />);
    expect(wrapper).toMatchSnapshot();
});