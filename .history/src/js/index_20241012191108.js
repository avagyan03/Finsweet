
import Fullburger from 'fullburger';
import 'fullburger/style';
const fullBurger = new Fullburger('.fullburger');
// fullBurger.init();


function slider(elem) {
    const slider = document.querySelector(`[data-slider="${elem}"]`);

    console.log("slider", slider);


    const sliderList = slider.querySelector(".slider__list");

    const sliderSlides = slider?.querySelectorAll(".slider__slide");

    const sliderButtonPre = slider.querySelector(".slider__button_prev");
    console.log("slider", sliderButtonPre);


    const sliderButtonnext = slider.querySelector(".slider__button_next");
    console.log("slider", sliderButtonnext);
    console.log("sliderSlides", sliderSlides);


    sliderSlides.forEach(slide => {
        console.log("slide", slide);

        sliderButtonPre.addEventListener("click", () => {
            console.log("click pre");

            sliderList.scrollBy({
                left: -slide.offsetWidth,
                behavior: "smooth",
            });
        });


        sliderButtonnext.addEventListener("click", () => {
            console.log("click next");

            sliderList.scrollBy({
                left: slide.offsetWidth,
                behavior: "smooth",
            });

            if (Math.floor(sliderList.scrollLeft) === sliderList.scrollWidth - sliderList.offsetWidth) {
                sliderList.scrollLeft = 0;
            }
        });
    });

    return slider;
};


slider("about");