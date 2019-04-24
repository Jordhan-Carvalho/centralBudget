import React, { Component } from "react";
import { Link } from "react-router-dom";
import ExpenseList from "./expenseList";
import ListFilters from "./common/listFilters";
import TransSumary from "./common/transSumary";

class LoadExpenses extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
        <TransSumary type={"expense"} />
        <ListFilters />
        <ExpenseList />
        <Link to="/create">Add expense</Link>
      </React.Fragment>
    );
  }
}

export default LoadExpenses;
