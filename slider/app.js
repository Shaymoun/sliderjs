const photo = document.querySelector('.photo')
const arrow_left = document.querySelector('.arrow_left')
const arrow_right = document.querySelector('.arrow_right')

let imgIndex = 0;
const sources = ['car','cat','birds']
photo.setAttribute('src',`./img/${sources[imgIndex]}.png`)

arrow_left.addEventListener('click', ()=>{
    imgIndex--;
    if(imgIndex < 0) {
        imgIndex = sources.length - 1
    }
    photo.removeAttribute('src')
    photo.setAttribute('src',`./img/${sources[imgIndex]}.png`)
})

arrow_right.addEventListener('click', ()=>{
    imgIndex++;
    if(imgIndex > 2) {
        imgIndex = 0
    }
    photo.removeAttribute('src')
    photo.setAttribute('src',`./img/${sources[imgIndex]}.png`)
})

