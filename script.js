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

// Navbar ------
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('#navbar-1 ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});


// BUTTON TO TOP --------
$(window).on("scroll", function () {
    if (window.scrollY > window.outerHeight) {
      $("#scrollToTop").addClass("active");
      setTimeout(function() {
        var theta = ($(window).scrollTop() - (window.outerHeight + (window.outerHeight/5))) / 500;
        $('#scrollToTop').css({ transform: 'rotate(' + theta + 'rad)' });
      })
    } else {
      $("#scrollToTop").removeClass("active");
    }
  });
  
  $('#scrollToTop').on('click',function() {
    $("html, body").animate({ scrollTop: 0 }, 900);
  })

// NAVBAR MELAYANG -----
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("navbar").style.padding = "10px 50px";
      document.getElementById("navbar").style.borderRadius = "40px";
      document.getElementById("navbar").style.width = "90%";
      document.getElementById("navbar").style.margin= "25px 0 0 100px";
    document.getElementById("navbar").style.backgroundColor = "#576696";
    } else {
      document.getElementById("navbar").removeAttribute("style");
      document.getElementById("navbar").style.margin = "0 0 0 0";
    };
    matchMedia("(max-width: 576px)").matches ? document.getElementById("navbar").removeAttribute("style") : null;
  };

// END NAVBAR MELAYANG -----
