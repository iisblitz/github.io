import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/Detail/:name'></Route>
      </Routes>
    </Router>
  );
}

export default App;
