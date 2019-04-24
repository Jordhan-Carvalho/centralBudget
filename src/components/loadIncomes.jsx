import React, { Component } from "react";
import { Link } from "react-router-dom";
import IncomeList from "./incomeList";
import ListFilters from "./common/listFilters";
import TransSumary from "./common/transSumary";

class LoadIncome extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
        <TransSumary type={"income"} />
        <ListFilters />
        <IncomeList />
        <Link to="/createinc">Add income</Link>
      </React.Fragment>
    );
  }
}

export default LoadIncome;
