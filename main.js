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