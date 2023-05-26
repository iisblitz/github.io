import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Maintenance from "./pages/Maintenance";
import Studies from "./pages/Studies";
import Articles from "./pages/Articles"

function App() {
  return (
    <Router>
      <Routes className="root">
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/Work/:name' element={<Work/>}></Route>
        <Route path='/Project/:number' element={<Projects/>}></Route>
        <Route path='/Article/:number' element={<Articles/>}></Route>
        <Route path='/Study/:number' element={<Studies/>}></Route>
        <Route path='/Maintenance' element={<Maintenance/>}/>
      </Routes>
    </Router>
  );
}

export default App;
