import React, { Component } from "react";
import { Link } from "react-router-dom";
import SavingList from "./savingList";
import ListFilters from "../common/listFilters";
import TransSumary from "../common/transSumary";

class LoadSaving extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Savings List</h1>
        <ListFilters />
        <TransSumary type={"saving"} />
        <SavingList />
        <Link to="/createsav">Add saving</Link>
      </React.Fragment>
    );
  }
}

export default LoadSaving;
