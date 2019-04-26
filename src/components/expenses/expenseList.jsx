import React from "react";
import { connect } from "react-redux";
import ListItem from "../common/listItem";
import selectVisible from "../../selectors/visibleTrans";

export const ExpenseList = props => {
  return (
    <div>
      {props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        <ListItem type={"expense"} expenses={props.expenses} />
      )}
    </div>
  );
};

// redux call
const mapStateToProps = state => {
  return {
    expenses: selectVisible(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
