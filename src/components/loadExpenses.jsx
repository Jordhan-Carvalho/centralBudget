import React, { Component } from "react";
import { Link } from "react-router-dom";
import ExpenseList from "./expenseList";
import TransSumary from "./common/transSumary";

class LoadExpenses extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Expense List</h1>
        <TransSumary type={"expense"} />
        <ExpenseList />
        <Link to="/create">Add expense</Link>
      </React.Fragment>
    );
  }
}

export default LoadExpenses;
