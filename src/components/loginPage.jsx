import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export class LoginPage extends Component {
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Central Budget</h1>
          <p>It's time to get your budget under control</p>
          <button className="btn btn-dark" onClick={this.props.startLogin}>
            {" "}
            Login{" "}
          </button>
        </div>
      </div>
    );
  }
}

// redux
const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
