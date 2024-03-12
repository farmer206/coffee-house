import {menuBurger, menuNav} from './burgerMenu.module';

const menuLinks = document.querySelectorAll('.menu__text[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
    
        if (menuBurger.classList.contains('active')) {
            document.body.classList.remove('_lock');
            menuBurger.classList.remove('active');
            menuNav.classList.remove('_active');
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth",
            block: "start"
        });
        e.preventDefault();
    }
  }
}