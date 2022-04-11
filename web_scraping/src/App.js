import logo from './logo.svg';
import './App.css';
import Searchbox from './components/Searchbox';
import Navbar from './components/Navbar';
import Content from './components/Content';
import React, { useState, useEffect } from 'react'

function App() {
  const [navbarHeader,setNavbarHeader] = useState("category")

  const changePage =(name)=>{
    setNavbarHeader(name)
  }
  
  return (
    <div className="App">
        <Navbar header ={navbarHeader}/>
        <Searchbox/>
        <Content/>
    </div>
  );
}

export default App;
