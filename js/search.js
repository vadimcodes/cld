let openForm = document.querySelector('.header__search-btn');
let formSearch = document.querySelector('.header-search');
let btnClosed = document.querySelector('.header-search__closed');

openForm.addEventListener('click',

  function () {
    formSearch.classList.toggle('header-search--active');
  })

btnClosed.addEventListener('click',
  function () {
    formSearch.classList.remove('header-search--active');
  })

