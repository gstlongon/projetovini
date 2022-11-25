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