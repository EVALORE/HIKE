'use strict';

const generateFooter = () => {
    const footerHTML = `
        <footer class="footer" id='footer'>
            <div class="footer__first">
                <div class="footer__first-inner container">
                    <div class="footer__first-content">
                        <img src="img/icons/footer_fig.svg" alt="">
                        <p>@HIKE_PROD</p>
                        <img src="img/footer.png" alt="">
                    </div>
                    <div class="footer__first-content2">
                        <p>hike_prod@gmail.com</p>
                        <p>022 000 444</p>
                        <img src="img/icons/footer_fig.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="footer__second">
                <div class="footer__second-inner container">
                    <img src="img/icons/!k.svg" alt="">
                    <div class="footer__second-content">
                        <div class="first__column">
                            <h2>Меню</h2>
                            <ul>
                                <li><a href="cart.html">Корзина</a></li>
                                <li><a href="profile-data.html">Кабинет</a></li>
                                <li><a href="catalog.html">Рюкзаки</a></li>
                                <li><a href="catalog.html">Аксессуары</a></li>
                                <li><a href="about.html">О нас</a></li>
                            </ul>
                        </div>
                        <div class="second__column">
                            <h2>Контакты</h2>
                            <ul>
                                <li>067-771-110</li>
                                <li>022-000-444</li>
                                <li>hike_prod@gmail.com</li>
                                <li>ул. Унирий 7</li>
                            </ul>
                        </div>
                        <div class="third__column">
                            <h2>Расположение showroom’а</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174147.87650780866!2d28.718093435435854!3d46.99978363574422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2z0JrQuNGI0LjQvdGR0LI!5e0!3m2!1sru!2s!4v1619281817383!5m2!1sru!2s" style="border:0;" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
};

generateFooter();