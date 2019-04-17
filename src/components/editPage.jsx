import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditPage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          props.dispatch(removeExpense(props.expense));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditPage);
