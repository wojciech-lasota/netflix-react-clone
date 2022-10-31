import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { auth } from "./firebase";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";

function App() {
  const users = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        return;
      }
      // logout
    });
    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <Router>
        {!users ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
