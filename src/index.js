import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import { startSetExpenses } from './actions/expenses';
import App from './App';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "react-dates/lib/css/_datepicker.css";
import * as serviceWorker from './serviceWorker';
import './firebase/firebase';


const store = configStore();


ReactDOM.render(<p>Loading...</p>  , document.getElementById('root'));

(async () => {
await store.dispatch(startSetExpenses());
ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <App />  
  </BrowserRouter>
</Provider>  , document.getElementById('root'));

})();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
