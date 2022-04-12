import logo from './logo.svg';
import './App.css';
import Searchbox from './components/Contents/Home/Searchbox';
import Content from './components/Contents/Home/Content';
import Cart from './components/Contents/Products/Cart';
import Navbar from './components/Navbar/Navbar';
import React, { useState, useEffect } from 'react'
import users from './resources/user.dummy'
import Homepage from './components/Contents/Home/HomePage';

function App() {
  const [navbarHeader,setNavbarHeader] = useState("")
  const [search,serSearch] = useState(true)
  const [searchResult,setSearchResult] = useState("")
  const [onSearch,setOnSearch] = useState(false)
  const [loggedin,setLoggedin] = useState(false)
  const [user,setUser] = useState({ username: "anonymous",
                                    password: "123",
                                    name: "Guest",
                                    cart: null})
  const [page,setPage] = useState("Home")
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

  const isLoggedIn =(username,password)=>{  
    const status = users.find(user => [user.username,user.password] == [username,password])
    {status? setUser(status) :alert("Wrong username or password!")}
    {status? setLoggedin(true) : setLoggedin(false)}

  }

  const pageHandle =(page)=>{
    setPage(page)
  }

  return (
    <div className="App">
        <Navbar loggedin = {loggedin} isLoggedIn={isLoggedIn} pageHandle = {pageHandle} header ={navbarHeader} search={search} showSearch={showSearch} selectCategory={showSearchResult}/>
        {(page=="Home" || page=="Search") && <Searchbox isOnSearch={isOnSearch} showSearchResult={showSearchResult}/>}
        {page=="Search" &&<Content onSearch={onSearch} content={{type:page,result: searchResult}}/>}
        {page=="Cart" && <Cart showSearch={showSearch}/>}
        {page=="Home" && <Homepage/>}
        
    </div>
  );
}

export default App;
