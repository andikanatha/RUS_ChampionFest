var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el){
    var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
    for(var i = 0; i < items.length; i++){
        if (isElementInViewport(items[i])){
            if(!items[i].classList.contains("in-view")){
                items[i].classList.add("in-view");
            }
        } else if(items[i].classList.contains("in-view")){
            items[i].classList.remove("in-view");
        }
    }
}

 window .addEventListener("load", callbackFunc);
 window.addEventListener("scroll", callbackFunc);

 $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
    ]
    });
});

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
})

$('.buttonContainer').click(function(){
	if($('.buttonContainer').hasClass('active')){
		$(this).removeClass('active');
		$('.complete').removeClass('fadein');
		$('#counter').fadeOut(100);
		$('.ball').fadeOut(100);
		count().stop;
	} else{
		$(this).addClass('active');
		$('#counter').fadeIn(200);
		$('.ball').fadeIn(200);
		count();
	}
});

//Loading
function count(){
	$({countNum: $('#counter').text()}).animate({countNum: 100}, {
	  duration: 2000,
	  easing:'linear',
	  step: function() {
		 $('#counter').text(Math.floor(this.countNum) + '%');
	  },
	  complete: function() {
		 $('#counter').fadeOut(200);
		 $('.complete').addClass('fadein');
		 $('.ball').fadeOut(200);
		  $('#button').fadeOut(100);
		  setTimeout(function() {
			   $('.buttonContainer').removeClass('active');
			  $('.complete').removeClass('fadein');
			  $('#button').fadeIn(200);
   		}, 1000);
	  }
	});
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);