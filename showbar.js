const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const container = document.querySelector('.card:last-child')

const mainSlide = document.querySelector('.show-bar')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0


upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`   
}