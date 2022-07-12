let burger = document.querySelector('.header__btn-burger');
let menu = document.querySelector('.header-nav__list');
let menuLinks = document.querySelectorAll('.header-nav__link');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header-nav__list--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header-nav__list--active');
    document.body.classList.remove('stop-scroll');
  })
})


