import React from 'react'
import { Reset } from 'styled-reset'
import './App.css';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import Main from './pages/Main';
import Header from './components/Header';
import {Routes, Route} from "react-router-dom"
import MyChatbot from './pages/Chatbot';
import { createGlobalStyle } from 'styled-components';
import Guide from './pages/Guide';
import SignIn from './pages/SignIn';



function App() {
  
  
  const GlobalStyles = createGlobalStyle``

  return (
    
    <div className="App">
      <Reset/>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="//login/oauth2/code/user/sign-up" element={<Onboarding/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path="/main" element={<><Header/><Main/></>}/>
        <Route path="/chatbot" element={<MyChatbot/>}/>
        <Route path="/guide" element={<><Header/><Guide/></>}/>

      </Routes>
      
    </div>
    
    
  );
}

export default App;
