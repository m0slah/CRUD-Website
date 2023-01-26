import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

const CreateForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [eneteredSalary,setEnteredSalary]=useState("")

  const changeHandler = (name, salary
  ) => {
    setEnteredName(name.target.value)
    setEnteredSalary(salary.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const ItemData = {
      name: enteredName,
      salary:eneteredSalary,
    };
    props.onSaveItemsDataHandler(ItemData);
    setEnteredName("")
    setEnteredSalary("")

  };

  return (
    <div>
      <Form
        onSubmit={submitHandler}
        className="d-grid gap-2"
        style={{ margin: "15rem" }}
      >
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="name"
            placeholder="Enter Name"
            required
            value={enteredName}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="number"
            placeholder="Enter Salary"
            required
            value={eneteredSalary}
            onChange={(event) => {
              setEnteredSalary(event.target.value);
            }}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default CreateForm;
