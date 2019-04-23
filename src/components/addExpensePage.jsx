import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Add exprense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </React.Fragment>
    );
  }
}

// to simplify props.dispatch(addExpense(expense)) to props.onSubmit(expense)
const mapDispatchToProps = dispatch => {
  return {
    startAddExpense: expense => dispatch(startAddExpense(expense))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
