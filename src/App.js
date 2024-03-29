import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import { useState, useEffect } from "react";
import NavBar from "./Components/Navbar/Navbar";
import CreateItems from "./Components/Create/CreateItems";

const Employees = [
  { id: 1, name: "mo", salary: 1500 },
  { id: 2, name: "ali", salary: 1000 },
];
const App = () => {
  const [employees, setEmployees] = useState(Employees);
  const [isLoggined, setIsLoggined] = useState(false);

  useEffect(() => {
    const storedUserLoggedinIformation = localStorage.getItem("isLoggedin");

    if (storedUserLoggedinIformation === "1") {
      setIsLoggined(true);
    }
  }, [isLoggined]);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggined(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
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

  function editHandler(employee) {
    const updatedName = prompt("Enter the updated name:");
    const updatedSalary = prompt("Enter the updated salary:");
  
    const updatedEmployee = {
      ...employee,
      name: updatedName,
      salary: updatedSalary
    };
  
    const index = employees.findIndex((emp) => emp.id === employee.id);
  
    const updatedEmployees = [...employees];
    updatedEmployees[index] = updatedEmployee;
  
    setEmployees(updatedEmployees);
  }
  

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
                onEdit={editHandler}
              />
            }
          />
        )}
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
