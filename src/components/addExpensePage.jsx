import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expenseForm";
import { addExpense } from "../actions/expenses";

const AddExpensePage = props => {
  return (
    <React.Fragment>
      <h1>Add exprense</h1>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(addExpense(expense));
          props.history.push("/");
        }}
      />
    </React.Fragment>
  );
};

export default connect()(AddExpensePage);
