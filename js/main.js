const loader = document.querySelector('.ui__preloader')
window.addEventListener('load', () => {
    loader.style.display = "none"
}
)


const nav = document.querySelector('.nav__menu')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}



const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
    
  })

  const actingSwiper = new Swiper('.swiper-acting', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-acting-pagination'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    mousewheel: true,
    keyboard: true,
    loop: true
    
  })

  function selectShow() {
    const select = document.querySelectorAll('.question__select-box')

    select.forEach(item => { item.addEventListener('click', () => {
        item.classList.toggle('active')})
     })
  }

  selectShow()

  const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
    backToTop()
  })