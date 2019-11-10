/*first slider*/
$(document).ready(function(){
    $('.slider1').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1330,
            settings: {
              arrows: false,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              autoplay: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              arrows: false,
              autoplay: false,
              draggable: false,
            }
          },
        ]
    });
});

/*second*/
$('.slider-theme').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 930,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
          }
        },
      ]
    });

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});


    $('.slider-workers1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        asNavFor: '.slider-skills',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                respondTo: 'slider',
                adaptiveHeight: true
              }
            },
        ]
      });
      $('.slider-skills').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                respondTo: 'slider',
                adaptiveHeight: true
              }
            },
        ]
      })

      let acc = document.getElementsByClassName("accordion");
      let i;
      
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let panel = this.nextElementSibling;
          if (panel.style.maxHeight){
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
        });
      }

  /*animatenumber*/
 function countup(features){
  let countBlockTop = $("."+features).offset().top;
  let windowHeight = window.innerHeight;
  let show = true;
        
  $(window).scroll( function (){
    if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
      show = false;
          
      $('.'+features).spincrement({
        from: 1,
        duration: 4000,
      });
    }
  })  
}

$(function() {
  countup("count", $(".count").text());
  countup("count2", $(".count2").text());
  countup("count3", $(".count3").text());
  countup("count4", $(".count4").text());
});

  /*mobile menu*/

let menuBtn = document.querySelector('.menu-btn');
let menuLines = document.querySelector('.menu-btn-lines');
let menuMobBox = document.querySelector('.menu-box');
let menuItem = document.querySelectorAll('.menu-item');

menuBtn.addEventListener('click', function() {
  menuLines.classList.toggle("menu-btn-active");
  menuMobBox.classList.toggle("menu-show");
});

menuItem.forEach(function(btn) {
  btn.addEventListener('click', function() {
    menuLines.classList.remove("menu-btn-active");
  menuMobBox.classList.remove("menu-show");
  });
});

/*scroll menu*/

$("#menu").on("click","a", function (event) {
  event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 900);
});

$("#menu-mob").on("click", "a", function (event) {
  event.preventDefault();
  let id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 900);
});


