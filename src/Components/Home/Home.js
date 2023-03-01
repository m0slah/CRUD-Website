import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import HomeItem from "./HomeItem";
function Home(props) {
  const deleteItem = () => {
    props.onDelete(props.onEmployees);
  };
// console.log( employeeList)

  return (
    <div className={classes.home}>
        <ul>
        {props.onEmployees.map((employee) => 
          <div>
            <span>{employee.name}</span>
            <span>{employee.salary}</span>
          </div>
        )}
        </ul>
        <Link className="d-grid gap-2" to="/create">
          <button className="add-btn" size="lg">
            Add New Employee
          </button>
        </Link>
      </div>
  );
}

export default Home;
