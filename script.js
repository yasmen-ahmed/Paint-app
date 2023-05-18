// var canvas =document.getElementById('my-canvas')
// var pen=canvas.getContext('2d')

// //rectangle
// pen.beginPath();  //to know we start new shape
// pen.rect(0,0,50,50) //(x,y,width,height) (x,y) it's start points
// pen.lineWidth ='1' // opstie of pen line
// pen.strokeStyle ='blue'  //border color
// pen.fillStyle='tomato' // rectangle color
// pen.fillRect(0,0,60,60) //what space i wanna cover with color
// pen.stroke()// to draw the shape

// //circle
// pen.beginPath();  //to know we start new shape
// pen.arc(100,200,50,0,2*Math.PI) //(x,y,nos 2otr,zwit el bdaia,l7d zwit el nhaia) (x,y) it's start points
// pen.lineWidth ='1' // opstie of pen line
// pen.fillStyle="orange"
// pen.fill() //to fill color with the same nums
// pen.stroke()// to draw the shape

// //text
// pen.font="40px arial" // font size and font family
// pen.strokeStyle='red' // border color
// pen.strokeText('Hello World' ,100,100)
// pen.fillStyle='yellow'

// pen.fillText('Hello World' ,100,100)// fill the word
// pen.fillStyle='green'
// pen.textAlign='center'
// pen.fillText('Hello ',canvas.width/2,canvas.height/2)

//img
// var newImg=document.getElementById('img-flower')
// pen.drawImage(newImg,0,0,newImg.width/4,newImg.height/4)

// //line
// pen.beginPath();
// pen.lineWidth='4'
// pen.strokeStyle='red'
// pen.moveTo(0,0) //start point
// pen.lineTo(80,80) //end point
// pen.stroke();

// Ex free line

// var startPoint ={
//     x:0,
//     y:0
// }

// canvas.addEventListener('mousedown',(e)=>{
//     // console.log(e)
//     // console.log(e.offsetX);
//     // console.log(e.offsetY);
//     startPoint.x=e.offsetX;
//     startPoint.y=e.offsetY;
//     pen.beginPath();
//     pen.lineWidth='1'
//     pen.strokeStyle='red'
//     pen.moveTo(startPoint.x,startPoint.y) //start point

// }
// )

// canvas.addEventListener('mouseup',(e)=>{
//     // console.log(e.offsetX);
//     // console.log(e.offsetY);
//     pen.lineWidth='1'
//     pen.strokeStyle='red'
//     pen.lineTo(e.offsetX,e.offsetY) //end point
//     pen.stroke()

// }
// )

// // free drawing function
// drawFlag=false;

// startPoint={
//     x:0,
//     y:0
// }
// endPoint={
//     x:0,
//     y:0
// }
// canvas.addEventListener('mousedown',startDrawing)
// canvas.addEventListener('mouseup',endDrawing)
// canvas.addEventListener('mousemove',contanueDrawing)

// function startDrawing(e){
//     startPoint.x=e.offsetX;
//     startPoint.y=e.offsetY;
//     pen.beginPath();
//      pen.moveTo(startPoint.x,startPoint.y) //start point
//      drawFlag=true

// }

// function contanueDrawing(e){

//     if(drawFlag){
//         endPoint.x=e.offsetX;
//         endPoint.y=e.offsetY;
//         pen.lineTo(endPoint.x,endPoint.y) //end point
//         pen.stroke()
//     }

// }

// function endDrawing(e){
//      drawFlag=false

// }

// // chose color
// var buttonColor=document.getElementById(color-grd)
// var grd= pen.createLinearGradient(0,0,200,150);
// grd.addColorStop(0,'red')
// grd.addColorStop(1,'blue')
// pen.fillStyle =grd;
// pen.fillRect(0,0,200,100)

var canvas = document.getElementById("my-canvas");
var toolbar = document.getElementById("toolbar");
var shapebar = document.getElementById("shapebar");

var pen = canvas.getContext("2d");

function removeLisner(){
  canvas.removeEventListener("mousedown", startDrawing);
  canvas.removeEventListener("mouseup", endDrawing);
  canvas.removeEventListener("mousemove", contanueDrawing);

  canvas.removeEventListener("mousedown", startRectangleDrawing);
    canvas.removeEventListener("mousemove", drawRectangle);
    canvas.removeEventListener("mouseup", stopDrawing);

     canvas.removeEventListener("mousedown", startDrawingCircle);
    canvas.removeEventListener("mouseup", endDrawingCircle);
    canvas.removeEventListener("mousemove", contDrawingCircle);
  

    canvas.removeEventListener("mousedown", startLineDrawing);
    canvas.removeEventListener("mouseup", endLineDrawing);
  



}
//clear
toolbar.addEventListener("click", (e) => {
  if (e.target.id === "clear") {
    pen.clearRect(0, 0, canvas.width, canvas.height);
  }
});

//free drawing onclick button
shapebar.addEventListener("click", (e) => {
  removeLisner();

  if (e.target.id === "freeLine") {
    pen.strokeStyle = "black";

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", endDrawing);
    canvas.addEventListener("mousemove", contanueDrawing);
  }
});

//RECTANGLE drawing onclick button
shapebar.addEventListener("click", (e) => {
 
  if (e.target.id === "rectangle") {
    pen.strokeStyle = "black";
    canvas.addEventListener("mousedown", startRectangleDrawing);
    canvas.addEventListener("mousemove", drawRectangle);
    canvas.addEventListener("mouseup", stopDrawing);
  }
});

//circle drawing onclick button
shapebar.addEventListener("click", (e) => {
  if (e.target.id === "circle") {
    pen.strokeStyle = "black";

    canvas.addEventListener("mousedown", startDrawingCircle);
    canvas.addEventListener("mouseup", endDrawingCircle);
    canvas.addEventListener("mousemove", contDrawingCircle);
  }
});

//easer onclick button
shapebar.addEventListener("click", (e) => {
  if (e.target.id === "easer") {
    pen.strokeStyle = "#d0d0e2";
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", endDrawing);
    canvas.addEventListener("mousemove", contanueDrawing);
  }
});

//line onclick button
shapebar.addEventListener("click", (e) => {
  if (e.target.id === "line") {
    pen.strokeStyle = "black";
    canvas.addEventListener("mousedown", startLineDrawing);
    canvas.addEventListener("mouseup", endLineDrawing);
  }
});

// //rectangle onclick button
// shapebar.addEventListener('click', e => {
//     if (e.target.id === 'rectangle') {
//         pen.strokeStyle = '#d0d0e2';
//         canvas.addEventListener('mousedown',startDrawing)
//         canvas.addEventListener('mouseup',endDrawing)
//     }
// });

//change value

toolbar.addEventListener("change", (e) => {
  if (e.target.id === "fill") {
    pen.fillStyle = e.target.value;
  }

  if (e.target.id === "stroke") {
    pen.strokeStyle = e.target.value;
  }

  if (e.target.id === "lineWidth") {
    lineWidth = e.target.value;
  }
});

// free drawing function
drawFlag = false;
let lineWidth = 5;

startPoint = {
  x: 0,
  y: 0,
};
endPoint = {
  x: 0,
  y: 0,
};

function startDrawing(e) {
  startPoint.x = e.offsetX;
  startPoint.y = e.offsetY;
  pen.beginPath();
  pen.lineWidth = lineWidth;
  // pen.fillStyle();

  pen.moveTo(startPoint.x, startPoint.y); //start point
  drawFlag = true;
}

function contanueDrawing(e) {
  if (drawFlag) {
    endPoint.x = e.offsetX;
    endPoint.y = e.offsetY;
    pen.lineTo(endPoint.x, endPoint.y); //end point
    pen.stroke();
  }
}

function endDrawing(e) {
  drawFlag = false;
}



function startLineDrawing(e) {
  startPoint.x = e.offsetX;
  startPoint.y = e.offsetY;
  pen.beginPath();
  pen.lineWidth = lineWidth;
  // pen.fillStyle();

  pen.moveTo(startPoint.x, startPoint.y); //start point
  drawFlag = true;
}

function endLineDrawing(e) {
  endPoint.x = e.offsetX;
  endPoint.y = e.offsetY;
  pen.lineTo(endPoint.x, endPoint.y);
  // pen.closePath();
  //end point
  pen.stroke();
  drawFlag = false;
}

//draw circle
function startDrawingCircle(e) {
  drawFlag = true;
  startPoint.x = e.offsetX;
  startPoint.y = e.offsetY;
}

function contDrawingCircle(e) {
  if (drawFlag) {
    let currentX = e.offsetX;
    let currentY = e.offsetY;
    const radius = Math.sqrt(
      (currentX - startPoint.x) ** 2 + (currentY - startPoint.y) ** 2
    );
    // pen.clearRect(0, 0, canvas.width, canvas.height);
    pen.beginPath();
    pen.lineWidth = lineWidth;

    pen.arc(startPoint.x, startPoint.y, radius, 0, 2 * Math.PI);
    pen.fillStyle = e.target.value;
    pen.fill();
  }
}

function endDrawingCircle(e) {
  pen.stroke();
  drawFlag = false;
}

//rectangle
let startRectanglex, startRectangley;
function startRectangleDrawing(e) {
  drawFlag = true;
  startRectanglex = e.offsetX;
  startRectangley = e.offsetY;
}

function drawRectangle(e) {
  if (drawFlag) {
    currentX = e.offsetX;
    currentY = e.offsetY;
    const width = currentX - startRectanglex;
    const height = currentY - startRectangley;
    pen.beginPath();
    pen.lineWidth = lineWidth;
    pen.fillRect(startRectanglex, startRectangley, width, height);
    pen.fillStyle = e.target.value;
    pen.fill();
    pen.strokeStyle = e.target.value;
  }
}

function stopDrawing(e) {
  pen.stroke();
  drawFlag = false;
}



// function startRectangleDrawing(e){
//     startPoint.x=e.offsetX;
//     startPoint.y=e.offsetY;
//     pen.beginPath();
//     pen.lineWidth = lineWidth;
//     pen.rect(startPoint.x,startPoint.y,0,0)
//     pen.strokeStyle = e.target.value
//     pen.fillStyle=e.target.value
//     //pen.fillRect(startPoint.x,startPoint.y,endPoint.x,endPoint.y)

//     drawFlag=true

// }

// function endDrawing(e){
//     pen.rect(0,0,endPoint.x,endPoint.y)
//     pen.stroke()
//     //  drawFlag=false

// }
