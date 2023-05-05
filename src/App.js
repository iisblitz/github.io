import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Work from "./pages/Work";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/portfolio' element={<LandingPage />}></Route>
        <Route path='/portfolio/:Work' element={<Work />}></Route>
        <Route path='/portfolio/:Work/:Projects' element={<Projects />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
