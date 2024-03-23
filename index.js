//for typing text//
var type=new Typed(".auto-typed",{
    strings:["FullStack Developer ","Coder","Engineering student"],
    typeSpeed:150,
    backspeed:150,
    loop:true
})

//circle skills
const circles =document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots =elem.getAttribute("data-dots");
    var marked =elem.getAttribute("data-percent");
    var percent =Math.floor(dots*marked/100);
    var points ="";
    var rotate =360/dots;

    for(let i=0;i<dots ;i++){
        points+=` <div class="points" style="--i:${i};--rot:${rotate}deg"></div>`
    }
    elem.innerHTML=points;
    const pointsMarked =elem.querySelectorAll('.points');
    for(let i=0;i<percent;i++){
        pointsMarked[i].classList.add('marked')
    }
})
//active menu//
let menuLi =document.querySelectorAll('header nav a');
let section=document.querySelectorAll('section');
function activeMenu(){
    let len=section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

//sticky navbar////
const header =document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>50)
})

/////toogle icon navbar/////

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

window.onscroll = () => {
    if (navbar.classList.contains("open")) { // Check if navbar is open
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("open");
    }
}



// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// menuIcon.onclick =()=> {
//     menuIcon.classList.toggle("bx-x");
//     navbar.classList.toggle("open");
// }
// window.onscroll =()=>{
//     menuIcon.classList.remove("bx-x");
//     navbar.classList.remove("open");
// }
