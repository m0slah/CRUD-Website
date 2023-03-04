import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
function Home(props) {
  return (
    <Card>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.onEmployees.map((employee) => (
            <tr id={employee.id} key={employee.id}>
              <td>{employee.name}</td>
              <td>${employee.salary}</td>
              <td>
                <button
                  className={classes.btn}
                  onClick={() => props.onDeleteItem(employee.id)}
                >
                  Delete
                </button>
                <button
                  className={`${classes.btn } ${classes.editBtn}`}
                  onClick={() => props.onEdit(employee)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/create">
        <button className={`${classes.btn} ${classes.addEmpBtn}`}>
          Add New Employee
        </button>
      </Link>
    </Card>
  );
}

export default Home;
