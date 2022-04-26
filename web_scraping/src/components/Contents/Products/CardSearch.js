import React from 'react'
import Card from './Card';
import '../../../css/cardSearch.style.css'
import products from '../../../resources/products.match';
export default function CardSearch(props) {
  const shoot = () => {
    alert("Great Shot!");
  }
  const itemProduct = products.map((e) =>
    <Card product={e} doFunc={shoot}></Card>
  );
  return (
    <div className='CardSearch'>
      CardSearch from searchResult = {props.searchResult}
      {/* <Card img={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1024px-VAN_CAT.png"} name={"hello my name is brabrabrabrabra"} cost={20}
        Clickfunction={shoot}></Card>
      <Card img={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1024px-VAN_CAT.png"} name={"hello my name is brabrabrabrabra"}
        Clickfunction={shoot}></Card> */}
        {itemProduct}
    </div>
  )
}
