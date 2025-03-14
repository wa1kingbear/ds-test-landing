import Swiper from "swiper";
import { Pagination } from "swiper/modules";

export const stepsSlider = () => {
    const slides = document.querySelectorAll(".steps-slider__slide");
    slides.forEach((slide, index) => {
        const numEl = slide.querySelector(
            ".step-slide__content__title__num span"
        );
        if (numEl) {
            numEl.textContent = `${index < 10 ? 0 : ""}${index + 1}`;
        }
    });
    new Swiper(".steps-slider", {
        modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".steps-slider__pagination",
            horizontalClass: "steps-slider__pagination__horizontal",
            bulletClass: "steps-slider__pagination__bullet",
            bulletActiveClass: "steps-slider__pagination__bullet__active",
            clickable: true,
        },
    });
};
