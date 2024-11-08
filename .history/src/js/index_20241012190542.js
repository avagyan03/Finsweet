
import Fullburger from 'fullburger';
import 'fullburger/style';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';




const fullBurger = new Fullburger('.fullburger');
// fullBurger.init();

const swiper = new Swiper(".about__swiper", {
    modules: [Navigation],

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

}
});