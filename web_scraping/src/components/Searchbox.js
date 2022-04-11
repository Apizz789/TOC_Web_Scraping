import React from 'react'
import '../css/searchbox.style.css'

const Searchbox = () => {
    const enterSearch = (input) => {
        alert(input);
    }
    return (
        <div class="search">
            <input type="text" name="" placeholder="Serach" class="text" id='searchText'
                onKeyPress={event => {
                if (event.key === 'Enter') {
                    enterSearch(event.key)
                }
              }}
            />
            <a href="#" class="btn" ><i class="fa fa-search " ></i></a>
        </div>
    )
}

export default Searchbox;