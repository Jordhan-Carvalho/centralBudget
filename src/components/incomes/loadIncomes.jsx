import React, { Component } from "react";
import { Link } from "react-router-dom";
import IncomeList from "./incomeList";
import ListFilters from "../common/listFilters";
import TransSumary from "../common/transSumary";

class LoadIncome extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Incomes List</h1>
        <hr />
        <ListFilters />
        <TransSumary type={"income"} />
        <hr />
        <IncomeList />
        <hr />
        <Link to="/createinc">
          <button className="btn btn-dark">Add Income</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default LoadIncome;
