import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onDescChange = e => {
    const description = e.target.value;
    this.setState({ description });
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState({ note });
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      const error = "Please provide descp and amount";
      this.setState({ error });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              className="form-control"
              type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={this.onDescChange}
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              className="form-control"
              type="text"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
          </div>
          <div className="form-group">
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              className="form-control"
              placeholder="Add a note for your expense"
              value={this.state.note}
              onChange={this.onNoteChange}
            />
          </div>
          <button className="btn btn-dark">Add Transaction</button>
        </form>
      </div>
    );
  }
}

export default Form;
