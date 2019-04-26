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
        <hr />
        <ListFilters />
        <TransSumary type={"saving"} />
        <hr />
        <SavingList />
        <hr />
        <Link to="/createsav">
          <button className="btn btn-dark">Add Saving</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default LoadSaving;
