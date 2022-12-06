import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import { useState } from "react";

const Employees = [
  {
    id: 1,
    name: "muhammed",
    salary: 2000,
  },
  {
    id: 2,
    name: "Ali",
    salary: 1500,
  },
  {
    id: 3,
    name: "Aland",
    salary: 1000,
  },
];
function App() {
  const [employees, setEmployees] = useState(Employees);

  const deleteItemHandler = (goalId) => {
    setEmployees((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  return (
    <div className="App">
      <header className="home-header">
        <nav className="home-header__nav">
          <ul>
            <li>
              <Link className="nav-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/signup">
                Signup
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/signin">
                Signin
              </Link>
            </li>
          </ul>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  items={employees}
                  onDeleteItemHandler={deleteItemHandler}
                />
              }
            />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/signin" element={<Login />} />
          </Routes>
        </nav>
      </header>
    </div>
  );
}

export default App;
