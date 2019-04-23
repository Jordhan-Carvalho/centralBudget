import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AddExpensePage from './components/addExpensePage';
import ExpenseDashboardPage from './components/expenseDashboardPage';
import HelpPage from './components/helpPage';
import EditPage from './components/editPage';
import NotFound from './components/notFound';
import LoginPage from './components/loginPage';
import PrivateRoute from './routers/privateRoute';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route path='/' exact component={LoginPage}/>
          <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditPage} />
            <Route path="/help" component={HelpPage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
