
const burger = document.querySelector('.burgerContainer');
const nav1=document.querySelector('.nav1');

console.log(nav1);
console.log(burger)

burger.addEventListener("click",(e)=>{
    console.log(e.target);
  nav1.classList.toggle('nav1-resp');  
})