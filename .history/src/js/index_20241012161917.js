// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')
import Fullburger from 'fullburger';
import 'fullburger/style';
const fullBurger = new Fullburger('.fullburger');
fullBurger.init();

const swiper = new swiper('.block__swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });