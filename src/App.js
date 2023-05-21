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
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/Work/:id' element={<Work/>}></Route>
        <Route path='/Project/:id' element={<Projects/>}></Route>
        <Route path='/Maintenance' element={<Maintenance/>}/>
      </Routes>
    </Router>
  );
}

export default App;
