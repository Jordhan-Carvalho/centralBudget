import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AddExpensePage from './components/expenses/addExpensePage';
import AddIncomePage from './components/incomes/addIncomePage';
import AddSavingPage from './components/savings/addSavingPage';
import DashboardPage from './components/dashboardPage';
import HelpPage from './components/helpPage';
import EditIncomePage from './components/incomes/editIncomePage';
import EditExpensePage from './components/expenses/editExpensePage';
import EditSavingPage from './components/savings/editSavingPage';
import LoadIncomes from './components/incomes/loadIncomes';
import LoadExpenses from './components/expenses/loadExpenses';
import LoadSavings from './components/savings/loadSavings';
import NotFound from './components/notFound';
import LoginPage from './components/loginPage';
import PrivateRoute from './routers/privateRoute';
import PublicRoute from './routers/publicRoute';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Switch>
            <PublicRoute path='/' exact component={LoginPage}/>
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/expenses" component={LoadExpenses} />
            <PrivateRoute path="/incomes" component={LoadIncomes} />
            <PrivateRoute path="/savings" component={LoadSavings} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/createinc" component={AddIncomePage} />
            <PrivateRoute path="/createsav" component={AddSavingPage} />
            <PrivateRoute path="/edit/expense/:id" component={EditExpensePage} />
            <PrivateRoute path="/edit/income/:id" component={EditIncomePage} />
            <PrivateRoute path="/edit/saving/:id" component={EditSavingPage} />
            <PrivateRoute path="/help" component={HelpPage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
