import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import { useState } from "react";
import NavBar from "./Components/Navbar/Navbar";
import CreateItems from "./Components/Create/CreateItems";

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
const App = () => {
  const [employees, setEmployees] = useState(Employees);
  const [isLoggined, setIsLoggined] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggined(true);
  };
  const logoutHandler = () => {
    setIsLoggined(false);
  };

  const addItemHandler = (employese) => {
    setEmployees((prevItems) => {
      return [...prevItems, employese];
    });
  };

  const deleteItemHandler = (itemId) => {
    setEmployees((prevItems) => {
      const updatedGoals = prevItems.filter((item) => item.id !== itemId);
      return updatedGoals;
    });
  };

  return (
    <div className="App">
      <header className="home-header">
        <nav className="home-header__nav">
          <NavBar onLogout={logoutHandler} />
        </nav>
      </header>
      <Routes>
        {isLoggined && (
          <Route
            exact
            path="/"
            element={
              <Home
                onEmployees={employees}
                onLogout={logoutHandler}
                onDeleteItem={deleteItemHandler}
              />
            }
          />
        )
        }
        <Route exact path="/signup" element={<Signup />} />
        {!isLoggined && (
          <Route
            exact
            path="/signin"
            element={<Login onLogin={loginHandler} />}
          />
        )}
        <Route
          path="/create"
          element={<CreateItems onAddItems={addItemHandler} />}
        />
      </Routes>
    </div>
  );
};

export default App;
