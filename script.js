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

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});



  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
}else {
    mybutton.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}