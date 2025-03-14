import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { stepsSlider } from "./components/steps-slider";
import { accordion } from "./components/accordion";
import { hiddenText } from "./components/hiddenText";
import { videoModal } from "./components/video-modal";

document.addEventListener("DOMContentLoaded", async () => {
    stepsSlider();
    accordion();
    hiddenText();
    videoModal();
});
