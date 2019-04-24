import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AddExpensePage from './components/addExpensePage';
import AddIncomePage from './components/addIncomePage';
import DashboardPage from './components/dashboardPage';
import HelpPage from './components/helpPage';
import EditIncomePage from './components/editIncomePage';
import EditExpensePage from './components/editExpensePage';
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
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/createinc" component={AddIncomePage} />
            <PrivateRoute path="/edit/expense/:id" component={EditExpensePage} />
            <PrivateRoute path="/edit/income/:id" component={EditIncomePage} />
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
