import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = props => {
  return (
    <React.Fragment>
      {props.expenses.map(obj => (
        <div key={obj.id}>
          <Link to={`/edit/${obj.id}`}>
            <h3>{obj.description}</h3>
          </Link>
          <ul>
            <li>{numeral(obj.amount / 100).format("$0,0.00")}</li>
            <li>{moment(obj.createdAt).format("MMMM Do, YYYY")}</li>
          </ul>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ExpenseListItem;
