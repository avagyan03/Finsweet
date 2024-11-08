// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')
import Fullburger from 'fullburger';
import 'fullburger/style';
const fullBurger = new Fullburger('.fullburger');
fullBurger.init();

const swiper = new Swiper('.block__swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
  
    navigation: {
      nextEl: '.about__img--next',
      prevEl: '.swiper-button-prev',
    },
  });