import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export class LoginPage extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.startLogin}> Loggin </button>
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
