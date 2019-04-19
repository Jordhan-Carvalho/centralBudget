import React, { Component } from "react";
import { Link } from "react-router-dom";
import ExpenseList from "./expenseList";
import ExpenseListFilters from "./expenseListFilters";
import ExpenseSumary from "./expenseSumary";

class ExpenseDashboardPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
        <ExpenseSumary />
        <ExpenseListFilters />
        <ExpenseList />
        <Link to="/create">Add expense</Link>
        <Link to="edit">edit expense</Link>
      </React.Fragment>
    );
  }
}

export default ExpenseDashboardPage;
