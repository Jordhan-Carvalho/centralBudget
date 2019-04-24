import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./common/form";
import { startAddIncome } from "../actions/incomes";

export class AddIncomePage extends Component {
  onSubmit = income => {
    this.props.startAddIncome(income);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Add Income</h1>
        <Form onSubmit={this.onSubmit} />
      </React.Fragment>
    );
  }
}

// to simplify props.dispatch(addExpense(expense)) to props.onSubmit(expense)
const mapDispatchToProps = dispatch => {
  return {
    startAddIncome: income => dispatch(startAddIncome(income))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddIncomePage);
