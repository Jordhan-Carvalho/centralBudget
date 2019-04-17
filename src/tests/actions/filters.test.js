import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from '../../actions/filters';
import moment from 'moment';


// SET TEXT ACTION
test('test setting text filter', () => {
    const result = setTextFilter('Cara');
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
    text:"Cara"
    })
})

test('test setting text filter DEFAULT', () => {
    const result = setTextFilter();
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
    text:""
    })
})

//Sort by date ACTION
test('test sorting by date filter', () => {
    const result = sortByDate();
    expect(result).toEqual({
        type: 'SORT_BY_DATE'
    })
})


// SORT_BY_AMOUNT
test('test sorting by amount filters', () => {
    const result = sortByAmount();
    expect(result).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

  
  // SET_START_DATE
  test('Setting star date filters', () => {
      const result = setStartDate(moment(0));
      expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
      })
  })
 
  
  // SET_END_DATE
  test('Setting end date filters', () => {
      const result = setEndDate(moment(0));
      expect(result).toEqual({
        type: 'SET_END_DATE',
            endDate: moment(0)
      })
  })
