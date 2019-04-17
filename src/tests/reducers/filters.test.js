import moment from 'moment';
import filtersReducer from '../../reducers/filters';


const defaultObjAnswer = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
}


// test in case of default
test('should setup default filter values', () => {
    const result = filtersReducer(undefined, { type: '@@INIT' })
    expect(result).toEqual({
        ...defaultObjAnswer
    });
});

// using sort by amount
test('should set sortBy to amount', () => {
    const result = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(result).toEqual({
        ...defaultObjAnswer,
        sortBy: 'amount'
    });
});

// using sort by date, using a different approach
test('should set sortBy to date', () => {
    const currentState = {
        ...defaultObjAnswer,
        sortBy: 'amount'
    }
    const result = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(result.sortBy).toBe('date');
});

// Text filter

test('should setup text filter', () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'Ola'};
    const result = filtersReducer(undefined, action );
    expect(result.text).toBe('Ola');
});

// Start Day

test('should set a start day', () => {
    const action = { type: 'SET_START_DATE', startDate: moment(0)};
    const result = filtersReducer(defaultObjAnswer, action );
    expect(result.startDate).toEqual(moment(0));

});


// End day

test('should set a end day', () => {
    const action = { type: 'SET_END_DATE', endDate: moment(0)};
    const result = filtersReducer(defaultObjAnswer, action );
    expect(result.endDate).toEqual(moment(0));

});