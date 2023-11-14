import React,{useEffect, useState} from 'react'
import { Reset } from 'styled-reset'
import './App.css';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import Main from './pages/Main';
import MyPage from './pages/Mypage';
import Header from './components/Header';
import {Routes, Route} from "react-router-dom"
import MyChatbot from './pages/Chatbot';
import { createGlobalStyle } from 'styled-components';
import Guide from './pages/Guide';
import SignIn from './pages/SignIn';
import RealityList from "./pages/RealityList"
import Details from './pages/Details';
import Carousel from 'react-material-ui-carousel';


const serverURL ="http://ceprj.gachon.ac.kr:60006"

function App() {
  
  
  const GlobalStyles = createGlobalStyle``

  return (
    
    <div className="App">
      <Reset/>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="//login/oauth2/code/user/sign-up" element={<Onboarding/>}/>
        <Route path="/main" element={<><Header/><Main/></>}/>
        <Route path="/mypage" element={<><Header/><MyPage/></>}/>
        <Route path="/chatbot" element={<MyChatbot/>}/>
        <Route path="/guide" element={<><Header/><Guide/></>}/>
        <Route path="/reality-list" element={<><Header/><RealityList/></>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/details' element={<><Header/><Details/></>}/>
        <Route path='/carousel' element={<><Header/><Carousel/></>}/>
      </Routes>
      
    </div>
    
    
  );
}

export default App;
