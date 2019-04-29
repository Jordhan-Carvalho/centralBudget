import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../../../components/common/listItem';
import expenses from '../../fixtures/expenses';

test('should render list of expenses', () => {
    const wrapper = shallow(<ListItem expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});