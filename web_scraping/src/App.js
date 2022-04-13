import logo from './logo.svg';
import './App.css';
import Searchbox from './components/Contents/Home/Searchbox';
import Content from './components/Contents/Home/Content';
import Cart from './components/Contents/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import React, { useState, useEffect,useCallback } from 'react'
import users from './resources/user.dummy'
import Homepage from './components/Contents/Home/HomePage';
import LoginPopup from './components/Contents/Login/LoginPopup';
import Demo from './components/Contents/Cart/Demo';
import Order from './components/Contents/Cart/Order';
import Payment from './components/Contents/Cart/Payment';
import Reciept from './components/Contents/Cart/Reciept';
import Footer from './components/Navbar/Footer';


let s;

function App() {
  const [navbarHeader,setNavbarHeader] = useState("")
  const [search,serSearch] = useState(true)
  const [searchResult,setSearchResult] = useState("")
  const [loggedin,setLoggedin] = useState(false)
  const [user,setUser] = useState(users[0])
  const [page,setPage] = useState("Home")
  const [showLoginPopup,setShowLoginPopup] = useState(false)
  const [background,setBackground] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [lastClick, setLastClick] = useState(false)

  const toggleHandle = () =>  {
    if (toggle == false) {
      setLastClick(true)
    }
    setToggle(!toggle)
  }
  

  const selectCategory = (destination) => {
    if (destination !== "Home") {
      pageHandle("Search")
    }
    else if (destination === "Home") {
      pageHandle("Home")
      setLastClick(false)
    }
    searchResultHandle(destination)
    if(toggle) toggleHandle()
  }
  const updateHeader =(name)=>{
    setNavbarHeader(name)
  }

  const showSearch =(val)=>{
    serSearch(val)
  }

  const searchResultHandle =(val)=>{
    // alert(val)
    (val!=="Home")? updateHeader(val):updateHeader("")
    setSearchResult(val)
  }
  

  const isLoggedIn =(username,password)=>{  
    const matched_username = users.find(user => user.username == username)
    const matched_password = users.find(user => user.password == password)
    const status = (matched_username===matched_password)&&(matched_username!==undefined&&matched_password!==undefined)

    {status? setUser(matched_username) : alert("Wrong username or password!")}
    {status? setLoggedin(true) : setLoggedin(false)}  
    {status? setShowLoginPopup(false): setShowLoginPopup(true)}
    {status? setPopupBackground(false): setPopupBackground(true)}
  
  }

  const pageHandle =(page)=>{
    page=="Home"?setNavbarHeader(""):setNavbarHeader(navbarHeader)
    setPage(page)
  }

  const Logout =() =>{
    setUser(users[0])
    setLoggedin(false)
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
                            loggedin = {loggedin} isLoggedIn={isLoggedIn} Logout={Logout} updateHeader ={updateHeader}
                            page={page} pageHandle = {pageHandle} header ={navbarHeader} selectCategory={selectCategory}
                            toggleHandle={toggleHandle} lastClick={lastClick} toggle={toggle}
                            search={search} showSearch={showSearch} searchResultHandle={searchResultHandle}
                            />}
        <div onClick={(r) => setToggle()}>
        {showLoginPopup && <LoginPopup isLoggedIn={isLoggedIn} setLoggedin = {setLoggedin} />}
        {!showLoginPopup && (page=="Home" || page=="Search") && <Searchbox pageHandle={pageHandle}searchResultHandle={searchResultHandle} onClick={(e)=>setToggle(false)}/>}
        {page=="Search" &&<Content content={{type:page,result: searchResult}} />}
        {page=="Cart" && <Cart user={user} showSearch={showSearch} pageHandle={pageHandle}/>}
        {page=="Demo" && <Demo  header={navbarHeader}  user={user} showSearch={showSearch} pageHandle={pageHandle}/>}
        {page=="Order" && <Order  user={user} showSearch={showSearch} pageHandle={pageHandle}/>}
        {page=="Reciept" && <Reciept user={user}  showSearch={showSearch} pageHandle={pageHandle}/>}
        {page=="Payment" && <Payment onClick={(e)=>setLastClick(false)} user={user} showSearch={showSearch} pageHandle={pageHandle}/>}
        {page=="Home" && <Homepage/>}
        </div>
        {!showLoginPopup && <Footer/>}
    </div>
  );
}

export default App;
