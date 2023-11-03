
import React,{useEffect} from 'react';
import axios from 'axios';



const API = () => {
  useEffect(() => {
    axios.get('http://ceprj.gachon.ac.kr:60006/')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
}