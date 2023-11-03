import React,{useEffect} from 'react'
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
import axios from 'axios';


function App() {
  useEffect(() => {
    axios.get('http://ceprj.gachon.ac.kr:60006/')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const GlobalStyles = createGlobalStyle``
  return (
    
    <div className="App">
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Onboarding/>}/>
        <Route path="/main" element={<><Header/><Main/></>}/>
        <Route path="/mypage" element={<><Header/><MyPage/></>}/>
        <Route path="/chatbot" element={<MyChatbot/>}/>
        <Route path="/guide" element={<><Header/><Guide/></>}/>
           
      </Routes>
      
    </div>
    
    
  );
}

export default App;
