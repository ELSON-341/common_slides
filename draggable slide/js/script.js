'use strict'
const sliderContainer = document.querySelector('.container')
const innerSlider = document.querySelector('.slider')

const images = ["img/image-1.jpg", "img/image-2.jpg", "img/image-3.jpg", "img/image-4.jpg"]

const events = {
    mouse: {down: "mousedow", move: "mousemove", up: "mouseup" },
    touch: {down: "touchstart", move: "touchmove", up: "touchend"}
}

let deviceType = ''

function isTouchDevice {
    try {
        document.createEvent('TouchEvent')
        deviceType = 'touch'
        return true
    } catch(e) {
        deviceType = 'mouse'
        return false
    }
}

function slideGenerator() {
    images.forEach((image) => {
        const slide = document.createElement('div')
        slide.classList.add('slide')
        slide.innerHTML = `< img src=${image} class="image">`
        innerSlider.appendChild(slide)
    })
}

innerSlider.style.gridTemplateColumns = `repeat(${images.length}, 1fr)`

function handleDown(e) {
    const active = true
    const clienX = e.touches ? e.touches[0].clienX : e.clienX 
    const containerRect = sliderContainer.getBoundingClientRect()
    const sliderRect = innerSlider.getBoundingClientRect()
    startX = clienX - (sliderRect.left - containerRect.left) 
    sliderContainer.style.cursor = "grabbing"
}