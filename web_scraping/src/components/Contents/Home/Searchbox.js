import React from 'react'
import '../../../css/searchbox.style.css'

const Searchbox = (props) => {

    return (
        <div class="Searchbox">
            <div class='text-center search-header'> ค้นหาสินค้าของคุณได้เลยคะ^^</div>
            <div class="search">
                <input type="text" name="" placeholder="Serach" class="text" id='searchText'
                    onKeyPress={event => {
                    if (event.key === 'Enter') {
                        props.searchResultHandle(event.target.value)
                        props.pageHandle("Search")
                    }
                }}
                />
                <a href="#" class="btn" ><i class="fa fa-search " ></i></a>
            </div>
        </div>
    )
}

export default Searchbox;