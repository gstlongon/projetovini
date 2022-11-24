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

function actingShow() {
    const acting = document.querySelectorAll('.acting-page__select-box')

    acting.forEach(item => { item.addEventListener('click', () => {
        item.classList.toggle('active')})
     })
  }

  actingShow()