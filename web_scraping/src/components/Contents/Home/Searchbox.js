import React from 'react'
import '../../../css/searchbox.style.css'
import { faCartShopping, faCaretDown, faCaretUp,faCaretLeft,faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Searchbox = (props) => {

    const searchHandle= () => {
        let searchInput = document.getElementById("searchText").value
        document.getElementById("username-element").innerHTML = searchInput        
        props.searchResultHandle(searchInput)
        props.pageHandle(props.searchResult,"Search")
    }
    return (
        <div class="Searchbox">
            {/* <div class='text-center search-header'> ค้นหาสินค้าของคุณได้เลยคะ^^</div> */}
            <div class="search-withcart-container">
            <div class="searchbox-container">
            {/* <div class="search"> */}
                <FontAwesomeIcon icon={faSearch} class="searchbox-btn" onClick={(e) => searchHandle()} />

                <input type="text" name="" placeholder="ค้นหาสินค้าของคุณที่นี่" class="search-input-container" id='searchText'
                    onKeyPress={event => {
                    if (event.key === 'Enter') {
                        props.searchResultHandle(event.target.value)
                        props.pageHandle("Search","Search")
                    }
                }}
                />

            {/* </div> */}
            </div>
            
            <FontAwesomeIcon icon={faCartShopping} class="cart-icon" onClick={(e) => props.pageHandle("Search","Cart")}/>
            </div>

        </div>
    )
}

export default Searchbox;