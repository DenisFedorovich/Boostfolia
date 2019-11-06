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
        ]
    });
});

$('.slider-theme').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
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
        asNavFor: '.slider-skills'
      });
      $('.slider-skills').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
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


$('#animate').animateNumber(
    {
      number: 46,
     
  

      numberStep: function(now, tween) {
        let floored_number = Math.floor(now),
            target = $(tween.elem);
  
        target.text(floored_number + ' ');
      }
    },
    {
      easing: 'swing',
      duration: 1800
    }
  );

  $('#animate1').animateNumber(
    {
      number: 128,
     
  

      numberStep: function(now, tween) {
        let floored_number = Math.floor(now),
            target = $(tween.elem);
  
        target.text(floored_number + ' ');
      }
    },
    {
      easing: 'swing',
      duration: 1800
    }
  );

  $('#animate2').animateNumber(
    {
      number: 450,
     
  

      numberStep: function(now, tween) {
        let floored_number = Math.floor(now),
            target = $(tween.elem);
  
        target.text(floored_number + ' ');
      }
    },
    {
      easing: 'swing',
      duration: 1800
    }
  );

  $('#animate3').animateNumber(
    {
      number: 100,
     
  

      numberStep: function(now, tween) {
        let floored_number = Math.floor(now),
            target = $(tween.elem);
  
        target.text(floored_number + '+');
      }
    },
    {
      easing: 'swing',
      duration: 1800
    }
  );