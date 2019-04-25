import React, { Component } from "react";
import { Link } from "react-router-dom";
import IncomeList from "./incomeList";
import TransSumary from "./common/transSumary";

class LoadIncome extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Incomes List</h1>
        <TransSumary type={"income"} />
        <IncomeList />
        <Link to="/createinc">Add income</Link>
      </React.Fragment>
    );
  }
}

export default LoadIncome;
