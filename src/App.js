import "./App.less";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/maincontainer" element={<MainContainer />} />
          <Route path="/dashboard" element={<MainContainer />} />
          <Route path="/widgets" element={<MainContainer />} />
          <Route path="/cards" element={<MainContainer />} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
