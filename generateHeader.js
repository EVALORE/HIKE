'use strict';

const generateHeader = () => {
    const headerHTML = `
        <nav class="nav container">
            <a href="index.html"><img class="nav__logo" src="img/icons/H!KE.svg" alt="logo"></a>
            <div class="nav__links">
                <p class="nav__link"><a href="catalog.html">Рюкзаки</a></p>
                <p class="nav__link"><a href="catalog.html">Аксессуары</a></p>
                <p class="nav__link"><a href="#footer">Контакты</a></p>
                <p class="nav__link"><a href="about.html">О нас</a></p>
            </div>
            <div class="nav__links__second">
                <a href="cart.html"><img src="img/icons/Buy.svg" alt="" class="nav__cart"></a>
                <a href="login.html"><img src="img/icons/Profile.svg" alt="" class="nav__profile"></a>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

generateHeader();