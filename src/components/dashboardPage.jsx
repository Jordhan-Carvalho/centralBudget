import React, { Component } from "react";
import LoadExpenses from "./loadExpenses";
import LoadIncomes from "./loadIncomes";

class DashboardPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-6">
            <LoadExpenses />
          </div>

          <div className="col-6">
            <LoadIncomes />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 boxdash">
            <LoadExpenses />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardPage;
