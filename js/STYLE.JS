$(window).on("load", function () {

  $('.preloader').fadeOut(1000, function () {

    $(this).parent().fadeOut();

  });

});



$(document).ready(function () {

/*
  $(".conutry-flag").click(function () {

    $(".dropdown-conutry").fadeToggle();
    
  });
    
      $(".cart-icon").click(function () {

    $(".dropdown-cart").fadeToggle();
    
  });*/

    $(".menu-icon").click(function(){
        
            var current_tab = ("."+$(this).parent().attr("data-target")); 
        
            if($(this).parent().hasClass('show')){
            
            $(this).parent().removeClass("show");
            $(current_tab).fadeOut();
             
        }else{
   
	       $(".h-menu").removeClass("show");  
  	       $(this).parent().addClass("show");
      
           $(".dropdown-list").not($(current_tab)).hide();
           $(current_tab).fadeIn();
	
    
    
        
        }

});
    
    
   $(document).click(function(e){
        
        
        if(!(($(e.target).closest('.dropdown-list').length > 0) || 
            
             ($(e.target).closest('.h-menu').length > 0))){
            
                  $(".h-menu").removeClass("show");    
                  $(".dropdown-list").hide();
            }
    });
    
    

  $('.slider-1').slick({
    dots: false,
    infinite: false,
    accessibility: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    rtl: true,
    prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',


    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]


  });



  $('.work-slider').slick({
    slidesToShow: 5,
    rtl: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }
    ]
  });


  $('.slider-2').slick({
    dots: false,
    infinite: false,
    accessibility: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    rtl: true,
    prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',


    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]

  });


  $('.blog-slider').slick({
    dots: false,
    infinite: false,
    accessibility: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    rtl: true,
    prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',

    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]



  });



  $(".ul-package .package-title").matchHeight();
  $(".package-info").matchHeight();
  $(".package-info-2").matchHeight();
  $(".service").matchHeight();
		
  $(".service-item-2 p").matchHeight();

  $(".blog-content").matchHeight();


  $(".Emarketing-item .item-desc").matchHeight();
  $(".thermal-printing p").matchHeight();
  $(".footer-menu-ul").matchHeight();
  $(".footer-menu h5").matchHeight();

  $('.counter').counterUp({
    delay: 20, // the delay time in ms
    time: 1000 // the speed time in ms
  });


$('.common-questions-taps').slick({
    dots: false,
    infinite: false,
    accessibility: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
	
	rtl: true,
    prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',

    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2	
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
		centerMode: true,
        }
      }

    ]

  });
	
	
$(".common-questions-panels .common-questions-panel").hide();
$(".common-questions-panels .common-questions-panel:first-child").show();

$(".question-tabs").click(function(){
  
  $(".question-tabs").removeClass("active");
  $(this).addClass("active");
  
  var current_tab = $(this).attr("data-list");
  $(".common-questions-panels .common-questions-panel").hide();
  $("."+current_tab).fadeIn();
})

	
	
	$(".panel-items .accordion_header").click(function(){
		    let $next = $(this).next(".accordion_body");

	/*
    $(".panel-items .accordion_header").removeClass("active");
	$(".panel-items .accordion_body").slideUp();*/
   	$(this).parent().toggleClass("active");
	$(this).next(".accordion_body").slideToggle();
	$('.panel-items .accordion_body').not($next).slideUp().parent().removeClass('active');
	
		
		
  });


    $('.slick-blog-item').slick({
	rtl: true,
	dots: false,
    accessibility: true,
    speed: 500,
	autoplay: true,
	autoplaySpeed: 2500,
});


												   
  $(".subject-uesr-comment .msg-content").click(function(){
  	let $next = $(this);
	$(this).toggleClass('more');
	$('subject-uesr-comment .msg-content').not($next).removeClass('more'); 	
  
  
  	
   });
    
    	$('.sign-slider').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
		rtl: true,
		dots: true,
		infinite: true,
		arrows:false,
    	accessibility: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 5000,
	
	});
	
    $(".logos-patterns .tap-pane").hide();
    var active_tab = $(".logos-patterns .patterns-ul").find('.active').attr("data-target");
    $("."+active_tab).show();
    console.log(active_tab);
	$(".logos-patterns .patterns-ul li ").click(function(){
  
	$(".logos-patterns .patterns-ul li").removeClass("active");
  	$(this).addClass("active");
  
	var current_tab = $(this).attr("data-target");
    $(".logos-patterns .tap-pane").hide();
    $("."+current_tab).fadeIn();
        
    });
});





var swiper = new Swiper('.swiper-container-2', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 5,
    depth: 100,
    modifier: 5,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },

  loop: true,
    
    
});



var swiper = new Swiper('.swiper-container-3', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 5,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },  

  loop: true,

});

