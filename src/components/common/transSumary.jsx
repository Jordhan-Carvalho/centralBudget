import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectVisible from "../../selectors/visibleTrans";
import getTotal from "../../selectors/transaction-total";

export const TransSumary = props => {
  return (
    <React.Fragment>
      {props.type === "expense" ? (
        <p>
          Viewing {props.expenses.length}{" "}
          {props.expenses.length === 1 ? "expense" : "expenses"}, totalling{" "}
          {numeral(getTotal(props.expenses) / 100).format("$0,0.00")}
        </p>
      ) : (
        <p>
          Viewing {props.incomes.length}{" "}
          {props.incomes.length === 1 ? "income" : "incomes"}, totalling{" "}
          {numeral(getTotal(props.incomes) / 100).format("$0,0.00")}
        </p>
      )}
    </React.Fragment>
  );
};

//redux
const mapStateToProps = state => {
  return {
    expenses: selectVisible(state.expenses, state.filters),
    incomes: selectVisible(state.incomes, state.filters)
  };
};

export default connect(mapStateToProps)(TransSumary);
