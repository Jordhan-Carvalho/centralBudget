import db from '../firebase/firebase';


// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
  });

    
  export const startAddExpense = (expenseData = {}) => {
    // only works bc redux middleware (redux thunk)
    return async (dispatch, getState) => {
      const uid = getState().auth.uid;
      const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0,
      } = expenseData;
      const expense = {description, note, amount, createdAt};
      //save the data to firebase (aynsc call) (used the return to testing porpouse)
        const ref = await db.ref(`users/${uid}/expenses`).push(expense);
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

  export const startRemoveExpense = (expense) => {
    return async (dispatch, getState) => {
      const uid = getState().auth.uid;
        const id = expense.id;
  try{
  await db.ref(`users/${uid}/expenses/${id}`).remove();
        dispatch(removeExpense(expense));
      } catch (error) {
        alert(error);
      }
      };
      };
  
  // EDIT_EXPENSE
  export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });

  export const startEditExpense = (id, updates) => {
    return async (dispatch, getState) => {
      const uid = getState().auth.uid;
      try{
        await db.ref(`users/${uid}/expenses/${id}`).update(updates);
        dispatch(editExpense(id, updates));
      } catch (error) {
        console.log(error);
      }
    };
  };

  // SET_EXPENSES
  export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
  });

  // export const startSetExpenses
  export const startSetExpenses = () => {
    return async (dispatch, getState) => {
      const uid = getState().auth.uid;
  // 1. fetch all expense data once
  //2. Parse the data to array
  const expenses = []; 
  await db.ref(`users/${uid}/expenses`).once('value', (snapshot) => {
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