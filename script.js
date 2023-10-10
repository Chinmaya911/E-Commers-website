const header = docoment.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", this.window.scrollY >0);
})

let menu = docoment.querySelector("#menu-icon");
let navmenu = docoment.querySelector(".navmenu");

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}