var modal_button = document.querySelector(".adress-feedback__button");
var modal_window = document.querySelector(".modal-feedback");
var modal_close = document.querySelector(".modal-feedback__close");
var overlay = document.querySelector(".overlay");
var slider_radio1 = document.querySelector(".slider__radio--1");
var slider_radio2 = document.querySelector(".slider__radio--2");
var slider_radio3 = document.querySelector(".slider__radio--3");
var bg = document.querySelector(".page");
var slide1 = document.querySelector(".slider__slide--1");
var slide2 = document.querySelector(".slider__slide--2");
var slide3 = document.querySelector(".slider__slide--3");

//Форрма обратной связи
modal_button.addEventListener("click", function(event) {
  event.preventDefault();
  modal_window.classList.add("modal-feedback--show");
  overlay.classList.add("overlay--show");
});

modal_close.addEventListener("click", function(event) {
  event.preventDefault();
  modal_window.classList.remove("modal-feedback--show");
  overlay.classList.remove("overlay--show");
});

//Слайдер
slider_radio1.addEventListener("click", function(event) {
  bg.classList.add("page--ice1");
  bg.classList.remove("page--ice2");
  bg.classList.remove("page--ice3");
  slide1.classList.remove("slider__slide--hiden");
  slide2.classList.add("slider__slide--hiden");
  slide3.classList.add("slider__slide--hiden");
});

slider_radio2.addEventListener("click", function(event) {
  bg.classList.add("page--ice2");
  bg.classList.remove("page--ice1");
  bg.classList.remove("page--ice3");
  slide2.classList.remove("slider__slide--hiden");
  slide1.classList.add("slider__slide--hiden");
  slide3.classList.add("slider__slide--hiden");
});

slider_radio3.addEventListener("click", function(event) {
  bg.classList.add("page--ice3");
  bg.classList.remove("page--ice1");
  bg.classList.remove("page--ice2");
  slide3.classList.remove("slider__slide--hiden");
  slide2.classList.add("slider__slide--hiden");
  slide1.classList.add("slider__slide--hiden");
});

//Yandex map API
ymaps.ready(init);
var GllacyMap,
  IceMark;

function init() {

  GllacyMap = new ymaps.Map("map", {
    center: [59.938880, 30.325865],
    zoom: 17
  });

  IceMark = new ymaps.Placemark([59.938631, 30.323055], {
    hintContent: 'Gllacy',
  }, {
    iconLayout: "default#image",
    iconImageHref: "./img/map_placemark.png",
    iconImageSize: [80, 140],
    iconImageOffset: [-40, -140]
  });

  GllacyMap.geoObjects.add(IceMark);
}
