import logo from './logo.svg';
import './App.css';
import Searchbox from './components/Contents/Home/Searchbox';
import Content from './components/Contents/Home/Content';
import Cart from './components/Contents/Products/Cart';
import Navbar from './components/Navbar/Navbar';
import React, { useState, useEffect } from 'react'

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
    alert(val)
    setSearchResult(val)
  }
  
  const isOnSearch =(val) =>{
    setOnSearch(val)
  }

  return (
    <div className="App">
        <Navbar header ={navbarHeader} search={search} showSearch={showSearch} selectCategory={showSearchResult}/>
        {search && <Searchbox isOnSearch={isOnSearch} setSearchResult={showSearchResult}/>}
        show{showSearchResult}
        {search &&<Content onSearch={onSearch} content={searchResult}/>}
        {!search && <Cart showSearch={showSearch}/>}
        
    </div>
  );
}

export default App;
