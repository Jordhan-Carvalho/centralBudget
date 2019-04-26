import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../common/form";
import { startAddExpense } from "../../actions/expenses";

export class AddExpensePage extends Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push("/expenses");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Add Expense</h1>
        <Form onSubmit={this.onSubmit} />
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
