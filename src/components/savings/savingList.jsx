import React from "react";
import { connect } from "react-redux";
import ListItem from "../common/listItem";
import selectVisible from "../../selectors/visibleTrans";

export const SavingList = props => {
  return (
    <div>
      {props.savings.length === 0 ? (
        <p>No savings</p>
      ) : (
        <ListItem type={"saving"} expenses={props.savings} />
      )}
    </div>
  );
};

// redux call
const mapStateToProps = state => {
  return {
    savings: selectVisible(state.savings, state.filters)
  };
};

export default connect(mapStateToProps)(SavingList);
