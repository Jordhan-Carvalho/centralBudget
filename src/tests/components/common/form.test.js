import React from 'react'
import { shallow } from 'enzyme';
import moment from 'moment';
import Form from '../../../components/common/form';
import expenses from '../../fixtures/expenses';

test('should render Form correctly', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
});

// should render Form with expense data
test('should render Form with expense data', () => {
    const wrapper = shallow(<Form expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

// testing for erros on events
test('should render error for invalid form submission', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<Form />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe('New description');
});

test('should set note on textarea change', () => {
    const value = 'new note';
    const wrapper = shallow(<Form />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe('new note');
});

// 2 test cases for amount, 1 with valid input

test('should set amount if valid input', () => {
    const value = '23.25'
    const wrapper = shallow(<Form />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('23.25');
});

test('should NOT set amount because of invalid input', () => {
    const value = '23.253'
    const wrapper = shallow(<Form />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

// using spies (fake functions) also known as Mock functions

// test valid data on submit
test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<Form expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt,
        tax: 0
    });
});

// test onDateChange

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<Form />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
    const validInput = { focused: true };
    const wrapper = shallow(<Form />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')(validInput);
    expect(wrapper.state('calendarFocused')).toBe(true);
});