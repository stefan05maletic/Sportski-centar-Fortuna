
let navbar = document.querySelector(".navbar");
let menu = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

menu.addEventListener("click", function(){
    navbar.classList.add("active2");
})
closeBtn.addEventListener("click", function(){
    navbar.classList.remove("active2");
})