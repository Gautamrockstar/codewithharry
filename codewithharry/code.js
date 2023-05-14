let typed = new Typed(".autoType", {
    strings: ["JavaScripts", "PHP", "Web Development", "DSA", "Machine Language","C++",],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
} );

////////////////////////////////// burger menu/////////////////

let burgerMenu = document.querySelector(".burger");
let listMenu = document.querySelector(".menu-list")
burgerMenu.addEventListener("click", ()=>{
    listMenu.classList.toggle("v-class");
})
