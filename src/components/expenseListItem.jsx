import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = props => {
  return (
    <React.Fragment>
      {props.expenses.map(obj => (
        <div key={obj.id}>
          <Link to={`/edit/${obj.id}`}>
            <h3>{obj.description}</h3>
          </Link>
          <ul>
            <li>{obj.amount}</li>
            <li>{obj.createdAt}</li>
          </ul>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ExpenseListItem;
