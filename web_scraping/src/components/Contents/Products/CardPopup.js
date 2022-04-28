import React, { useState, useEffect } from 'react'
import '../../../css/cardPopup.style.css'
export default function CardPopup(props) {
  const [productData, setProductData] = useState({
    name: null,
    price: null,
    img: [null, null, null],
    category: [null, null]
  });
  const[countProduct,setCountProduct] = useState(0);
  const[showImgPic, setShowImgPic] = useState(null)

  const[img0select,setImg0select] = useState({filter:"grayscale(0%)",bordColor:"#424242"});
  const[img1select,setImg1select] = useState({filter:"grayscale(100%)",bordColor:"white"});
  const[img2select,setImg2select] = useState({filter:"grayscale(100%)",bordColor:"white"});

  const selectImg = {
    filter:"grayscale(0%)",
    bordColor:"#424242"
  }
  const unSelectImg = {
    filter:"grayscale(100%)",
    bordColor:"white"
  }
  useEffect(() => {
    const fetchProduct = async () => {
      if (props.product != null) {
        setProductData(props.product);
        setShowImgPic(props.product.img[0])
      }
    }
    fetchProduct();
  }, []);

  const showType = productData.category.map((e) =>
    <p style={{
      margin: "2px", backgroundColor: "grey",
      color: "white", width: "100px",
      textAlign: "center", overflow: "hidden",
      textOverflow: "ellipsis", whiteSpace: "nowrap"
    }}>{e}</p>
  )

  return (<div>
    <div style={{
      width: "100vw", height: "100vh",
      position: "fixed", top: "0", left: "0",
      borderRadius: "10px", zIndex: "10"
    }}>

      <div style={{
        width: "100%", height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        position: "sticky", top: "0", left: "0",
        borderRadius: "10px", zIndex: "10",
      }} onClick={(e) => props.closePopup(false)}>
      </div>

    </div>

    <div style={{
      width: "45vw",
      height: "50vh",
      backgroundColor: "white",
      position: "fixed",
      top: "50%",
      left: "50%",
      borderRadius: "10px",
      transform: "translate(-50%, -50%)", zIndex: "10",
      padding: "60px", display: 'flex',
      justifyContent: "space-between"
    }}>

      <div style={{marginRight:"1vh"}}>
        <img src={showImgPic}
          style={{
            width: "12vw", height: "13vw",
            objectFit: "cover", borderRadius: "10px",
          }}></img>

        <div style={{ display: "flex", justifyContent: "center" }}>

          <img src={productData.img[0]}
            style={{
              width: "50px", height: "50px",
              objectFit: "cover", borderRadius: "10px",
              margin: "4px",filter:img0select.filter,borderStyle: 'solid',borderColor: img0select.bordColor
            }} onClick={()=>{setShowImgPic(productData.img[0]);setImg0select(selectImg);
              setImg1select(unSelectImg);setImg2select(unSelectImg)}}></img>

          <img src={productData.img[1]}
            style={{
              width: "50px", height: "50px",
              objectFit: "cover", borderRadius: "10px",
              margin: "4px",filter:img1select.filter,borderStyle: 'solid',borderColor: img1select.bordColor
            }} onClick={()=>{setShowImgPic(productData.img[1]);setImg1select(selectImg);
              setImg0select(unSelectImg);setImg2select(unSelectImg)}}></img>

          <img src={productData.img[2]}
            style={{
              width: "50px", height: "50px",
              objectFit: "cover", borderRadius: "10px", margin: "4px",
              filter:img2select.filter,borderStyle: 'solid',borderColor: img2select.bordColor
            }} onClick={()=>{setShowImgPic(productData.img[2]);setImg2select(selectImg);
              setImg0select(unSelectImg);setImg1select(unSelectImg)}}></img>
        </div>
      </div>

      <div style={{
        width: "25vw",
        height: "350px",
        display: "flex", flexDirection: "column", justifyContent: "space-between"
      }}>
        <div>
          <h4 style={{
            width: "100%", overflow: "hidden",
            textOverflow: "ellipsis", WebkitLineClamp: "2",
            textAlign: "left", margin: "0px"
          }}>{productData.name}</h4>
          <div style={{ display: "flex" }}>{showType}
          </div>

          <div style={{ marginTop: "10px", disply: "flex" }}>
            <p style={{ margin: "0px" }}>ราคา : {productData.price} ฿</p>
          </div>
        </div>
        <div style={{
          width: "100%", display: 'flex',
          flexDirection: "column", alignItems: "center"
        }}>
          <div style={{
            display: "flex", justifyContent: "space-around",
            alignItems: "center"
          }}>
            <button className='PopupCardButtonQn' onClick={()=> {if(countProduct>0){setCountProduct(countProduct-1)}}}>-</button>
            <p style={{width:"100px",textAlign:"center"}}>{countProduct}</p>
            <button className='PopupCardButtonQn'onClick={()=> {setCountProduct(countProduct+1)}}>+</button>
          </div>
          <button className='PopupCardButtonCart' onClick={() => {props.doFunc();props.closePopup(false)}}>พิมพ์ใส่ตะกร้า</button>
        </div>
      </div>

    </div>

  </div>)
}
