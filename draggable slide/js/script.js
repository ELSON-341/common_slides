'use strict'
const sliderContainer = document.querySelector('.container')
const innerSlider = document.querySelector('.slider')

const images = ["img/image-1.jpg", "img/image-2.jpg", "img/image-3.jpg", "img/image-4.jpg"]

const events = {
    mouse: {down: "mousedow", move: "mousemove", up: "mouseup" },
    touch: {down: "touchstart", move: "touchmove", up: "touchend"}
}
