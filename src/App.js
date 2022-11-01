import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const users = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        return;
      }
      // logout
      dispatch(logout());
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!users ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route exact path="/profile" element={<ProfileScreen />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
