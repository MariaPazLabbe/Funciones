/* script.js */
function pintar(color, element) {
  console.log("color", color);
  console.log("element", element);
  //   elemento = document.querySelector("body");
  element.style.backgroundColor = color;
}
let color = "yellow";
let element = document.querySelector("div");
// let btn = document.querySelector("button");
element.addEventListener("click", () => {
  pintar(color, element)
})