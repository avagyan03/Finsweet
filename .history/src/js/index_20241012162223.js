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


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

}
});