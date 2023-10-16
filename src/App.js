import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Maintenance from "./pages/Maintenance";
import Studies from "./pages/Studies";
import Articles from "./pages/Articles"
import {HelmetProvider} from 'react-helmet-async'

function App() {
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>
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
    </HelmetProvider>

  );
}

export default App;
