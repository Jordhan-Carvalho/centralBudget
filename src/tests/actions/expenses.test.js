import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, editExpense, removeExpense, addExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import db from '../../firebase/firebase';

//mock store
const createMockStore = configureMockStore([thunk]);


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
    const result = addExpense(expenses[2]);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
    expense: expenses[2]
});
});


//async test
test('should add expense to database and store', async () => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'nice logT',
        createdAt: 1000
    };

    await store.dispatch(startAddExpense(expenseData));
    const actions = await store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
    //check if its saved on db
    db.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
    });
});

test('should add expense with defaults to database and store', async () => {
    const store = createMockStore({});
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    await store.dispatch(startAddExpense({}));
    const actions = await store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseDefault
        }
    });
    //check if its saved on db
    db.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
    });
});

// test('should return a new expense action obj with DEFAULT values', () => {
//     const result = addExpense()
//     expect(result).toEqual({
//         type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }})
// })