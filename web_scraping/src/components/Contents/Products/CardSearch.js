import React, { useEffect, useState } from 'react'
import Card from './Card';
import '../../../css/cardSearch.style.css'
import products from '../../../resources/products.match';
export default function CardSearch(props) {
  const [itemProduct, setItemProduct] = useState();
  const [changeState, setchangeState] = useState(0);
  const shoot = () => {
    alert("Great Shot!");
  }
  const reset = [];
  useEffect(() => {
    console.log(products);
    setItemProduct(reset.map((e) =>
      <Card product={e} doFunc={shoot}></Card>
    ));
    setchangeState(changeState+1);
  }, [props.searchResult]);
  
  useEffect(() => {
    console.log(products);
    setItemProduct(products.map((e) =>
      <Card product={e} doFunc={shoot}></Card>
    ));
  }, [changeState]);
  //   setItemProduct(products.map((e) =>
  //   <Card product={e} doFunc={shoot}></Card>
  // ));
  // products.map((e) =>
  //   <Card product={e} doFunc={shoot}></Card>
  // );
  return (
    <div>
      <div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
        {/* CardSearch from searchResult = {props.searchResult} */}
        {/* <Card img={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1024px-VAN_CAT.png"} name={"hello my name is brabrabrabrabra"} cost={20}
        Clickfunction={shoot}></Card>
      <Card img={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1024px-VAN_CAT.png"} name={"hello my name is brabrabrabrabra"}
        Clickfunction={shoot}></Card> */}
        <div className='CardSearch'>
          {itemProduct}
        </div>
      </div>
      <div style={{ backgroundColor: "white", width: "100px", height: "60px" }}></div>
    </div>
  )
}
