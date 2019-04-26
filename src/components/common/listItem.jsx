import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ListItem = props => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Amount</th>
          <th scope="col">Note</th>
          <th scope="col">Date</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {props.expenses.map(obj => (
          <tr key={obj.id}>
            <td>{obj.description}</td>

            <td>{numeral(obj.amount / 100).format("$0,0.00")}</td>
            <td>{obj.note}</td>
            <td>{moment(obj.createdAt).format("MMMM Do, YYYY")}</td>

            <td>
              <Link to={`/edit/${props.type}/${obj.id}`}>Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListItem;
