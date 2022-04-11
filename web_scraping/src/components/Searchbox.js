import React from 'react'
import '../css/searchbox.style.css'

const Searchbox = () => {
    const enterSearch = (input) => {
        if (input.key === "Enter") {
            alert("Enter was just pressed.");
        }
    }
    return (
        <div class="search">
            <input type="text" name="" placeholder="Serach" class="text" id='searchText'/>
            <a href="#" class="btn" ><i class="fa fa-search " ></i></a>
        </div>
    )
}

export default Searchbox;