const overlay = document.querySelector('#overlay');
const menu = document.querySelector('#menu');
const toggleMenu = document.querySelector('#toggleMenu');
const closeMenu = document.querySelector('#closeMenu');

toggleMenu.addEventListener('click', () => {
  menu.classList.add('w-2/3');
  overlay.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('w-2/3');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('w-2/3');
  overlay.classList.add('hidden');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    menu.classList.remove('w-2/3');
    overlay.classList.add('hidden');
  }
});
