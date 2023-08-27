const images = ['https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80','https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'];

const singleImage = document.querySelector('.single-img');
const img = document.querySelector('.img')
const dots = document.querySelector('.dots')
let currentIndex = 0;

function renderImg(index){
    img.src = images[index];
    img.style.transition = `all .5s ease`
}

function createDots(){
    images.forEach((item) => {
        const dot = document.createElement('div');
        dot.classList.add('dot')
        dots.appendChild(dot)
    })
}
createDots()

const allDot = document.querySelectorAll('.dot');
allDot.forEach((item,index,arr) => {
    item.addEventListener('click', () => {
        allDot.forEach(item => item.style.backgroundColor = 'transparent')
    item.style.backgroundColor = 'white'
    currentIndex = index
        renderImg(currentIndex)
    })
})

document.addEventListener("DOMContentLoaded", (event) => {
    setInterval(() => {
        renderImg(currentIndex)
        allDot.forEach(item => item.style.backgroundColor = 'transparent')
        allDot[currentIndex].style.backgroundColor = 'white'
        currentIndex++
        if(currentIndex < 0){
            currentIndex = images.length -1;
        }
        if(currentIndex > images.length -1){
            currentIndex = 0;
        }
        
    },2000)
  });