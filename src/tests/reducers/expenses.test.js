import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';



// Default valueu
test('should set default state', () => {
    const action = { type: '@@INIT' };
    const result = expensesReducer(undefined, action);
    expect(result).toEqual([]);
});


// Add new
test('should add a new expense', () => {
    const action = { type: 'ADD_EXPENSE', expense: {
        id: '4',
        description: 'Test Add',
        note: '',
        amount: 200,
        createdAt: 0
      } }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([...expenses, action.expense]);
})

// remove expense
test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([expenses[0], expenses[2]]);
});

test('should NOT remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'gh'
    };
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses);
});

//edit expense

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: { ...expenses[0],
            description: 'Jordhan',}
    };
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([action.updates ,expenses[1], expenses[2]]);
});

test('should not edit an expense if not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'asdf',
        updates: { ...expenses[0],
            description: 'Jordhan',}
    };
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses);
});