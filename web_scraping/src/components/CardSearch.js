import React from 'react'
import Card from './Card';
import '../css/cardSearch.style.css'

export default function CardSearch() {
    const shoot = () => {
        alert("Great Shot!");
      }
  return (
    <div className='CardSearch'>
        CardSearch
        <Card img={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1024px-VAN_CAT.png"} name={"hello my name is brabrabrabrabra"}
        Clickfunction={shoot}></Card>
    </div>
  )
}
