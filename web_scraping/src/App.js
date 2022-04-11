import logo from './logo.svg';
import './App.css';
import Searchbox from './components/Searchbox';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Cart from './components/Cart'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowDown, faArrowDown19, faArrowDownShortWide, faArrowDownWideShort, faArrowsV, faArrowTrendDown, faCaretDown, faDroplet, faExclamationTriangle, faExpand, faExpandArrowsAlt, faTriangleCircleSquare, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [navbarHeader,setNavbarHeader] = useState("category")
  const [search,serSearch] = useState(true);
  const [searchResult,setSearchResult] = useState("");
  const [onSearch,setOnSearch] = useState(false);

  const changePage =(name)=>{
    setNavbarHeader(name)
  }

  const showSearch =(val)=>{
    serSearch(val)
  }

  const showSearchResult =(val)=>{
    setSearchResult(val)
  }
  
  const isOnSearch =(val) =>{
    setOnSearch(val)
  }

  return (
    <div className="App">
        <Navbar header ={navbarHeader} search={search} showSearch={showSearch}/>
        {search && <Searchbox isOnSearch={isOnSearch} setSearchResult={showSearchResult}/>}
        {search &&<Content onSearch={onSearch} content={searchResult}/>}
        {!search && <Cart showSearch={showSearch}/>}
        
    </div>
  );
}

export default App;
