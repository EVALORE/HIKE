export const carousel = () => {
  const carousel = document.querySelector('.carousel')
  const item = carousel.querySelectorAll('.card')[0]

  const arrowLeft = document.querySelector('.arrow-left')
  const arrowRight = document.querySelector('.arrow-right')

  const dot = document.querySelectorAll('.dot')
  let itemWidth = item.offsetWidth

  carousel.scrollLeft = -carousel.scrollWidth

  function check() {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth
    arrowLeft.style.visibility = carousel.scrollLeft == 0 ? 'hidden' : 'visible'
    arrowRight.style.visibility =
      carousel.scrollLeft == scrollWidth ? 'hidden' : 'visible'
  }

  check()

  arrowRight.addEventListener('click', () => {
    carousel.scrollLeft += (itemWidth + 20) * 4
    check()
  })

  arrowLeft.addEventListener('click', () => {
    carousel.scrollLeft += -((itemWidth + 20) * 4)
    check()
  })
}
