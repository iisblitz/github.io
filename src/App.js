import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Maintenance from "./pages/Maintenance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/portfolio/' element={<LandingPage />}></Route>
        <Route path='/portfolio/Work/:id' element={<Work />}></Route>
        <Route path='/portfolio/Project/:id' element={<Projects />}></Route>
        <Route path='/portfolio/Maintenance' element={<Maintenance/>}/>
      </Routes>
    </Router>
  );
}

export default App;
