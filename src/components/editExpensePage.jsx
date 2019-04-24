import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./common/form";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends Component {
  onRemove = () => {
    this.props.startRemoveExpense(this.props.expense);
    this.props.history.push("/");
  };

  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="form-group">
        <h1>Edit {this.props.expense.description}</h1>
        <div className="form-group">
          <Form expense={this.props.expense} onSubmit={this.onSubmit} />
        </div>
        <div className="form-group">
          <button className="btn btn-danger" onClick={this.onRemove}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}

// maps

const mapDispatchToProps = dispatch => {
  return {
    startEditExpense: (expenseID, expense) =>
      dispatch(startEditExpense(expenseID, expense)),
    startRemoveExpense: expense => dispatch(startRemoveExpense(expense))
  };
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
