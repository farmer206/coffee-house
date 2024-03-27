import {menuBurger, menuNav} from './burgerMenu.module';

const menuLinks = document.querySelectorAll('.menu__text');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  
  function onMenuLinkClick() {
    if (menuBurger.classList.contains('active')) {
      document.body.classList.remove('_lock');
      menuBurger.classList.remove('active');
      menuNav.classList.remove('_active');
    }
  }
}