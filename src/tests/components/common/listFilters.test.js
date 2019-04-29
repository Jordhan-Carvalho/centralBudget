import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ListFilters } from '../../../components/common/listFilters';
import { filters, altFilters} from '../../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
setTextFilter = jest.fn();
sortByDate = jest.fn();
sortByAmount = jest.fn();
setEndDate= jest.fn();
setStartDate = jest.fn();
wrapper = shallow(<ListFilters 
filters={filters}
setTextFilter={setTextFilter}
sortByDate={sortByDate}
sortByAmount={sortByAmount}
setStartDate={setStartDate}
setEndDate={setEndDate}
/>);
});


test('should render expense list filter correclty', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list filter with alt data correclty', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

// should handle text change
test('should handle text change', () => {
    const value = 'hello';
    wrapper.find('input').simulate('change', {
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith('hello');
});

// sort testing

test('should sort by Date', () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by Amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});