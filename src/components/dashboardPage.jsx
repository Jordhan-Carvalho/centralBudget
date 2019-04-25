import React, { Component } from "react";
import LoadExpenses from "./loadExpenses";
import LoadIncomes from "./loadIncomes";
import TransChart from "./transChart";
import ListFilters from "./common/listFilters";

class DashboardPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <div className="col-12 boxdash">
            <TransChart height={200} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 boxdash">
            <ListFilters />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <LoadExpenses />
          </div>

          <div className="col-6">
            <LoadIncomes />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardPage;
