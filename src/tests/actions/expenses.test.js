import { editExpense, removeExpense, addExpense } from '../../actions/expenses';


// REMOVE EXPENSES ACTION
test('should setup remove expense avtion obj', () => {
    const action = removeExpense({ id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

//EDIT EXPENSES ACTION
test('should setup edit expense action obj', () => {
    const result = editExpense('123abc', {description: 'Ola', amount: 10, test:false});
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {description: 'Ola', amount: 10, test:false}
    })
})


// ADD_EXPENSE
// export const addExpense = (
//     {
//       description = '',
//       note = '',
//       amount = 0,
//       createdAt = 0
//     } = {}
//   ) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: uuid(),
//       description,
//       note,
//       amount,
//       createdAt
//     }
//   });
test('should return a new expense action obj', () => {
    const expenseData = {
        description: 'Ola',
        note: 'tchau',
        amount: 2,
        createdAt: 100
    }
    const result = addExpense(expenseData)
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
    expense: {
    ...expenseData,
    id: expect.any(String),
    }})
})

test('should return a new expense action obj with DEFAULT values', () => {
    const result = addExpense()
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }})
})