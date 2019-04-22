import db from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
  });

    
  export const startAddExpense = (expenseData = {}) => {
    // only works bc redux middleware (redux thunk)
    return async (dispatch) => {
      const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
      } = expenseData;
      const expense = {description, note, amount, createdAt};
      //save the data to firebase (aynsc call) (used the return to testing porpouse)
        const ref = await db.ref('expenses').push(expense);
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    };
  };
  
  // REMOVE_EXPENSE
  export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
  });
  
  // EDIT_EXPENSE
  export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });

  // SET_EXPENSES
  export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
  });

  // export const startSetExpenses
  export const startSetExpenses = () => {
    return async (dispatch) => {
  // 1. fetch all expense data once
  //2. Parse the data to array
  const expenses = []; 
  await db.ref('expenses').once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
        });
        // 3. dispatch SET_EXPENSES
        dispatch(setExpenses(expenses));
      };
      };