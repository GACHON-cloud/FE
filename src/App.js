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
import axios from 'axios';
import RealityList from "./pages/RealityList"


const serverURL ="http://ceprj.gachon.ac.kr:60006"

function App() {
  
  
  const GlobalStyles = createGlobalStyle``

  // const [hello, setHello] = useState('')

  //   useEffect(() => {
  //       axios.get('/api/hello')
  //       .then(response => setHello(response.data))
  //       .catch(error => console.log(error))
  //   }, []);

  //   return (
  //       <div>
  //           백엔드에서 가져온 데이터입니다 : {hello}
  //       </div>
  //   );
  return (
    
    <div className="App">
      <Reset/>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Onboarding/>}/>
        <Route path="/main" element={<><Header/><Main/></>}/>
        <Route path="/mypage" element={<><Header/><MyPage/></>}/>
        <Route path="/chatbot" element={<MyChatbot/>}/>
        <Route path="/guide" element={<><Header/><Guide/></>}/>
        <Route path="/reality-list" element={<><Header/><RealityList/></>}/>
      </Routes>
      
    </div>
    
    
  );
}

export default App;
