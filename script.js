var btn = document.querySelector(".menu");
var nav = document.querySelector(".nav-items-sm");

const handelMenu = () =>{
    (nav.style.left=="0px")?nav.style.left="-600px":nav.style.left="0px";
}