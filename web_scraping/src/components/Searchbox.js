import React from 'react'
import '../css/searchbox.style.css'

export default function Searchbox() {
    return (
        <div>

            <div class="form col-xs-12">
                <input class="col-xs-9" id="searchBar" type="text" placeholder="search" />
                <span class="glyphicon glyphicon-search col-xs-1" data-toggle="tooltip" title="Search"></span>
                <span class="glyphicon bar col-xs-1" id="submit"><b>|</b></span>
                <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank"><span class="glyphicon glyphicon-random col-xs-1" data-toggle="tooltip" title="Random topic"></span></a>
            </div>

        </div>
    )
}
