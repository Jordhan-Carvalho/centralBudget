import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../common/form";
import { startEditSaving, startRemoveSaving } from "../../actions/savings";

export class EditSavingPage extends Component {
  onRemove = () => {
    this.props.startRemoveSaving(this.props.saving);
    this.props.history.push("/savings");
  };

  onSubmit = ({ description, note, amount, createdAt }) => {
    const saving = { description, note, amount, createdAt };
    this.props.startEditSaving(this.props.saving.id, saving);
    this.props.history.push("/savings");
  };

  render() {
    return (
      <div className="form-group">
        <h1>Edit {this.props.saving.description}</h1>
        <div className="form-group">
          <Form
            expense={this.props.saving}
            onSubmit={this.onSubmit}
            isIncome={false}
          />
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
    startEditSaving: (savingID, saving) =>
      dispatch(startEditSaving(savingID, saving)),
    startRemoveSaving: saving => dispatch(startRemoveSaving(saving))
  };
};

const mapStateToProps = (state, props) => {
  return {
    saving: state.savings.find(saving => {
      return saving.id === props.match.params.id;
    })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSavingPage);
