import Scrollbar from 'smooth-scrollbar';

// var Options ={}
Scrollbar.init(document.querySelector('#my-scrollbar'), Options);


// ========= image changing on click ========

function changeImage(fileName){
    let img = document.getElementById('main_img')
    img.setAttribute("src", fileName)
}

// ====== hamburger =====

const hamburger = document.getElementById('hamburger')
const navUl = document.getElementById('nav-ul')

hamburger.addEventListener('click', ()=>{
    navUl.classList.toggle('.show')
})

// console.log(mainImage)