import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './style.scss';

declare global {
    interface Window {
        initMap(): any;
    }
}


let serviceSplide = new Splide(".splide", {
    type: "loop",
    autoplay: true,
    perPage: 3,
    perMove: 1,
    breakpoints: {
        840: {
            perPage: 2
        },
        560: {
            perPage: 1
        }
    }
})


function init() {
    const pos = { lat: -25.344, lng: 131.036 };
    const map = new google.maps.Map(
        document.querySelector(".map-area") as HTMLElement, {
        zoom: 8,
        center: pos
    }
    )

    new google.maps.Marker({
        position: pos,
        map
    })

}

function setupMobile() {
    let mobileBurger = document.querySelector(".menu-open") as HTMLElement;
    let menuCloser = document.querySelector(".btn-close") as HTMLElement;
    let mobileMenu = document.querySelector(".mobile-header") as HTMLElement;

    menuCloser.onclick = (ev) => {
        mobileMenu.setAttribute("data-open", "false");
    }

    mobileBurger.onclick= (ev) => {
        mobileMenu.setAttribute("data-open", "true");
    }
}

window.initMap = init;

document.addEventListener("DOMContentLoaded", () => {
    setupMobile();
    serviceSplide.mount();
    init();
})