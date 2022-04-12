import logo from './logo.svg';
import './App.css';
import Searchbox from './components/Contents/Home/Searchbox';
import Content from './components/Contents/Home/Content';
import Cart from './components/Contents/Products/Cart';
import Navbar from './components/Navbar/Navbar';
import React, { useState, useEffect } from 'react'
import users from './resources/user.dummy'
import Homepage from './components/Contents/Home/HomePage';
import LoginPopup from './components/Contents/Login/LoginPopup';

function App() {
  const [navbarHeader,setNavbarHeader] = useState("")
  const [search,serSearch] = useState(true)
  const [searchResult,setSearchResult] = useState("")
  const [onSearch,setOnSearch] = useState(false)
  const [loggedin,setLoggedin] = useState(false)
  const [user,setUser] = useState(users[0])
  const [page,setPage] = useState("Home")
  const [showLoginPopup,setShowLoginPopup] = useState(false)

  const updateHeader =(name)=>{
    setNavbarHeader(name)
  }

  const showSearch =(val)=>{
    serSearch(val)
  }

  const searchResultHandle =(val)=>{
    // alert(val)
    setSearchResult(val)
  }
  
  const isOnSearch =(val) =>{
    setOnSearch(val)
  }

  const isLoggedIn =(username,password)=>{  
    const status = users.find(user => [user.username,user.password] == [username,password])
    {status? setUser(status) :alert("Wrong username or password!")}
    {status? setLoggedin(true) : setLoggedin(false)}
    alert(username+" "+password)

  }

  const pageHandle =(page)=>{
    setPage(page)
  }

  return (
    <div className="App">
        <Navbar user={user} showLoginPopup={showLoginPopup} setShowLoginPopup={setShowLoginPopup} 
                            loggedin = {loggedin} isLoggedIn={isLoggedIn} 
                            page={page} pageHandle = {pageHandle} header ={navbarHeader} 
                            search={search} showSearch={showSearch} searchResultHandle={searchResultHandle}/>
        {showLoginPopup && <LoginPopup isLoggedIn={isLoggedIn} setLoggedin = {setLoggedin} />}
        {(page=="Home" || page=="Search") && <Searchbox pageHandle={pageHandle} searchResultHandle={searchResultHandle}/>}
        {page=="Search" &&<Content onSearch={onSearch} content={{type:page,result: searchResult}}/>}
        {page=="Cart" && <Cart showSearch={showSearch}/>}
        {page=="Home" && <Homepage/>}
        
    </div>
  );
}

export default App;
