import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import incomesReducer from '../reducers/incomes';
import savingsReducer from '../reducers/savings';

export default () => {

// Store creation

const store = createStore(
    combineReducers({
      savings: savingsReducer,
      incomes: incomesReducer,
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    applyMiddleware(thunk)
    // to use redux devtools, replace the applyMiddleware with it
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;


}