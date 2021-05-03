

// function startBlockSlider () {

// }



const mobileNavBlock = document.querySelector('.mobile-nav')
const mobileNavBtn = document.querySelector('.mobile-nav-btn')
mobileNavBtn.addEventListener('click',() => {
    mobileNavBtn.classList.toggle('active-nav-btn')
    mobileNavBlock.classList.toggle('active-mobile-nav')
})


//slider
const root = document.documentElement;
const sliderElementsDisplayed = getComputedStyle(root).getPropertyValue("--slider-elements-displayed");
const sliderContent = document.querySelector("ul.slider-content");

root.style.setProperty("--slider-elements", sliderContent.children.length);

for(let i=0; i<sliderElementsDisplayed; i++) {
    sliderContent.appendChild(sliderContent.children[i].cloneNode(true));
}