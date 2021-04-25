

// function startBlockSlider () {

// }



const mobileNavBlock = document.querySelector('.mobile-nav')
const mobileNavBtn = document.querySelector('.mobile-nav-btn')
mobileNavBtn.addEventListener('click',() => {
    mobileNavBtn.classList.toggle('active-nav-btn')
    mobileNavBlock.classList.toggle('active-mobile-nav')
})