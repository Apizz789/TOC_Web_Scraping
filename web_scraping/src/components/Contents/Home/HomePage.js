import React from 'react'
import './../../../css/home.style.css'
import Card from '../Products/Card'

export default function Homepage(props) {
  return (
    <div class="Homepage">
    <div class="homepage-banner-container">banner</div>
      <div class="homepage-center-container">
        <div class="homepage-header">FLASH SALES</div>
        {!props.showLoginPopup && <div class="homepage-header-line"></div>}
        <div class="homepage-card-container">
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
        </div>
      </div>
      <div class="homepage-center-container">
        <div class="homepage-header">TRENDING</div>
        {!props.showLoginPopup && <div class="homepage-header-line"></div>}
        <div class="homepage-card-container">
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
        </div>
      </div>
      <div class="homepage-center-container">
        <div class="homepage-header">TOP PRODUCTS</div>
        {!props.showLoginPopup && <div class="homepage-header-line"></div>}
        <div class="homepage-card-container">
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
          <div class ="homepage-card-child"><Card/></div>
        </div>
      </div>
    </div>
  )
}
