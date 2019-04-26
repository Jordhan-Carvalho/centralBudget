import db from '../firebase/firebase';
import { startAddSaving } from './savings';

// ADD_INCOME
export const addIncome = (income) => ({
    type: 'ADD_INCOME',
    income
  });

    
  export const startAddIncome = (incomeData = {}) => {
    // only works bc redux middleware (redux thunk)
    return async (dispatch, getState) => {
      const uid = getState().auth.uid;
      //default value
      const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0,
        tax=0
      } = incomeData;
      // line for tax
      const taxIncome = {description, note, amount, createdAt, tax};
      const taxAmount = ((taxIncome.amount*(tax/100)));
      taxIncome.amount = (taxIncome.tax === 0 ?  taxIncome.amount : (taxIncome.amount-taxAmount));
      const income = {description: taxIncome.description, note: taxIncome.note, amount: taxIncome.amount, createdAt: taxIncome.createdAt};
      console.log(taxAmount);
      if (taxIncome.tax !== 0)  dispatch(startAddSaving({...income, amount: taxAmount}));
      //end tax
      //save the data to firebase (aynsc call) (used the return to testing porpouse)
        const ref = await db.ref(`users/${uid}/incomes`).push(income);
      dispatch(addIncome({
        id: ref.key,
        ...income
      }));
    };
  };
  
  // REMOVE_EXPENSE
  export const removeIncome = ({ id } = {}) => ({
    type: 'REMOVE_INCOME',
    id
  });

  export const startRemoveIncome = (income) => {
    return async (dispatch, getState) => {
      const uid = getState().auth.uid;
        const id = income.id;
  try{
  await db.ref(`users/${uid}/incomes/${id}`).remove();
        dispatch(removeIncome(income));
      } catch (error) {
        alert(error);
      }
      };
      };
  
  // EDIT_EXPENSE
  export const editIncome = (id, updates) => ({
    type: 'EDIT_INCOME',
    id,
    updates
  });

  export const startEditIncome = (id, updates) => {
    return async (dispatch, getState) => {
      const uid = getState().auth.uid;
      try{
        await db.ref(`users/${uid}/incomes/${id}`).update(updates);
        dispatch(editIncome(id, updates));
      } catch (error) {
        console.log(error);
      }
    };
  };

  // SET_EXPENSES
  export const setIncomes = (incomes) => ({
    type: 'SET_INCOMES',
    incomes
  });

  // export const startSetExpenses
  export const startSetIncomes = () => {
    return async (dispatch, getState) => {
      const uid = getState().auth.uid;
  // 1. fetch all income data once
  //2. Parse the data to array
  const incomes = []; 
  await db.ref(`users/${uid}/incomes`).once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
                incomes.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
        });
        // 3. dispatch SET_EXPENSES
        dispatch(setIncomes(incomes));
      };
      };