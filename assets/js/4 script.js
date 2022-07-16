// Variables
let section1 = document.querySelector("#section1");
section1.style.backgroundColor = "yellow";
let section2 = document.querySelector("#section2");
section2.style.backgroundColor = "orange";
let section3 = document.querySelector("#section3");
section3.style.backgroundColor = "red";
let section4 = document.querySelector("#section4");
section4.style.backgroundColor = "purple";
let fullColor = "";

// Función
let square = document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    fullColor = "yellow";
  } else if (event.key === "s") {
    fullColor = "orange";
  } else if (event.key === "d") {
    fullColor = "red";
  } else if (event.key === "f") {
    fullColor = "purple";
  } else if (event.key === "g") {
    fullColor = "pink";
  }
  paint (section1, fullColor);
  paint (section2, fullColor);
  paint (section3, fullColor);
  paint (section4, fullColor);
});

let paint = (element, color) => {
  element.addEventListener("click", (e) => {
    element.style.backgroundColor = color;
  });
};