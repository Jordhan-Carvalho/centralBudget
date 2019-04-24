import React from "react";
import { connect } from "react-redux";
import ListItem from "./common/listItem";
import selectVisible from "../selectors/visibleTrans";

export const IncomeList = props => {
  return (
    <div>
      <h1>Income List</h1>
      {props.incomes.length === 0 ? (
        <p>No incomes</p>
      ) : (
        <ListItem type={"income"} expenses={props.incomes} />
      )}
    </div>
  );
};

// redux call
const mapStateToProps = state => {
  return {
    incomes: selectVisible(state.incomes, state.filters)
  };
};

export default connect(mapStateToProps)(IncomeList);
