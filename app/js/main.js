const burgerBtn = document.querySelector('.header__burger-btn');
burgerBtn.addEventListener('click', () => {
    document
        .querySelector('.header__menu')
        .classList.toggle('header__menu--open');
});

// document.querySelector('footer__bottom-copy').innerHTML =
//     +new Date().getFullYear() + ' &copy; <a href="#">cosmologik.ru</a> ';

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
// window.onclick = function (event) {
//     if (!event.target.matches('.article-items__dropbtn')) {
//         console.log('mino');
//         var dropdowns = document.getElementsByClassName(
//             'article-items__dropdown-content'
//         );
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//                 document
//                     .querySelector('.article-items__dropbtn')
//                     .classList.remove('show-btn');
//             }
//         }
//     }
// };
//потом надо будет сделать возможность убрать звезды
document
    .querySelector('.conclusion__star-box')
    .addEventListener('click', function (e) {
        let stars = document.querySelectorAll('.fa-star');
        let rate = +e.target.dataset.rate;
        for (let i = 0; i < rate; i++) {
            // console.log(stars[i]);
            stars[i].classList = '';
            stars[i].classList = 'fa-solid fa-star checked';
        }

        // stars.forEach((item) => {
        //     item.classList
        //     console.log(item);
        // });
    });
new SimpleBar(document.querySelector('.conclusion__recomendation-list'), {
    autoHide: false,
});

lightGallery(document.getElementById('lightgallery'), {
    // plugins: [lgZoom, lgThumbnail],
    licenseKey: 'your_license_key',
    speed: 500,
    // ... other settings
});
lightGallery(document.getElementById('lightgallery2'), {
    // plugins: [lgZoom, lgThumbnail],
    licenseKey: 'your_license_key',
    speed: 500,
    // ... other settings
});
var swiper = new Swiper('.main-content__swiper', {
    slidesPerView: 4,
    spaceBetween: 16,
    // centeredSlides: true,
    // cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
});
