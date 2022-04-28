import React from 'react'
import '../../../css/spinlucky.css'


// var padding = { top: 20, right: 0, bottom: 0, left: 0 },
//     w = 500 - padding.left - padding.right,
//     h = 500 - padding.top - padding.bottom,
//     r = Math.min(w, h) / 2,
//     rotation = 0,
//     oldrotation = 0,
//     picked = 100000,
//     oldpick = [],
//     color = d3.scale.category20b();//category20c()
// //randomNumbers = getRandomNumbers();
// var data = [
//     { "label": "หมายเลข 1", "value": 1, "question": "เวร ย่อมระงับด้วยการไม่จองเวร" }, // padding
//     { "label": "หมายเลข 2", "value": 2, "question": "คบคนเช่นไร ย่อมเป็นคนเช่นนั้น" }, //font-family
//     { "label": "หมายเลข 3", "value": 3, "question": "บุญย่อมปกป้องรักษา และคุ้มครองคนดี และผู้ประพฤติดีเสมอ" }, //color
//     { "label": "หมายเลข 4", "value": 4, "question": "วันที่ดีที่สุด คือวันที่ได้ทำความดี และสะสมบุญ" }, //font-weight
//     { "label": "หมายเลข 5", "value": 5, "question": "เรื่องที่ผ่านไปแล้ว ก็เป็นเหมือนวันวาน อย่าเก็บเอามาเป็นหนามทิ่มแทงตัวเองอีกเลย" }, //font-size
//     { "label": "หมายเลข 6", "value": 6, "question": "การเลือกคบคนดี มีแต่นำความสุขมาให้" }, //background-color
//     { "label": "หมายเลข 7", "value": 7, "question": "บุญวาสนาเป็นสิ่งที่สร้างเองได้ หากไม่มีก็ทำให้มี ที่มีอยู่แล้วก็ทำให้มียิ่งขึ้นได้" }, //nesting
//     { "label": "หมายเลข 8", "value": 8, "question": "ผู้เห็นโลกเป็นของวุ่นวาย นั่นแหละคือผู้มีบุญ" }, //bottom

// ];
// var svg = d3.select('#chart')
//     .append("svg")
//     .data([data])
//     .attr("width", w + padding.left + padding.right)
//     .attr("height", h + padding.top + padding.bottom);
// var container = svg.append("g")
//     .attr("class", "chartholder")
//     .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");
// var vis = container
//     .append("g");
// var pie = d3.layout.pie().sort(null).value(function (d) { return 1; });
// // declare an arc generator function
// var arc = d3.svg.arc().outerRadius(r);
// // select paths, use arc generator to draw
// var arcs = vis.selectAll("g.slice")
//     .data(pie)
//     .enter()
//     .append("g")
//     .attr("class", "slice");
// arcs.append("path")
//     .attr("fill", function (d, i) { return color(i); })
//     .attr("d", function (d) { return arc(d); });
// // add the text
// arcs.append("text").attr("transform", function (d) {
//     d.innerRadius = 0;
//     d.outerRadius = r;
//     d.angle = (d.startAngle + d.endAngle) / 2;
//     return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
// })
//     .attr("text-anchor", "end")
//     .text(function (d, i) {
//         return data[i].label;
//     });
// container.on("click", spin);
// function spin(d) {
//     container.on("click", null);
//     //all slices have been seen, all done
//     console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
//     if (oldpick.length == data.length) {
//         console.log("done");
//         container.on("click", null);
//         window.location.reload();
//         return;
//     }
//     var ps = 360 / data.length,
//         pieslice = Math.round(1440 / data.length),
//         rng = Math.floor((Math.random() * 1440) + 360);
//     rotation = (Math.round(rng / ps) * ps);
//     picked = Math.round(data.length - (rotation % 360) / ps);
//     picked = picked >= data.length ? (picked % data.length) : picked;
//     if (oldpick.indexOf(picked) !== -1) {
//         d3.select(this).call(spin);
//         return;
//     } else {
//         oldpick.push(picked);
//     }
//     rotation += 90 - Math.round(ps / 2);
//     vis.transition()
//         .duration(3000)
//         .attrTween("transform", rotTween)
//         .each("end", function () {
//             //mark question as seen
//             d3.select(".slice:nth-child(" + (picked + 1) + ") path")
//                 .attr("fill", "#4a4848");
//             //populate question
//             d3.select("#question h1")
//                 .text(data[picked].question);
//             oldrotation = rotation;
//             /* Get the result value from object "data" */
//             console.log(data[picked].value)
//             /* Comment the below line for restrict spin to sngle time */
//             container.on("click", spin);
//         });
// }
// //make arrow
// svg.append("g")
//     .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
//     .append("path")
//     .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
//     .style({ "fill": "black" });
// //draw spin circle
// container.append("circle")
//     .attr("cx", 0)
//     .attr("cy", 0)
//     .attr("r", 60)
//     .style({ "fill": "white", "cursor": "pointer" });
// //spin text
// container.append("text")
//     .attr("x", 0)
//     .attr("y", 15)
//     .attr("text-anchor", "middle")
//     .text("SPIN")
//     .style({ "font-weight": "bold", "font-size": "30px" });
// function rotTween(to) {
//     var i = d3.interpolate(oldrotation % 360, rotation);
//     return function (t) {
//         return "rotate(" + i(t) + ")";
//     };
// }
// function getRandomNumbers() {
//     var array = new Uint16Array(1000);
//     var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
//     if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
//         window.crypto.getRandomValues(array);
//         console.log("works");
//     } else {
//         //no support for crypto, get crappy random numbers
//         for (var i = 0; i < 1000; i++) {
//             array[i] = Math.floor(Math.random() * 100000) + 1;
//         }
//     }
//     return array;
// }




function Spinlucky(props) {
    return (


        <div class="container titlebox-chart  ">
            <br></br>
            <div ><center><h1 ><b>My Order(Confirm)</b></h1></center></div>
            <hr></hr>

            <div class="row " >
                <div class="col table-box "> <center>ลำดับ</center> </div>
                <div class="col  table-box"> <center>รายการ</center> </div>
                <div class="col table-box"> <center>ราคา(บาท)</center> </div>
            </div>
            <hr></hr>


            {/* Item Drop here */}
            <div class="row" >
                <div class="col "> <center>1</center> </div>
                <div class="col "> <center>รองเท้า</center> </div>
                <div class="col "> <center>88</center> </div>
            </div>

            <div class="row" >
                <div class="col "> <center>2</center> </div>
                <div class="col "> <center>รองเท้า</center> </div>
                <div class="col "> <center>88</center> </div>
            </div>

            <div class="row" >
                <div class="col "> <center>3</center> </div>
                <div class="col "> <center>รองเท้า</center> </div>
                <div class="col "> <center>88</center> </div>
            </div>

            <div class="row" >
                <div class="col "> <center>4</center> </div>
                <div class="col "> <center>รองเท้า</center> </div>
                <div class="col "> <center>88</center> </div>
            </div>

            <div class="row" >
                <div class="col "> <center>5</center> </div>
                <div class="col "> <center>รองเท้า</center> </div>
                <div class="col "> <center>88</center> </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <hr></hr>

            <div class="row" >
                <div class="col "> <center><u>ราคารวม</u></center> </div>
                <div class="col "> <center></center> </div>
                <div class="col "> <center>88</center> </div>

            </div>
            <br></br>
            <div class="row">

                <div class="col "> <center>
                    <center>
                        <div class="component-btn-2" onClick={(e) => props.setdiscount(5)}><center>
                            <h2>วงล้อส่วนลด</h2>
                        </center></div>
                    </center>
                </center> </div>
                <div class="col "> <center>
                    <center>
                        <div class="component-btn" onClick={(e) => props.pageHandle("Order", "Payment")}>
                            <center>
                                <h2>Payment</h2>
                            </center>
                        </div>
                    </center>
                </center> </div>




            </div>

        </div>




    )
}

export default Spinlucky