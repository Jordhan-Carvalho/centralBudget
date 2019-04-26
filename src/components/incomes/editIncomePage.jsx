import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../common/form";
import { startEditIncome, startRemoveIncome } from "../../actions/incomes";

export class EditIncomePage extends Component {
  onRemove = () => {
    this.props.startRemoveIncome(this.props.income);
    this.props.history.push("/incomes");
  };

  onSubmit = ({ description, note, amount, createdAt }) => {
    const income = { description, note, amount, createdAt };
    this.props.startEditIncome(this.props.income.id, income);
    this.props.history.push("/incomes");
  };

  render() {
    return (
      <div className="form-group">
        <h1>Edit {this.props.income.description}</h1>
        <div className="form-group">
          <Form expense={this.props.income} onSubmit={this.onSubmit} />
        </div>
        <div className="form-group">
          <button className="btn btn-danger" onClick={this.onRemove}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}

// maps redux

const mapDispatchToProps = dispatch => {
  return {
    startEditIncome: (incomeID, income) =>
      dispatch(startEditIncome(incomeID, income)),
    startRemoveIncome: income => dispatch(startRemoveIncome(income))
  };
};

const mapStateToProps = (state, props) => {
  return {
    income: state.incomes.find(income => {
      return income.id === props.match.params.id;
    })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditIncomePage);
