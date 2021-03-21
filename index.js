//Get the button
var mybutton = document.getElementById("scrollBtn");
var html = document.getElementById("HTML");
var css = document.getElementById("CSS");
var js = document.getElementById("JS");
var angular = document.getElementById("Angular");
var react = document.getElementById("React");
var node = document.getElementById("Node");
var sql = document.getElementById("SQL");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove("hide");
  } else {
    mybutton.classList.add("hide");
  }
  if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
    html.classList.add("advanced");
    css.classList.add("advanced");
    js.classList.add("advanced");
    angular.classList.add("upper");
    react.classList.add("intermedian");
    node.classList.add("intermedian");
    sql.classList.add("intermedian");
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
