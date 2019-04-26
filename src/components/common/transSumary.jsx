import React, { Component } from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectVisible from "../../selectors/visibleTrans";
import getTotal from "../../selectors/transaction-total";

class TransSumary extends Component {
  state = {};

  renderTrans = type => {
    let trans;
    if (type === "expense") {
      trans = this.props.expenses;
    } else if (type === "income") {
      trans = this.props.incomes;
    } else if (type === "saving") {
      trans = this.props.savings;
    }
    return (
      <p>
        There's {trans.length} {trans.length === 1 ? type : `${type}s`},
        totalling {numeral(getTotal(trans) / 100).format("$0,0.00")}
      </p>
    );
  };

  render() {
    return <React.Fragment>{this.renderTrans(this.props.type)}</React.Fragment>;
  }
}

//redux
const mapStateToProps = state => {
  return {
    expenses: selectVisible(state.expenses, state.filters),
    incomes: selectVisible(state.incomes, state.filters),
    savings: selectVisible(state.savings, state.filters)
  };
};

export default connect(mapStateToProps)(TransSumary);
