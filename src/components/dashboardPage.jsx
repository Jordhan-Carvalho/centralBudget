import React, { Component } from "react";
import TransChart from "./transChart";
import SavingsChart from "./savingsChart";
import ListFilters from "./common/listFilters";
import TransSumary from "./common/transSumary";

class DashboardPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <div className="col-12 boxdash">
            <h3>Expenses and Incomes Chart</h3>
            <TransChart height={200} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 boxdash">
            <h3>Savings Chart</h3>
            <SavingsChart height={200} />
          </div>
        </div>

        <div className="row">
          <div className="col-12 boxdash">
            <ListFilters />
            <hr />
            <TransSumary type={"expense"} />
            <TransSumary type={"income"} />
            <TransSumary type={"saving"} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardPage;
