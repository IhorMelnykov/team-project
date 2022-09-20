(() => {
  const refs = {
    openMobilBtn: document.querySelector('[data-menu-open]'),
    closeMobilBtn: document.querySelector('[data-menu-close]'),
    mobil: document.querySelector('[data-menu'),
    body: document.querySelector('body'),
  };
  refs.openMobilBtn.addEventListener('click', toggleMobil);
  refs.closeMobilBtn.addEventListener('click', toggleMobil);
  function toggleMobil() {
    refs.mobil.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
