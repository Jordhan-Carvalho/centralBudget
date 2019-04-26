import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../common/form";
import { startAddSaving } from "../../actions/savings";

export class AddSavingPage extends Component {
  onSubmit = saving => {
    this.props.startAddSaving(saving);
    this.props.history.push("/savings");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Add Saving</h1>
        <Form onSubmit={this.onSubmit} />
      </React.Fragment>
    );
  }
}

// to simplify props.dispatch(addExpense(expense)) to props.onSubmit(expense)
const mapDispatchToProps = dispatch => {
  return {
    startAddSaving: saving => dispatch(startAddSaving(saving))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddSavingPage);
