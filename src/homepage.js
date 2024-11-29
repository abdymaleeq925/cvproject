document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.header__burger'),
          navLink = document.querySelector('.burger-menu'),
          header = document.getElementsByClassName('header')[0],
          arrowUp = document.querySelector('.go-to-up');
          
    burgerMenu.addEventListener('click', () => {
        navLink.classList.toggle('show-menu');
        burgerMenu.classList.toggle('close-burger');
    });

    window.onscroll = function () {
        if (window.scrollY > 100) {
            header.classList.add('fixed');
            arrowUp.classList.add('scrollTop');
        }
        else {
            header.classList.remove('fixed');
            arrowUp.classList.remove('scrollTop');
        }
    };

    arrowUp.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});