
let times =document.getElementById('times')
let menu =document.getElementById('menu')
let links = document.querySelector('.links')

menu.addEventListener('click',function(){
    links.classList.add('active')
})
times.addEventListener('click',function(){
    links.classList.remove('active')
})



// fixed navbar
let navbar = document.querySelector('.navbar .wrap');
window.onload= () =>{
    let navH = navbar.getBoundingClientRect().height;
    let scrHi = window.pageYOffset;
    console(scrHi)
    if(navH < scrHi){
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('fixed-nav')
    }
}
