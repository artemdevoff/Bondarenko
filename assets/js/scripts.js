  if (window.matchMedia("(min-width: 1024px)").matches) {
    $(window).on('scroll', function () {
      let $window = $(window).scrollTop(),
        windowHeight = $(window).height() / 1.3;

      $(".title-animation").each(function () {
        if ($window + windowHeight >= $(this).offset().top) {

          $(this).addClass("wow fadeIn").css({
            animationDuration: ".3s",
            opacity: 1
          })
        }
      });

    });
    $(".item-animation").each(function () {

      $(this).addClass("wow zoomInUp").css({
        animationDuration: "1s"
      });
      $(".item-animation").eq(0).css({
        animationDelay: ".3s"
      });
      $(".item-animation").eq(1).css({
        animationDelay: ".7s"
      });
      $(".item-animation").eq(2).css({
        animationDelay: "1.2s"
      });

      if ($(".item-animation").length > 3) {
        $(".item-animation").eq(3).css({
          animationDelay: ".3s"
        });
        $(".item-animation").eq(4).css({
          animationDelay: ".7s"
        });
        $(".item-animation").eq(5).css({
          animationDelay: "1.2s"
        });
      }
    });
    $(".left-animation").addClass("wow fadeInLeft").css({
      animationDuration: ".5s",
      animationTimingFunction: "ease-out"
    })
    $(".right-animation").addClass("wow fadeInRight").css({
      animationDuration: ".5s",
      animationTimingFunction: "ease-out"
    })
  }
'use strict';
// fixed svg show
//-----------------------------------------------------------------------------
svg4everybody();

// checking if element for page
//-----------------------------------------------------------------------------------
function isOnPage(selector) {
    return ($(selector).length) ? $(selector) : false;
}
  $(window).on('scroll', function(){
      if($(window).scrollTop() > 1){
          $('.header').addClass('header-fixed');
      } else{
          $('.header').removeClass('header-fixed');
      }
  });

// general-menu
//-----------------------------------------------------------------------------------
$(document).on('click', '.js-header-menu-btn', function (e) {
    e.preventDefault();
    $('body').addClass('open-general-menu');
});
$(document).on('click', '.js-btn-close-menu', function (e) {
    e.preventDefault();
    $('body').removeClass('open-general-menu');
});

window.chartColors = {
    red: '#ff3657',
    red1: '#ce0000',
    orange: '#cab486',
    yellow: '#504740',
    green: '#70d600',
    blue: '#f6612c',
    grey: 'rgba(232, 232, 232, 0.8)',
    dark: '#bababa',
    greyspec: 'rgba(186, 186, 186, 0.2)'
};
if (isOnPage($('.chart'))) {
    var configChartMuscles = {
        type: 'doughnut',
        data: {
            datasets: [{
                borderWidth: 0,
                data: [
                    28,
                    72
                ],
                backgroundColor: [
                    window.chartColors.grey,
                    window.chartColors.dark
                ],
                label: 'Dataset 1'
            }],
            labels: [
                '1',
                '2'
            ]
        },
        options: {
            cutoutPercentage: 93,
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
            title: {
                display: false
            },
            animation: {
                duration: 300
            }
        }
    };
    $('.chart').each(function () {
        var idChart = $(this).attr('id');
        var ctxMuscles = document.getElementById(idChart).getContext('2d');
        new Chart(ctxMuscles, configChartMuscles);
    });

}

if (isOnPage($('.chart-color'))) {
    var configChartMuscles1 = {
        type: 'doughnut',
        data: {
            datasets: [{
                borderWidth: 0,
                data: [
                    28,
                    72
                ],
                backgroundColor: [
                    window.chartColors.yellow,
                    window.chartColors.orange
                ],
                label: 'Dataset 1'
            }],
            labels: [
                '1',
                '2'
            ]
        },
        options: {
            cutoutPercentage: 93,
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
            title: {
                display: false
            },
            animation: {
                duration: 300
            }
        }
    };
    $('.chart-color').each(function () {
        var idChart1 = $(this).attr('id');
        var ctxMuscles1 = document.getElementById(idChart1).getContext('2d');
        new Chart(ctxMuscles1, configChartMuscles1);
    });

}
if (isOnPage($('.chart-events'))) {
    var configChartMuscles2 = {
        type: 'doughnut',
        data: {
            datasets: [{
                borderWidth: 0,
                data: [
                    28,
                    72
                ],
                backgroundColor: [
                    window.chartColors.grey,
                    window.chartColors.orange
                ],
                label: 'Dataset 1'
            }],
            labels: [
                '1',
                '2'
            ]
        },
        options: {
            cutoutPercentage: 93,
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
            title: {
                display: false
            },
            animation: {
                duration: 300
            }
        }
    };
    $('.chart-events').each(function () {
        var idChart2 = $(this).attr('id');
        var ctxMuscles2 = document.getElementById(idChart2).getContext('2d');
        new Chart(ctxMuscles2, configChartMuscles2);
    });

}
if (isOnPage($('.chart-spec-events'))) {
    var configChartMuscles3 = {
        type: 'doughnut',
        data: {
            datasets: [{
                borderWidth: 0,
                data: [
                    28,
                    72
                ],
                backgroundColor: [
                    window.chartColors.greyspec,
                    window.chartColors.orange
                ],
                label: 'Dataset 1'
            }],
            labels: [
                '1',
                '2'
            ]
        },
        options: {
            cutoutPercentage: 93,
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
            title: {
                display: false
            },
            animation: {
                duration: 300
            }
        }
    };
    $('.chart-spec-events').each(function () {
        var idChart3 = $(this).attr('id');
        var ctxMuscles3 = document.getElementById(idChart3).getContext('2d');
        new Chart(ctxMuscles3, configChartMuscles3);
    });

}
if (isOnPage($('.gallery-item'))) {
  var galleryItems = $('.gallery-item').length,
    stringNum =  galleryItems - 6;
     if (galleryItems < 10){
       $('.items-count p').text('+ ' + stringNum);
   } else {
       $('.items-count p').text('+ ' + stringNum);
   }
}
if (isOnPage($('.gallery-item.mod-biography'))) {
  var galleryItems = $('.gallery-item.mod-biography').length,
    stringNum =  galleryItems - 3;
     if (galleryItems < 10){
       $('.items-count p').text('+ ' + stringNum);
   } else {
       $('.items-count p').text('+ ' + stringNum);
   }
}

  
$(document).on('click', '.header-lang', function (e) {
    e.preventDefault();

    $(this).toggleClass('is-active');
    if ($(this).hasClass('is-active')) {
        $('.header-lang').removeClass('mod-ru');
        $('.header-lang').removeClass('mod-de');
    }
});
$(document).on('click', '.header-lang .de', function (e) {
    e.preventDefault();
    $('.header-lang').addClass('mod-de');
});
$(document).on('click', '.header-lang .ru', function (e) {
    e.preventDefault();
    $('.header-lang').addClass('mod-ru');
});

$("[data-fancybox]").fancybox({
    infobar: false,
    buttons: [
        // "zoom",
        //"share",
        //"slideShow",
        //"fullScreen",
        //"download",
        // "thumbs",
        "close"
    ],
    thumbs : {
        autoStart : true,
        axis      : 'x'
    }
});
  $('input[name="phone"]').inputmask({
    mask: "+(999) 99 99 999",
    greedy: false
  });
    function init() {
      var coords = {
        lat: 55.75222,
        lng: 37.61556
      };
      var mapOptions = {
        zoom: 7,
        scrollwheel: false,
        zoomControl: false,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        scaleControl: false,
        panControl: false,
        streetViewControl: false,
        draggable: true,
        overviewMapControl: false,
        disableDefaultUI: true,
        center: coords,
        styles:
          [
              {
                  "featureType": "all",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "saturation": 36
                      },
                      {
                          "color": "#000000"
                      },
                      {
                          "lightness": 40
                      }
                  ]
              },
              {
                  "featureType": "all",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#000000"
                      },
                      {
                          "lightness": 16
                      }
                  ]
              },
              {
                  "featureType": "all",
                  "elementType": "labels.icon",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "administrative",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#000000"
                      },
                      {
                          "lightness": 20
                      }
                  ]
              },
              {
                  "featureType": "administrative",
                  "elementType": "geometry.stroke",
                  "stylers": [
                      {
                          "color": "#000000"
                      },
                      {
                          "lightness": 17
                      },
                      {
                          "weight": 1.2
                      }
                  ]
              },
              {
                  "featureType": "landscape",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "color": "#000000"
                      },
                      {
                          "lightness": 20
                      }
                  ]
              },
              {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "color": "#000000"
                      },
                      {
                          "lightness": 21
                      }
                  ]
              },
              {
                  "featureType": "road.highway",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#000000"
                      },
                      {
                          "lightness": 17
                      }
                  ]
              },
              {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [
                      {
                          "color": "#000000"
                      },
                      {
                          "lightness": 29
                      },
                      {
                          "weight": 0.2
                      }
                  ]
              },
              {
                  "featureType": "road.arterial",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "color": "#000000"
                      },
                      {
                          "lightness": 18
                      }
                  ]
              },
              {
                  "featureType": "road.local",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "color": "#000000"
                      },
                      {
                          "lightness": 16
                      }
                  ]
              },
              {
                  "featureType": "transit",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "color": "#000000"
                      },
                      {
                          "lightness": 19
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "color": "#000000"
                      },
                      {
                          "lightness": 17
                      }
                  ]
              }
          ]
      }
      if ($('#map').length) {
      var myMap = new google.maps.Map(document.getElementById("map"), mapOptions);
      var markers = [{
        index: 0,
        "latitude": 55.75222,
        "longitude": 37.61556
      }
      ]
      for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
      }

      function addMarker(properties) {
        new RichMarker({
          position: new google.maps.LatLng(properties.latitude, properties.longitude),
          map: myMap,
          draggable: false,
          shadow: "none",
          id: "Id-" + properties.index,
          content: '<img src="../assets/img/marker-pin.png" alt="marker" </div>'
        });
      }
    }
    }
    google.maps.event.addDomListener(window, 'load', init);
    
var $sliderTop = $('.slider-top'),
    $sliderEvents = $('.slider-events'),
    $sliderSpecEvents = $('.specific-events-slider');
if (isOnPage($sliderTop)){
   $sliderTop.slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 700,
      cssEase: 'ease',
      swipeToSlide: true
   });

   var allSlides = $sliderTop.slick('getSlick').$slides.length;
  

   if (allSlides < 10){
       $('.nav-slider .all').text('0'+allSlides);
   } else {
       $('.nav-slider .all').text(allSlides);
   }

   $sliderTop.on('afterChange', function(event, slick, currentSlide){
       var thisNumber = currentSlide + 1;
       if (thisNumber < 10){
           $('.nav-slider .current').text('0'+ thisNumber);
       } else {
           $('.nav-slider .current').text(thisNumber);
       }
   });
}
if (isOnPage($sliderEvents)){
   $sliderEvents.slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        cssEase: 'ease',
        variableWidth: true,
        swipeToSlide: true,
        slidesToShow: 4,
     responsive: [
       {
       breakpoint: 1440,
       settings: {
         infinite: true,
         slidesToShow: 3
       }
       },
         {
        breakpoint: 1024,
       settings: {
         slidesToShow: 2
         
       }
     },
         {
        breakpoint: 768,
       settings: {
         slidesToShow: 1
              
       }
     }      
     ]
   });
}
if (isOnPage($sliderSpecEvents)){
   $sliderSpecEvents.slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 700,
      cssEase: 'ease',
      swipeToSlide: true
   });

   var allSlidesSpec = $sliderSpecEvents.slick('getSlick').$slides.length;
  

   if (allSlidesSpec < 10){
       $('.nav-spec-slider .all').text('0'+allSlidesSpec);
   } else {
       $('.nav-spec-slider .all').text(allSlidesSpec);
   }

   $sliderSpecEvents.on('afterChange', function(event, slick, currentSlide){
       var thisNumber = currentSlide + 1;
       if (thisNumber < 10){
           $('.nav-spec-slider .current').text('0'+ thisNumber);
       } else {
           $('.nav-spec-slider .current').text(thisNumber);
       }
   });
}
if (isOnPage('#record-form')){
  var regExp = {
    digit: /\d+/,
    letter: /^[а-я]+$/i,
    email: /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  };

  $.validator.addMethod("digitsonly", function (value, element) {
    return this.optional(element) || regExp.digit.test(value)
  }, "* Поле заполнено некорректно")

  $.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) ||
      regExp.letter.test(value);
  }, "* Поле заполнено некорректно");


  $.validator.addMethod("email", function (value) {
    if (value == '') return true;
    return regExp.email.test(value);
  });
  
  
$("#record-form").validate({
    debug: true,
    errorElement: "span",
    onfocusout: false,
    highlight: function (element) {
      $(element).parent().addClass("is-error");
    },
    unhighlight: function (element) {
      $(element).parent().removeClass("is-error");
    },
    rules: {
      name: {
        required: true,
        lettersonly: true
      },
      surname: {
        required: true,
        lettersonly: true
      },
      phone: {
        required: true
      },
      company: {
        required: true
      },
      email: {
        required: true,
        email: true
      },      
      lang: {
        required: true,
        lettersonly: true
      },
      place: {
        required: true
      },
      peopleCount: {
        required: true,
        digitsonly: true
      },
      duration: {
        required: true
      },
      date: {
        required: true
      },
      time: {
        required: true
      },
      infoFrom: {
        required: true
      },
      desc: {
        required: true
      },
      privacy: {
        required: true
    }
    },

    messages: {

      name: {
        required: "* Заполните обязательное поле"
      },
      surname: {
        required: "* Заполните обязательное поле"
      },
      phone: {
        required: "* Заполните обязательное поле"
      },
      company: {
        required: "* Заполните обязательное поле"
      },
      email: {
        required: "* Заполните обязательное поле",
        email: "* Поле заполнено некорректно"
      },                             
      lang: {
        required: "* Заполните обязательное поле"
      },
      place: {
        required: "* Заполните обязательное поле"
      },
      peopleCount: {
        required: "* Заполните обязательное поле"
      },
      duration: {
        required: "* Заполните обязательное поле"
      },
      date: {
        required: "* Заполните обязательное поле"
      },
      time: {
        required: "* Заполните обязательное поле"
      },
      infoFrom: {
        required: "* Заполните обязательное поле",
      },
      desc: {
        required: "* Заполните обязательное поле",
      }, 
      privacy: {
        required: "* Для продолжения подтвердите соглашение с нашей политикой конфедециальности"
    }      

    }
  });
}
$(function() {
  var $container = $('.js-index');
  $container.find('');
});