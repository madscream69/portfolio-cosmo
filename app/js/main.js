const burgerBtn = document.querySelector('.header__burger-btn');
burgerBtn.addEventListener('click', () => {
    document
        .querySelector('.header__menu')
        .classList.toggle('header__menu--open');
});
