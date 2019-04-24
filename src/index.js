import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import { startSetExpenses } from './actions/expenses';
import { startSetIncomes } from './actions/incomes';
import { login, logout } from './actions/auth';
import LoadingPage from './components/loadingPage';
import App from './App';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "react-dates/lib/css/_datepicker.css";
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase/firebase';


const store = configStore();
const history = createBrowserHistory();
const jsx = (<Provider store={store}>
  <Router history={history}>
    <App />  
  </Router>
</Provider>);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx , document.getElementById('root'));
    hasRendered = true;
  }
}

ReactDOM.render(<LoadingPage />  , document.getElementById('root'));



firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    (async () => {
      await store.dispatch(login(user.uid));
      await store.dispatch(startSetExpenses());
      await store.dispatch(startSetIncomes());
      renderApp();
      if (history.location.pathname === '/') history.push('/dashboard')
      })();
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
