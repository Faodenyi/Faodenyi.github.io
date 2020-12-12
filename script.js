/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


function mouseOver() {
  document.getElementById("dropdown-content").style.display = "block";
}

function mouseOut() {
    setTimeout(function(){
      document.getElementById("dropdown-content").style.display = "";
  }, 2000);
  
  
}

function mouseOverContent() {
  document.getElementById("dropdown-content").style.display = "block";
}

function mouseOutContent() {
  document.getElementById("dropdown-content").style.display = "";
}