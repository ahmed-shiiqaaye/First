window.addEventListener('load',function(){
    this.window.prevetDefault();
})

let times =document.getElementById('times')
let menu =document.getElementById('menu')
let links = document.querySelector('.links')

menu.addEventListener('click',function(){
    links.classList.add('active')
})
times.addEventListener('click',function(){
    links.classList.remove('active')
})