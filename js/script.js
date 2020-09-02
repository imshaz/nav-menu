var hamburger = document.querySelector("div.hamburger");
var menu = document.querySelector("ul.menu")
hamburger.addEventListener("click", function () {

    menu.classList.toggle("show")
})

