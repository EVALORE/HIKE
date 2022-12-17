export const carousel = () => {
  const carousel = document.querySelector('.carousel')
  const item = carousel.querySelectorAll('.card')[0]

  const arrowLeft = document.querySelector('.arrow-left')
  const arrowRight = document.querySelector('.arrow-right')

  const dotsNav = document.querySelector('.dots')
  const dots = Array.from(dotsNav.children)

  const itemWidth = item.offsetWidth
  const slideWidth = (itemWidth + 20) * 4

  function dotMoveSlide(a) {
    carousel.scrollLeft = slideWidth * a
  }

  function dotChange(active, target) {
    active.classList.remove('active')
    target.classList.add('active')
  }

  function check() {
    const activeDot = dotsNav.querySelector('.active')
    const index = dots.indexOf(activeDot)

    arrowLeft.style.visibility = index == 0 ? 'hidden' : 'visible'
    arrowRight.style.visibility = index < dots.length - 1 ? 'visible' : 'hidden'
  }

  check()
  arrowRight.addEventListener('click', () => {
    const activeDot = dotsNav.querySelector('.active')
    const nextDot = activeDot.nextElementSibling
    carousel.scrollLeft += slideWidth

    dotChange(activeDot, nextDot)
    check()
  })

  arrowLeft.addEventListener('click', () => {
    const activeDot = dotsNav.querySelector('.active')
    const prevDot = activeDot.previousElementSibling
    carousel.scrollLeft += -slideWidth

    dotChange(activeDot, prevDot)
    check()
  })

  dotsNav.addEventListener('click', (e) => {
    const targetDot = e.target.closest('.dot')

    if (!targetDot) return

    const activeDot = dotsNav.querySelector('.active')
    const targetIndex = dots.findIndex((dot) => dot === targetDot)

    
    dotMoveSlide(targetIndex)
    dotChange(activeDot, targetDot)
    check()
  })
}
