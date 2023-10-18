let box = document.querySelector('.box')
let amount = 696


for(let i = 0; i < amount;i++) {
    let item = document.createElement('div')
    item.classList.add('item')
    box.append(item)
    item.addEventListener('mouseover', () => setColor(item) )
    item.addEventListener('mouseleave', () => removeColor(item) )
}

function setColor(el) {
    el.style.background = randomColor()
}

function removeColor(el) {
    el.style.background = ''
}

function randomColor() {
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}