import * as React from 'react'
import { Reset } from 'styled-reset'
import './App.css';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import {Routes, Route, Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Reset />
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/signup" element={<Onboarding/>}/>

      </Routes>
    </div>
  );
}

export default App;
