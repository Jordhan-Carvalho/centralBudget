import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditPage extends Component {
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
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button className="btn btn-primary" onClick={this.onRemove}>
          Remove
        </button>
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
)(EditPage);
