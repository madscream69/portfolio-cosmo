const burgerBtn = document.querySelector('.header__burger-btn');
burgerBtn.addEventListener('click', () => {
    document
        .querySelector('.header__menu')
        .classList.toggle('header__menu--open');
});

document.querySelector('footer__bottom-copy').innerHTML =
    +new Date().getFullYear() + ' &copy; <a href="#">cosmologik.ru</a> ';
