// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')
import Fullburger from 'fullburger';
import 'fullburger/style';
const fullBurger = new Fullburger('.fullburger');
fullBurger.init();

import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper(".block__swiper", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

}
});