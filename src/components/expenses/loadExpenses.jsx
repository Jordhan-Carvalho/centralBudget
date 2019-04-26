import React, { Component } from "react";
import { Link } from "react-router-dom";
import ExpenseList from "./expenseList";
import ListFilters from "../common/listFilters";
import TransSumary from "../common/transSumary";

class LoadExpenses extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Expense List</h1>
        <hr />
        <ListFilters />
        <TransSumary type={"expense"} />
        <hr />
        <ExpenseList />
        <hr />
        <Link to="/create">
          <button className="btn btn-dark">Add Expense</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default LoadExpenses;
