document.querySelectorAll('.works__link').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.works__link').forEach(function (btn) {
      btn.classList.remove('works__link_active')
    });
    e.currentTarget.classList.add('works__link_active');

    document.querySelectorAll('.works__tabs').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('works__tabs_active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('works__tabs_active');
  });
});
