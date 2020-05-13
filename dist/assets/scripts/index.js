// import $ from 'jquery'
// import slick from 'slick-carousel'

function init() {
    // sliders init start

    $('.js-mouse-scroll').on('click',function (e) {
        e.preventDefault();
        $("html").animate({scrollTop: $('.main-first-screen').height()}, 600)
    });

    $('body').on('click','.js-call',function () {
      $('.js-call__popup').css({'transform':'scale(1, 1)'});
    });


    $('.js-form__close').on('click',function () {
      $('.js-call__popup').css({'transform':'scale(0.5,0)'});
    });

    $('.js-video__popup-close').on('click',function () {
        $('.js-video__popup').removeClass('active');
    });
    setTimeout(function () {
        // $('.wb-1').addClass('active');
        $('.preloader').css('display','none');
    },0);
    // animateCanvas();
    $('.js-wb__fishka-event').on('mousemove', animateBg);
    $('.js-wb__fishka-event').on('mouseout', function (e) {
        console.log(e);
        let image = $(e.target).siblings('svg').find('image');
        image[0].style.transition = 'x 0.35s cubic-bezier(.52,.27,.35,.97), y 0.3s cubic-bezier(.52,.27,.35,.97)';
        image[0].style.x = null;
        image[0].style.y = null;
        setTimeout(function () {
            image[0].style.transition = null;
        },400)
    });

}

function animateBg(e) {
    let y = e.originalEvent.pageY;
    let x = e.originalEvent.pageX;

    let svg = $(e.target).siblings('svg');

    let wrap = $(this);
    let wrapX = wrap.offset().left;
    let wrapY = wrap.offset().top;
    // console.log(wrapX,wrapY);
    let wrapH = wrap.height();
    let wrapW = wrap.width();
    // console.log('e',e);
    // console.log('this', wrapX, wrapY);

    let image = svg.find('image');
    let imageH = image.height() ;
    let imageW = image.width();

    // console.log(svg.height() / wrapH);
    let resY = (imageH / wrapH) * ( y - wrapY) * -1 * svg.height() / wrapH;
    let resX = (imageW / wrapW)  * (x - wrapX) * -1 * svg.width() / wrapW;
    image[0].style.x = resX ;
    image[0].style.y = resY ;

    // console.log(resX, resY);
}

function animateCanvas() {
    let ctx = $('.wb-2__fishka__canvas')[0].getContext('2d');
    ctx.canvas.width = 388;
    ctx.canvas.height = 352;
    let img = new Image();   // Создает новый элемент изображения
    img.src = '/assets/images/main/img1.jpg';
    img.onload = function() {
        ctx.drawImage(this, -100, 0,1225, 730);
    };

    let pointPath = 'M317.244 45.1903L291.084 0.718964H342.88L317.244 45.1903Z';
    let point = new Path2D(pointPath);

    // two.addPath(point);
    ctx.clip(point);
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

