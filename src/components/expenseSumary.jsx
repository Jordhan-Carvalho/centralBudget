import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";

export const ExpenseSumary = props => {
  return (
    <p>
      Viewing {props.expenses.length}{" "}
      {props.expenses.length === 1 ? "expense" : "expenses"}, totalling{" "}
      {numeral(getExpensesTotal(props.expenses) / 100).format("$0,0.00")}
    </p>
  );
};

//redux
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseSumary);
