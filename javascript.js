let btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
dimensions =prompt("Enter number of square per side");

 //populate canvas with squares(pixels)
let container =document.querySelector(".container");
for (let i=0 ;i<(Number(dimensions)**2);i++){
  let div =document.createElement("div");
    div.classList.add("square");
    div.setAttribute("style",`width:${100/+dimensions}%;height:${100/+dimensions}%`);
    container.appendChild(div);
}
//change the color of the square
let box =document.querySelectorAll(".square");
for(let square of box){
square.addEventListener("mouseenter",()=>{
square.classList.add("changeColor");
})
}
})