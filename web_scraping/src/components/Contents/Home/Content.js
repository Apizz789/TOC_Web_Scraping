import React from 'react'
import CardSearch from '../Products/CardSearch'
import "../../../css/content.style.css"
import HomePage from './HomePage'

export default function Content(props) {
  return (
    <div class='Content'>
        <CardSearch addProduct={props.addProduct}  searchResult ={props.content.result}/>
    </div>

  )
}
