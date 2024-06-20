const burgerBtn = document.querySelector('.header__burger-btn');
burgerBtn.addEventListener('click', () => {
    document
        .querySelector('.header__menu')
        .classList.toggle('header__menu--open');
});

document.querySelector('footer__bottom-copy').innerHTML =
    +new Date().getFullYear() + ' &copy; <a href="#">cosmologik.ru</a> ';

function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
    document
        .querySelector('.article-items__dropbtn')
        .classList.toggle('show-btn');
}
function getParent(el) {
    if (el.parentElement) {
        return el.parentElement;
    }

    if (el.parentNode) {
        return el.parentNode;
    }

    return null;
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
    if (!event.target.matches('.article-items__dropbtn')) {
        console.log('mino');
        var dropdowns = document.getElementsByClassName(
            'article-items__dropdown-content'
        );
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                document
                    .querySelector('.article-items__dropbtn')
                    .classList.remove('show-btn');
            }
        }
    }
};
