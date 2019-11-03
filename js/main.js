$(document).ready(function(){
    $('.slider1').slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
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
      })
