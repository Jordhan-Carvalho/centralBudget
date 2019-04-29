import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export class NavBar extends Component {
  state = {
    selected: ""
  };
  render() {
    return (
      <React.Fragment>
        <div id="cont">
          <div id="menu-fixed">
            <a href="#cont">
              <i className="material-icons back">&#xE314;</i>
            </a>
            <a href="#menu-fixed">
              <div className="logo">
                <span />
                <p>CB</p>
              </div>
              <p className="pmenu">MENU</p>
            </a>
            <hr />
            <ul className="menu">
              <Link to="/dashboard">
                <li>
                  <i className="material-icons">&#xE88A;</i>
                  <p>Home</p>
                </li>
              </Link>
              <Link to="/incomes">
                <li>
                  <i className="material-icons"> add</i>
                  <p>Incomes</p>
                </li>
              </Link>
              <Link to="/expenses">
                <li>
                  <i className="material-icons">remove</i>
                  <p>Expenses</p>
                </li>
              </Link>
              <Link to="/savings">
                <li>
                  <i className="material-icons">attach_money</i>
                  <p>Savings</p>
                </li>
              </Link>
              <Link to="/help">
                <li>
                  <i className="material-icons">&#xE8B8;</i>
                  <p>Settings</p>
                </li>
              </Link>
              <li onClick={this.props.startLogout}>
                <i className="material-icons">desktop_access_disabled</i>
                <p>Logout</p>
              </li>
            </ul>
            <i className="material-icons info">&#xE88E;</i>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// redux

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(NavBar);
