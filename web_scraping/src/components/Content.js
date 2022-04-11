import React from 'react'
import CardSearch from './CardSearch'
import '../css/content.style.css'
import HomePage from './HomePage'

export default function Content(props) {
  return (
    <div class='Content'>Content
        {!props.onSearch && <HomePage/>}
        {props.onSearch && <CardSearch/>}
    </div>

  )
}
