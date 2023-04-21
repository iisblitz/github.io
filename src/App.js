import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import BOK from './pages/BOK'
import Courses from './pages/Courses'
import LandingPage from './pages/LandingPage'
import Experiences from './pages/Experiences'
import Hobbies from './pages/Hobbies'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/BOK' element={<BOK/>}></Route>
        <Route path='/Courses' element={<Courses/>}></Route>
        <Route path='/Experiences' element={<Experiences/>}></Route>
        <Route path='/Hobbies'element={<Hobbies/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
