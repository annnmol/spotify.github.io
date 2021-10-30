// let leftscroll = document.getElementById('leftscroll');
// let rightscroll = document.getElementById('rightscroll');
// let album = document.getElementById('album');

let album = document.querySelector('.album').children;
let leftscroll = document.querySelector('.leftscroll');
let rightscroll = document.querySelector('.rightscroll');



// leftscroll.addEventListener('click',()=>{
    
//     leftscroll.style.opacity = 0;
    
    
// })


leftscroll.onclick=function () {
    console.log("hello");
    prev("prev");
}


function prev(direction) {
    
}


rightscroll.addEventListener('click',()=>{
    
    rightscroll.style.opacity = 0;
})