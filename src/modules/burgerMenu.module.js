const menuBurger = document.querySelector('.humburger');
const menuNav = document.querySelector('.menu');

if (menuBurger) {
  menuBurger.addEventListener('click', function(e) {
    document.body.classList.toggle('_lock');
    menuBurger.classList.toggle('active');
    menuNav.classList.toggle('_active');
  })
}

export {menuBurger, menuNav};