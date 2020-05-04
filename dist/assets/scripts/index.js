// import $ from 'jquery'
// import slick from 'slick-carousel'

function init() {
    // sliders init start
    $('.js-apartments__sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false,
        dots: true,
        dotsClass: 'main-apartments__dots'
    });

    $('.js-infrastructure__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // fade: true,
        arrows: true,
        prevArrow: '<img class="main-infr__arrow-left" src="./assets/images/icon/Arrow.png" alt="arrow">',
        nextArrow: '<img class="main-infr__arrow-right" src="./assets/images/icon/Arrow.png" alt="arrow">',
        dots: true,
        dotsClass: 'main-infrastructure__dots',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });
    $('.js-gallery__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // adaptiveHeight: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: '<img class="gallery__slider__arrow-left" src="./assets/images/icon/Arrow.png" alt="arrow">',
      nextArrow: '<img class="gallery__slider__arrow-right" src="./assets/images/icon/Arrow.png" alt="arrow">',
      dots: false,
      asNavFor: '.js-gallery__slider-mini',
    });
    $('.js-single-news__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // adaptiveHeight: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: '<img class="gallery__slider__arrow-left" src="./assets/images/icon/Arrow.png" alt="arrow">',
      nextArrow: '<img class="gallery__slider__arrow-right" src="./assets/images/icon/Arrow.png" alt="arrow">',
      dots: false,
    });

    $('.js-gallery__slider-mini').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      focusOnSelect: true,
      centerMode: true,
      arrows: false,
      dots: false,
      centerPadding: '0px',
      // swipeToSlide: true,
      asNavFor: '.js-gallery__slider',
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 3
              }
          },
      ]
    });
    // sliders init end

    $('.js-apart-tabs__button').on('click', tabs);

    $('.js-menu__toggle').on('click', function () {
        let menu = $('.js-menu');
        let header = $('.js-open__menu');
        menu.hasClass('active') ? menu.removeClass('active') :  menu.addClass('active');
        header.hasClass('menu__active') ? header.removeClass('menu__active') : header.addClass('menu__active');
    });

    $('.js-repair__desc').on('click','.js-repair__desc__button', function (e) {
      $('.repair__popup__img').attr('src',this.dataset.img);
      $('.js-repair__popup').addClass('active');
    });

    $('.js-repair__popup-close').on('click',function (){
      $('.js-repair__popup').removeClass('active');
    });
    $('.js-image__popup').magnificPopup({
        type: 'image',
    });

    $('.js-mouse-scroll').on('click',function (e) {
        e.preventDefault();
        $("html").animate({scrollTop: $('.main-first-screen').height()}, 600)
    });

    $('body').on('click','.construction__section-link', function () {
      let current = this.dataset.num - 1;
      $.ajax({
        url:'./static/imgReturner.php',
        data: {id:$(this).data('id')},
        success: function (response) {
        $('.construction__popup').html('').append(response);
          $('.construction__popup a').magnificPopup({
            type: 'image',
            gallery:{
               enabled:true
            },
          }).magnificPopup('open', current);
        }
      })
    });

    $('body').on('click','.js-call',function () {
      $('.js-call__popup').css({'transform':'scale(1, 1)'});
    });


    $('.js-form__close').on('click',function () {
      $('.js-call__popup').css({'transform':'scale(0.5,0)'});
    });


  $('.js-select__items').on('click','label', function () {
    let el = $(this);
    if(!el.checked){
      $(".select-bg").click();
      // get запросс для получения данных по параметрам
      // function(){}
    }
  });

  $('.js-video__play').on('click',function () {
    $('.js-video__popup-vd').attr({"src":this.dataset.url});
    $('.js-video__popup').addClass('active');

  });
  $('.js-video__popup-close').on('click',function () {
    $('.js-video__popup').removeClass('active');
  });
    paralax();
    setTimeout(function () {
        $('.preloader').css('display','none');
    },2500)
}
function initMap() {
  var contentTranslate = [{
    ru: "<p class='content'>Украина, c. Гатне, ул. Свободы 1</p>",
    ua: "<p class='content'>Україна, c. Гатне, вул. Свободи, 1</p>"
  }];
  var languageDetector = () => {
    if (window.location.pathname.match(/\/ru\//)) {
      return 'ru';
    } else {
      return 'ua';
    }
  };
  var uluru = {
    lat: 50.360000,
    lng: 30.409135
  };
  var map = new google.maps.Map(document.getElementById('js-contact__map'), {
    zoom: 13,
    center: uluru,
    streetViewControl: false,
    // disableDefaultUI: true,
  });


  var content = contentTranslate[0][languageDetector()];
  // var content = "<p class='content'>Украина, г. Киев, ул. Ильинская 12</p>";
  var infowindow = new google.maps.InfoWindow({
    content: '',
    maxWidth: 500
  });
  // var styleMap = [
  //   {
  //   "featureType": "water",
  //   "elementType": "geometry",
  //   "stylers": [{
  //     "color": "#9CCED6"
  //   }, {
  //     "lightness": 17
  //   }]
  // }, {
  //   "featureType": "landscape",
  //   "elementType": "geometry",
  //   "stylers": [{
  //     // "color": "#e4e4e4"
  //     "color": "#F2F3F4"
  //   }, {
  //     "lightness": 20
  //   }]
  // }, {
  //   "featureType": "landscape.man_made",
  //   "elementType": "geometry.stroke",
  //   "stylers": [{
  //     "color": "#b9b9b9"
  //   }, {
  //     "lightness": 20
  //   }]
  // }, {
  //   "featureType": "road.highway",
  //   "elementType": "geometry.fill",
  //   "stylers": [{
  //     "color": "#ffffff"
  //   }, {
  //     "lightness": 17
  //   }]
  // }, {
  //   "featureType": "road.highway",
  //   "elementType": "geometry.stroke",
  //   "stylers": [{
  //     "color": "#ffffff"
  //   }, {
  //     "lightness": 29
  //   }, {
  //     "weight": 0.2
  //   }]
  // }, {
  //   "featureType": "road.arterial",
  //   "elementType": "geometry",
  //   "stylers": [{
  //     "color": "#ffffff"
  //   }, {
  //     "lightness": 18
  //   }]
  // }, {
  //   "featureType": "road.local",
  //   "elementType": "geometry",
  //   "stylers": [{
  //     "color": "#ffffff"
  //   }, {
  //     "lightness": 16
  //   }]
  // }, {
  //   "featureType": "poi",
  //   "elementType": "geometry",
  //   "stylers": [{
  //     "color": "#f5f5f5"
  //   }, {
  //     "lightness": 21
  //   }]
  // }, {
  //   "featureType": "poi.park",
  //   "elementType": "geometry",
  //   "stylers": [{
  //     "color": "#dedede"
  //   }, {
  //     "lightness": 21
  //   }]
  // }, {
  //   "elementType": "labels.text.stroke",
  //   "stylers": [{
  //     "visibility": "on"
  //   }, {
  //     "color": "#ffffff"
  //   }, {
  //     "lightness": 16
  //   }]
  // }, {
  //   "elementType": "labels.text.fill",
  //   "stylers": [{
  //     "saturation": 36
  //   }, {
  //     "color": "#333333"
  //   }, {
  //     "lightness": 40
  //   }]
  // }, {
  //   "elementType": "labels.icon",
  //   "stylers": [{
  //     "visibility": "off"
  //   }]
  // }, {
  //   "featureType": "transit",
  //   "elementType": "geometry",
  //   "stylers": [{
  //     "color": "#f2f2f2"
  //   }, {
  //     "lightness": 19
  //   }]
  // }, {
  //   "featureType": "administrative",
  //   "elementType": "geometry.fill",
  //   "stylers": [{
  //     "color": "#fefefe"
  //   }, {
  //     "lightness": 20
  //   }]
  // }, {
  //   "featureType": "administrative",
  //   "elementType": "geometry.stroke",
  //   "stylers": [{
  //     "color": "#fefefe"
  //   }, {
  //     "lightness": 17
  //   }, {
  //     "weight": 1.2
  //   }]
  // }];
  var styleMap = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-60},{"lightness":60},{"color":"#e9e7e4"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"color":"#802728"},{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#d5e09d"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#6f9543"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#6f9543"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#ff0000"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"weight":"1.00"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":"2.21"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"invert_lightness":true},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#a7a9ac"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#fffefe"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#d9d7d6"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#7db3ba"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"weight":"8.21"},{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#f4f3f3"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"73"},{"saturation":"0"},{"gamma":"1"},{"color":"#cdf2f7"},{"visibility":"on"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#7db3ba"},{"weight":"3.49"},{"lightness":"0"},{"gamma":"1"}]}];
  map.setOptions({
    styles: styleMap
  });

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(uluru.lat, uluru.lng),
    map: map,
    icon: new google.maps.MarkerImage('./assets/images/icon/map__marker.svg',
      new google.maps.Size(90, 116),
      new google.maps.Point(0, 0))
  });

  google.maps.event.addListener(marker, 'click', (function (marker, content) {
    return function () {
      infowindow.setContent(content); // установка нужного контента в всплывайку
      infowindow.open(map, marker); // открытие нужного окна
      map.panTo(this.getPosition()); // установка центра карты в координатах кликнутой иконки
    }
  })(marker, content));


  var newlong = marker.getPosition().lng() + (-0.00283 * Math.pow(2, (17 - map.getZoom())));
  var newLat = marker.getPosition().lat() + (0.00013 * Math.pow(2, (17 - map.getZoom())));
  google.maps.event.addListener(map, "zoom_changed", function () {
    newlong = marker.getPosition().lng() + (-0.00283 * Math.pow(2, (17 - map.getZoom())));
    newLat = marker.getPosition().lat() + (0.00013 * Math.pow(2, (17 - map.getZoom())));
  });
}

function tabs(e) {
    const type = $(e.target).data('tab-button');
    const el = $(`.js-apart__tab--content [data-tab-id =${type}]` );
    if(el.length > 0) {
        $('.tabs--active').removeClass('tabs--active');
        $(e.target).addClass('tabs--active');
        $(el[0]).addClass('tabs--active');
    }
}

document.addEventListener('DOMContentLoaded',function () {
    init();
});

