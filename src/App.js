import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Periodic from "./components/Periodic";
import Lanthanoids from "./components/Lanthanoids";
import Actinoids from "./components/Actionoids";
import JSBackground from "./components/JSBackground";
import Trends from "./components/Trends";
import NavBar from "./components/Navbar";
import Quiz from "./components/Quiz";
import { quizData } from "./components/PeriodicTable";
import Login from "./Login/Login";


function App() {
  return (
    <div className="flex flex-col" style={{ position: "relative", zIndex: 0 }}>
      <Router>
        <JSBackground />
        <NavBar />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Periodic />} />
            <Route path="/home" element={<Periodic />} />
            <Route path="/quiz" element={<Quiz quizData={quizData}  />} />
            <Route path="/lanthanoids" element={<Lanthanoids />} />
            <Route path="/actinoids" element={<Actinoids />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
