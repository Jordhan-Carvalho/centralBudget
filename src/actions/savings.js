import db from '../firebase/firebase';

// ADD_SAVING
export const addSaving = (saving) => ({
    type: 'ADD_SAVING',
    saving
  });

    
  export const startAddSaving = (savingData = {}) => {
    // only works bc redux middleware (redux thunk)
    return async (dispatch, getState) => {
      const uid = getState().auth.uid;
      const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
      } = savingData;
      const saving = {description, note, amount, createdAt};
      //save the data to firebase (aynsc call) (used the return to testing porpouse)
        const ref = await db.ref(`users/${uid}/savings`).push(saving);
      dispatch(addSaving({
        id: ref.key,
        ...saving
      }));
    };
  };
  
  // REMOVE_EXPENSE
  export const removeSaving = ({ id } = {}) => ({
    type: 'REMOVE_SAVING',
    id
  });

  export const startRemoveSaving = (saving) => {
    return async (dispatch, getState) => {
      const uid = getState().auth.uid;
        const id = saving.id;
  try{
  await db.ref(`users/${uid}/savings/${id}`).remove();
        dispatch(removeSaving(saving));
      } catch (error) {
        alert(error);
      }
      };
      };
  
  // EDIT_EXPENSE
  export const editSaving = (id, updates) => ({
    type: 'EDIT_SAVING',
    id,
    updates
  });

  export const startEditSaving = (id, updates) => {
    return async (dispatch, getState) => {
      const uid = getState().auth.uid;
      try{
        await db.ref(`users/${uid}/savings/${id}`).update(updates);
        dispatch(editSaving(id, updates));
      } catch (error) {
        console.log(error);
      }
    };
  };

  // SET_EXPENSES
  export const setSavings = (savings) => ({
    type: 'SET_SAVINGS',
    savings
  });

  // export const startSetExpenses
  export const startSetSavings = () => {
    return async (dispatch, getState) => {
      const uid = getState().auth.uid;
  // 1. fetch all saving data once
  //2. Parse the data to array
  const savings = []; 
  await db.ref(`users/${uid}/savings`).once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
                savings.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
        });
        // 3. dispatch SET_EXPENSES
        dispatch(setSavings(savings));
      };
      };