$(function () {

   //nav section js
    $(window).on('scroll', function () {
 
       if ($(window).scrollTop() > $('#nav_nav').height()) {
          $('#my_nav').addClass('menu_animate')
       } else {
          $('#my_nav').removeClass('menu_animate')
       }
    })

    //banner section js
    $('.banner_slider').slick({
      prevArrow:'<i class="banner_arrow fa-solid fa-angle-left"></i>',
      nextArrow:'<i class="banner_arrow fa-solid fa-angle-right"></i>',
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 2000,
  })

  //About section js
  $('.about_slider').slick({
   dots: true,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 3000,
   speed: 2000,
   dotsClass: 'slider_dots'
  })

  //counter section js
  $('.counter').counterUp({
   delay: 10,
   time: 2000
})

    ////our course slider js

    $('.course-slider').slick({
      infinite: true,
      prevArrow: '<i class="fa fa-angle-left course-left_arrow"></i>',
      nextArrow: '<i class="fa fa-angle-right course-right_arrow"></i>',
      slidesToShow: 3,
      centerMode: false,
      centerPadding: false,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 1000,

      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
              }
  },
          {
              breakpoint: 800,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              
              }
  },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
  },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
  }

]

  });


   
 })