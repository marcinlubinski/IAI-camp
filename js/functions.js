$(document).ready(function(){
$('.bxslider').bxSlider({
    prevText: '<i class="fas fa-angle-left"></i>',
    nextText: '<i class="fas fa-angle-right"></i>',
    auto: true,
    speed: 1000,
    });

    $('.offer').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.company-logo-img').slick({
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 3,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $("#newsletter").validate({
      submitHandler: function(form) {
        form.submit();
      },
      rules: {
        email: {
          required: true,
          email: true
         
        },
        name: {
          required: true,
          
        },
      },
      messages: {
        email: {
          required: " Niepoprawny adres email!",
         },
        name: {
          required: "Wpisz swoje imię!",
         }
      }
    });
    jQuery.extend(jQuery.validator.messages, {
      required: "Te pole jest wymagane.",
      email: "Nieporawany email",
});
        
});
