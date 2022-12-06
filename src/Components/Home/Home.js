import React from "react";
import "./Home.css";
import { Button, Table } from "react-bootstrap";

function Home(props) {
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
            {props.items && props.items.length > 0
              ? props.items.map((item) => {
                  return (
                    <tr
                      key={item.id}
                      id={item.id}
                      onDelete={props.onDeleteItemHandler}
                    >
                      <td>{item.name}</td>
                      <td>{item.salary}</td>
                      <td>
                        <Button
                          className="mx-3"
                        >
                          Delete
                        </Button>
                        &nbsp;
                        <Button onClick={() => alert(item.id)}>Edit</Button>
                      </td>
                    </tr>
                  );
                })
              : "There is no Data Available"}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Home;
