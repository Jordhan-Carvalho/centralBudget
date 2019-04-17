import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = props => {
  return (
    <div>
      <h1>Expense List</h1>
      <ExpenseListItem {...props} />
    </div>
  );
};

// redux call
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
