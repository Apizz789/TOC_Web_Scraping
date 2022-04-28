import logo from './logo.svg';
import './App.css';
import Searchbox from './components/Contents/Home/Searchbox';
import Content from './components/Contents/Home/Content';
import Cart from './components/Contents/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import React, { useState, useEffect, useCallback } from 'react'
import users from './resources/user.dummy'
import Homepage from './components/Contents/Home/HomePage';
import LoginPopup from './components/Contents/Login/LoginPopup';
import Demo from './components/Contents/Cart/Demo';
import Order from './components/Contents/Cart/Order';
import Payment from './components/Contents/Cart/Payment';
import Reciept from './components/Contents/Cart/Reciept';
import Footer from './components/Navbar/Footer';
import Spinlucky from './components/Contents/Cart/Spinlucky';
import ContactUs from './components/Navbar/ContactUs';

let s;

function App() {
  const [navbarHeader, setNavbarHeader] = useState("")
  const [search, serSearch] = useState(true)
  const [searchResult, setSearchResult] = useState("Home")
  const [loggedin, setLoggedin] = useState(false)
  const [user, setUser] = useState(users[0])
  const [page, setPage] = useState("Home")
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [background, setBackground] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [lastClick, setLastClick] = useState(false)
  const [discount, setdiscount] = useState(false)
  const [kCart, setKCart] = useState({
    name: "Koon K's Cart",
    products: [],
    totalPrice: 0,
    discount: 0,
    deliveryFee: 40,
  })

  const clearCart = (val) => {
    val == "Complete" ? alert("Cart complete!"):alert("Cart clear!")
    setKCart({
      name: "Koon K's Cart",
      products: [],
      totalPrice: 0,
      discount: 0,
      deliveryFee: 40,
    })
    pageHandle("Home", "Home")
  }
  const [, forceRender] = useState({});
  const addProduct = (product) => {
    const product_shallow = {
      id: kCart.products.length + 1,
      name: product.name,
      price: product.price,
      img: product.img,
      category: product.category,
      qauntity: 1,
    }
    const shallow_KCart = kCart
    shallow_KCart.products.push(product_shallow)
    // alert(parseFloat(product_shallow.price.slice(1, product_shallow.price.length)))
    shallow_KCart.totalPrice = shallow_KCart.totalPrice + parseFloat(product_shallow.price.slice(1, product_shallow.price.length))
    setKCart(shallow_KCart)
    forceRender({});
  }

  const toggleHandle = () => {
    // alert(toggle)
    if (toggle === false) {
      setLastClick(true)
    }
    setToggle(!toggle)
  }

  const disscounting = (discount) => {
    // alert(discount);

  }
  const selectCategory = (destination) => {
    setSearchResult(destination)
    pageHandle("Home", "Search")
    if (toggle) toggleHandle()
  }
  const updateHeader = (name) => {
    setNavbarHeader(name)
  }

  const showSearch = (val) => {
    serSearch(val)
  }

  const searchResultHandle = (val) => {
    // alert(val)
    (val !== "Home") ? updateHeader(val) : updateHeader("")
    setSearchResult(val)
  }


  const isLoggedIn = (username, password) => {
    const matched_username = users.find(user => user.username == username)
    const matched_password = users.find(user => user.password == password)
    const status = (matched_username === matched_password) && (matched_username !== undefined && matched_password !== undefined)

    { status ? setUser(matched_username) : alert("Wrong username or password!") }
    { status ? setLoggedin(true) : setLoggedin(false) }
    { status ? setShowLoginPopup(false) : setShowLoginPopup(true) }
    { status ? setPopupBackground(false) : setPopupBackground(true) }

  }

  const pageHandle = (prev = "Home", input_page) => {
    // alert(prev)
    // alert(input_page)
    // alert(page)
    input_page == "Home" ? setNavbarHeader("") : setNavbarHeader(navbarHeader)
    input_page == "Home" ? setLastClick(false) : setLastClick(true)

    if (input_page == "Home") setPrevPage("Home")
    if (input_page == "Search") setPrevPage("Home")
    if (input_page == "Cart" && page == "Home") {
      setPrevPage("Home")
    }
    if (input_page == "Cart" && page == "Search") {
      setPrevPage("Search")
    }
    if (input_page == "Order") setPrevPage("Cart")

    if (input_page == "Spinlucky") setPrevPage("Order")
    if (input_page == "Payment") setPrevPage("Spinlucky")

    if (input_page == "Reciept") setPrevPage("Payment")

    if (input_page == "Compare" && page == "Payment") {
      setPrevPage("Home")
    }

    if (input_page == "Spinlucky") setPrevPage("Order")

    if (input_page == "Spinlucky" && page == "Spinlucky") {
      setPrevPage("Payment")
    }

    if (input_page == "ContactUs"){ 
      // alert("set")
      setPrevPage("Home")
    } 

    if (input_page == "Cart") setPrevPage("Home")
    setPage(input_page)

    // if(input_page=="Compare" && page=="Search"){
    //   setPrevPage("Search")
    // }
  }

  const Logout = () => {
    setUser(users[0])
    setLoggedin(false)
  }
  const [prevPage, setPrevPage] = useState("")


  const setPopupBackground = (val, type = "closed") => {
    if (type === "login") {
      setShowLoginPopup(val)
    }
    else if (type === "product") {
      alert("show product popup")
    }
    else if (type === "closed") {
      // alert("Close popup")
      setShowLoginPopup(val)
    }
    setBackground(val)
  }

  return (
    <div class="app-background">
      {background && <div onClick={(e) => setPopupBackground(false)} class="black-bg-popup" />}

      {!background && <Navbar user={user} showLoginPopup={showLoginPopup} setPopupBackground={setPopupBackground}
        loggedin={loggedin} isLoggedIn={isLoggedIn} Logout={Logout} updateHeader={updateHeader}
        page={page} pageHandle={pageHandle} header={navbarHeader} selectCategory={selectCategory}
        toggleHandle={toggleHandle} lastClick={lastClick} toggle={toggle} prevPage={prevPage}
        search={search} showSearch={showSearch} searchResultHandle={searchResultHandle}
      />}
      <div onClick={(r) => setToggle()}>
        {showLoginPopup && <LoginPopup isLoggedIn={isLoggedIn} setLoggedin={setLoggedin} setPopupBackground={setPopupBackground} />}
        {!showLoginPopup && (page == "Home" || page == "Search") && <Searchbox searchResult={searchResult} pageHandle={pageHandle} searchResultHandle={searchResultHandle} onClick={(e) => setToggle(false)} />}
        {page == "Search" && <Content addProduct={addProduct} content={{ type: page, result: searchResult }} />}
        {page == "Cart" && <Cart clearCart={clearCart} kCart={kCart} addProduct={addProduct} user={user} showSearch={showSearch} pageHandle={pageHandle} />}
        {page == "Compare" && <Demo header={searchResult} user={user} showSearch={showSearch} pageHandle={pageHandle} />}
        {page == "Order" && <Order user={user} showSearch={showSearch} pageHandle={pageHandle} />}
        {page == "Reciept" && <Reciept user={user} showSearch={showSearch} pageHandle={pageHandle} />}
        {page == "Payment" && <Payment onClick={(e) => setLastClick(false)} user={user} showSearch={showSearch} pageHandle={pageHandle} />}
        {page == "Home" && <Homepage addProduct={addProduct} showLoginPopup={showLoginPopup} />}
        {page == "Spinlucky" && <Spinlucky setdiscount={disscounting} />}
        {page == "ContactUs" && <ContactUs  />}

      </div>
      {!showLoginPopup && <Footer pageHandle={pageHandle}/>}
    </div>
  );
}

export default App;
