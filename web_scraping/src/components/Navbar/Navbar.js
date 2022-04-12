import '../../css/navbar.style.css'
import { faCartShopping,faCaretDown,faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../resources/icon.png'
import React, { useState, useEffect } from 'react'
import CategoryDropdown from './CategoryDropdown';

export default function Navbar(props) {
  const [toggle,setToggle] = useState(false)
  
  const toggleHandle = () =>{
    setToggle(!toggle)
    alert("set to "+!toggle)
  }

  const selectCategory =(destination)=>{
    props.pageHandle("Search")
    props.showSearchResult(destination)
    toggleHandle()
  }

  return (
    <div class='Navbar'>
        <div class="hor-center">

        {props.page == "Home" && !toggle && 
        <div class="home-navbar nav-text-blue">
          <div class="test" onClick={(e) => selectCategory("Home")}>Home</div>
        </div>}
        {(props.page == "Search"  ||(props.page =="Home" && toggle==true)) &&
        <div class="home-navbar nav-text-white">
          <div onClick={(e) => selectCategory("Home")}>Home</div>
        </div>}

        <div class="category-toggle">
          {toggle && <div class= "nav-text-blue">Category</div>}
          {!toggle && <div class= "nav-text-white">Category</div>}
            {!toggle && <FontAwesomeIcon icon={faCaretDown} class="toggle-icon" onClick={(e) => toggleHandle()}/>}
            {toggle && <FontAwesomeIcon icon={faCaretUp} class="toggle-icon" onClick={(e) => toggleHandle()}/>}
            {toggle && <CategoryDropdown selectCategory={selectCategory}/>}
        </div>

        <div> 
            {props.header}
        </div>

        <img src={logo} class="logo"/>
        <div class="header">azala</div>

        <div class="cartlogo-box"  onClick={(e) => props.showSearch(!props.search)}><FontAwesomeIcon icon={faCartShopping} class="cartIcon"/></div>
      </div>
    </div>
  )
}
