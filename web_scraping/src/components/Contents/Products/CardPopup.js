import React, { useState, useEffect } from 'react'
import '../../../css/cardPopup.style.css'
export default function CardPopup(props) {
  const [productData, setProductData] = useState({
    name: null,
    price: null,
    img: ["null", "null", "null"],
    qauntity: 1,
    category: ["null", "null"]
  });

  useEffect(() => {
    const fetchProduct = async () => {
      if (props.product != null) {
        setProductData(props.product);
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
      width: "599px",
      height: "389px",
      backgroundColor: "white",
      position: "fixed",
      top: "50%",
      left: "50%",
      borderRadius: "10px",
      transform: "translate(-50%, -50%)", zIndex: "10",
      padding: "60px", display: 'flex',
      justifyContent: "space-between"
    }}>

      <div>
        <img src={productData.img[0]}
          style={{
            width: "201px", height: "278px",
            objectFit: "cover", borderRadius: "10px",
          }}></img>

        <div style={{ display: "flex", justifyContent: "center" }}>

          <img src={productData.img[0]}
            style={{
              width: "50px", height: "50px",
              objectFit: "cover", borderRadius: "10px",
              margin: "4px"
            }}></img>

          <img src={productData.img[1]}
            style={{
              width: "50px", height: "50px",
              objectFit: "cover", borderRadius: "10px",
              margin: "4px"
            }}></img>

          <img src={productData.img[2]}
            style={{
              width: "50px", height: "50px",
              objectFit: "cover", borderRadius: "10px", margin: "4px"
            }}></img>
        </div>
      </div>

      <div style={{
        width: "370px",
        height: "350px",
        display: "flex", flexDirection: "column", justifyContent: "space-between"
      }}>
        <div>
          <h3 style={{
            width: "100%", overflow: "hidden",
            textOverflow: "ellipsis", WebkitLineClamp: "2",
            textAlign: "left", margin: "0px"
          }}>{productData.name}</h3>
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
            <button className='PopupCardButtonQn'>-</button>
            <p>จำนวนชิ้นที่ต้องการซื้อ</p>
            <button className='PopupCardButtonQn'>+</button>
          </div>
          <button className='PopupCardButtonCart' onClick={() => props.doFunc()}><p>พิมพ์ใส่ตะกร้า</p></button>
        </div>
      </div>

    </div>

  </div>)
}
