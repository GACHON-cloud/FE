import * as React from 'react'
import { Reset } from 'styled-reset'
import './App.css';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import Main from './pages/Main';
import MyPage from './pages/Mypage';
import Header from './components/Header';
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Onboarding/>}/>
        <Route path="/main" element={<><Header/><Main/></>}/>
        <Route path="/mypage" element={<><Header/><MyPage/></>}/>
      </Routes>
    </div>
    
  );
}

export default App;
