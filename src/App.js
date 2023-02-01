import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import { useState, useEffect } from "react";
import NavBar from "./Components/Navbar/Navbar";
import CreateItems from "./Components/Create/CreateItems";

const Employees = [];
const App = () => {
  const [employees, setEmployees] = useState(Employees);
  const [isLoggined, setIsLoggined] = useState(false);

  useEffect(() => {
    const storedUserLoggedinIformation = localStorage.getItem("isLoggedin");

    if (storedUserLoggedinIformation === "1") {
      setIsLoggined(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn","1")
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
