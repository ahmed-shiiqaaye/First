
let times =document.getElementById('times')
let menu =document.getElementById('menu')
let links = document.querySelector('.links')

menu.addEventListener('click',function(){
    links.classList.toggle('active')
})
times.addEventListener('click',function(){
    links.classList.remove('active')
})



// fixed navbar
let navbar = document.querySelector('.navbar');
// console.log(navbar)
window.addEventListener('scroll',()=>{
    let navH = navbar.getBoundingClientRect().height;
    let scrHi = window.pageYOffset;
    // console.log(navH)
    // coole.log(scrHi)
    if(scrHi > navH){
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('fixed-nav')
    }
})

let copyRightDate = document.getElementsByClassName('date')[0];
let now = new Date().getFullYear();
copyRightDate.textContent = now


