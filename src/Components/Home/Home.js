import React from "react";
import "./Home.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeItem from "./HomeItem";
function Home(props) {
  const deleteItem = () => {
    props.onDelete(props.onEmployees);
  };

  return (
    <div className="home">
      <div className="container-sm">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.onEmployees && props.onEmployees.length > 0
              ? props.onEmployees.map((empleee) => {
                  return (
                    <HomeItem
                      key={empleee.id}
                      id={empleee.id}
                      onDelete={props.onDeleteItem}
                    >
                      <td>{empleee.name}</td>
                      <td>{empleee.salary}</td>
                      <td>
                        <Button
                          className="bg-danger border-danger"
                          onClick={deleteItem}
                        >
                          Delete
                        </Button>
                      </td>
                    </HomeItem>
                  );
                })
              : "There is no Data Available"}
          </tbody>
        </Table>
        <Link className="d-grid gap-2" to="/create">
          <button className="add-btn" size="lg">
            Add New Employee
          </button>
        </Link>
        {/* {props.onEmployees.map((employee) => (
          <HomeItem
            id={employee.id}
            key={employee.id}
            onDelete={props.onDeleteItem}
          >
            {employee.name}
          </HomeItem> 
        ))} */}
      </div>
    </div>
  );
}

export default Home;
