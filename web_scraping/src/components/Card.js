import React from 'react';
function Card(props) {
    return (
    <div style={{
        margin:"20px",
        width:"228px",
        height:"239px",
        borderRadius: "10px",
        borderStyle: "none solid solid",
        borderWidth: "1px"
        }}>
        <img src={props.img}
        style={{
            width:"228px",
            height:"180px",
            objectFit: "cover",
            borderRadius: "10px"
        }}></img>
        <div style={{
            display:"flex",
            paddingLeft:"10px",
            paddingRight:"10px",
            justifyContent:"space-between",
            alignItems:"center"
        }}>
            <p style={{
                whiteSpace: "nowrap",
                width: "150px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "left"
                
            }}>{props.name}</p>
            <button style={{
                width:"34px",
                height:"34px"
            }}
            onClick={{}}>+</button>
        </div>
        
    </div>)
  }
export default Card;