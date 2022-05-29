var dropdown = document.querySelector(".dropdown");
var show = document.querySelector(".dropdown-content");

dropdown.onclick = function(){
    show.classList.toggle("show");
}