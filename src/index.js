import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import App from './App';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from './serviceWorker';



const store = configStore();

const newExp = {
  description: 'Water bll',
  note: 'wat',
  amount: 564500,
  createdAt: 1
};

const newExp2 = {
  ...newExp,
  description: 'Gas bill',
  amount: 400,
  createdAt: 100
};

const newExp3 = {
  ...newExp,
  description: 'Rent',
  amount: 500,
  createdAt: 200
};

store.dispatch(addExpense(newExp));
store.dispatch(addExpense(newExp2));
store.dispatch(addExpense(newExp3));



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


console.log(visibleExpenses);



ReactDOM.render(<Provider store={store}>
<BrowserRouter>
    <App />  
  </BrowserRouter>
  </Provider>  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
