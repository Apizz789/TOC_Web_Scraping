import { React, useState, useEffect } from 'react';
import CardPopup from './CardPopup';
function Card(props) {
    const [showpopup, setShowpopup] = useState(false);
    const [falseData, setFalseData] = useState("hidden");
    const [closeButton, setCloseButton] = useState(false);
    const [productData, setProductData] = useState({
        name: null,
        price: null,
        img: ["null", "null", "null"],
        qauntity: 1,
        category: ["null", "null"]
    });
    useEffect(() => {
        const fetchProduct = async() =>{
            if (props.product != null) {
                setProductData(props.product);
                if(props.product.price == null){
                    setFalseData("visible");
                    setCloseButton("true");
                }
            }
            else if(props.product == null){ //add tag to check if data is null(if data null = set button false)
                setFalseData("visible");
                setCloseButton("true");
            }
        }
        fetchProduct();
        
     },[]);

    return (<div>
        <div style={{
            margin: "20px",
            width: "228px",
            height: "239px",
            borderRadius: "10px",
            borderStyle: "none solid solid",
            borderWidth: "1px",
            position: "relative", background: "white", padding: '5px'
        }}>
            <img src={productData.img[0]}     
                style={{
                    width: "228px",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px"
                }}></img>
            <div style={{                    
                display: "flex",
                paddingLeft: "10px",
                paddingRight: "10px",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <p style={{
                    whiteSpace: "nowrap",
                    width: "150px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textAlign: "left"

                }}>{productData.name}</p>
                <button style={{
                    width: "34px",
                    height: "34px"
                }}
                    disabled={closeButton} onClick={() => setShowpopup(true)}>+</button>
            </div>
            <div style={{
                visibility:falseData,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                position: "absolute", top: "0", left: "0", borderRadius: "10px"
            }}>
            </div>
        </div>
        {showpopup == true ? <CardPopup closePopup={setShowpopup} doFunc={props.doFunc} product={productData}></CardPopup> : null}
    </div>)
}
export default Card;