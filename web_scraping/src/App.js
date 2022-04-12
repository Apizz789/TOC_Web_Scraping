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
  const [loggedin,setLoggedin] = useState(false)
  const [user,setUser] = useState(users[0])
  const [page,setPage] = useState("Home")
  const [showLoginPopup,setShowLoginPopup] = useState(false)
  const [background,setBackground] = useState(false)
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
  

  const isLoggedIn =(username,password)=>{  
    const matched_username = users.find(user => user.username == username)
    const matched_password = users.find(user => user.password == password)
    const status = matched_username===matched_password
    {status? setUser(matched_username) : alert("Wrong username or password!")}
    {status? setLoggedin(true) : setLoggedin(false)}
    {status? setShowLoginPopup(false): setShowLoginPopup(true)}
    {status? setPopupBackground(false): setPopupBackground(true)}
    
  }

  const pageHandle =(page)=>{
    setPage(page)
  }

  
  const setPopupBackground = (val,type ="closed") => {
    if(type === "login" ){
      setShowLoginPopup(val)
    }
    else if (type === "product"){
      alert("show product popup")
    }
    else if(type ==="closed"){
      // alert("Close popup")
      setShowLoginPopup(val)
    }
    setBackground(val)
  }

  return (
    <div >
        {background && <div onClick={(e) => setPopupBackground(false)} class="black-bg-popup"/>}
        {!background && <Navbar user={user} showLoginPopup={showLoginPopup} setPopupBackground={setPopupBackground} 
                            loggedin = {loggedin} isLoggedIn={isLoggedIn} 
                            page={page} pageHandle = {pageHandle} header ={navbarHeader} 
                            search={search} showSearch={showSearch} searchResultHandle={searchResultHandle}
                            />}
        {showLoginPopup && <LoginPopup isLoggedIn={isLoggedIn} setLoggedin = {setLoggedin} />}
        {!showLoginPopup && (page=="Home" || page=="Search") && <Searchbox pageHandle={pageHandle} searchResultHandle={searchResultHandle}/>}
        {page=="Search" &&<Content content={{type:page,result: searchResult}}/>}
        {page=="Cart" && <Cart showSearch={showSearch}/>}
        {page=="Home" && <Homepage/>}
        
    </div>
  );
}

export default App;
