const text1_options = [
  'Lorem Ipsum Dolar Sit Amet1',
  'Lorem Ipsum Dolar Sit Amet2',
  'Lorem Ipsum Dolar Sit Amet3',
  'Lorem Ipsum Dolar Sit Amet4',
]
const text2_options = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat 1',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat 2',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat 3',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat 4',
]
const color_options = ['#363F56', '#363F56', '#363F56', '#363F56']
const image_options = [
  // './img/bg-intro3.png',
  // './img/bg-daftar.png',
  // './img/bg-about.png',
  // './img/bg-event.jpg',
]
var i = 0
const currentOptionText1 = document.getElementById('current-option-text1')
const currentOptionText2 = document.getElementById('current-option-text2')
const currentOptionImage = document.getElementById('image')
const carousel = document.getElementById('carousel-wrapper')
const mainMenu = document.getElementById('menu')
const optionPrevious = document.getElementById('previous-option')
const optionNext = document.getElementById('next-option')

currentOptionText1.innerText = text1_options[i]
currentOptionText2.innerText = text2_options[i]
currentOptionImage.style.backgroundImage = 'url(' + image_options[i] + ')'
mainMenu.style.background = color_options[i]

optionNext.onclick = function () {
  i = i + 1
  i = i % text1_options.length
  currentOptionText1.dataset.nextText = text1_options[i]

  currentOptionText2.dataset.nextText = text2_options[i]

  mainMenu.style.background = color_options[i]
  carousel.classList.add('anim-next')

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = 'url(' + image_options[i] + ')'
  }, 455)

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i]
    currentOptionText2.innerText = text2_options[i]
    carousel.classList.remove('anim-next')
  }, 650)
}

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length
  }
  i = i - 1
  currentOptionText1.dataset.previousText = text1_options[i]

  currentOptionText2.dataset.previousText = text2_options[i]

  mainMenu.style.background = color_options[i]
  carousel.classList.add('anim-previous')

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = 'url(' + image_options[i] + ')'
  }, 455)

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i]
    currentOptionText2.innerText = text2_options[i]
    carousel.classList.remove('anim-previous')
  }, 650)
}

//

var items = document.querySelectorAll('.timeline li')

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if (!items[i].classList.contains('in-view')) {
        items[i].classList.add('in-view')
      }
    } else if (items[i].classList.contains('in-view')) {
      items[i].classList.remove('in-view')
    }
  }
}

window.addEventListener('load', callbackFunc)
window.addEventListener('scroll', callbackFunc)

$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  })
})

// Navbar ------
const menuToggle = document.querySelectorAll('.menu-toggle input');
const nav = document.querySelector('#navbar-1 ul');

menuToggle.forEach(function(toggle) {
  toggle.addEventListener('click', function(){
        nav.classList.toggle('slide');
        //close navbar when click outside
        document.addEventListener('click', function(e){
            if(e.target !== nav && e.target !== toggle){
                nav.classList.remove('slide');
                toggle.checked = false;
            }
        });
    });
})
// end Navbar ------

// BUTTON TO TOP --------
$(window).on('scroll', function () {
  if (window.scrollY > window.outerHeight) {
    $('#scrollToTop').addClass('active')
    setTimeout(function () {
      var theta =
        ($(window).scrollTop() -
          (window.outerHeight + window.outerHeight / 5)) /
        500
      $('#scrollToTop').css({ transform: 'rotate(' + theta + 'rad)' })
    })
  } else {
    $('#scrollToTop').removeClass('active')
  }
})

$('#scrollToTop').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 100)
})

// NAVBAR MELAYANG -----
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("navbar").style.padding = "10px 50px";
      document.getElementById("navbar").style.borderRadius = "40px";
      document.getElementById("navbar").style.width = "90%";
      document.getElementById("navbar").style.margin= "25px 71px 0 71px";
    document.getElementById("navbar").style.backgroundColor = "#220C61";
    } else {  
      document.getElementById("navbar").removeAttribute("style");
      document.getElementById("navbar").style.margin = "0 0 0 0";
    };
    matchMedia("(max-width: 576px)").matches ? document.getElementById("navbar").removeAttribute("style") : null;
    matchMedia("(max-width: 720px)").matches ? document.getElementById("navbar").removeAttribute("style") : null;
    matchMedia("(max-width: 800px)").matches ? document.getElementById("navbar").removeAttribute("style") : null;
    matchMedia("(max-width: 1400px)").matches ? document.getElementById("navbar").removeAttribute("style") : null;
  };

// END NAVBAR MELAYANG -----

// SLIDER ------
var testimonialItems = document.querySelectorAll('.item label')
var timer
function cycleTestimonials(index) {
  timer = setTimeout(function () {
    var evt
    if (document.createEvent) {
      evt = document.createEvent('MouseEvent')
      evt.initMouseEvent(
        'click',
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null,
      )
    } else {
      evt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20,
      })
    }
    var ele = '.' + testimonialItems[index].className
    var ele2 = document.querySelector(ele)
    ele2.dispatchEvent(evt)
    index++
    if (index >= testimonialItems.length) {
      index = 0
    }
    cycleTestimonials(index)
    document
      .querySelector('.testimonials')
      .addEventListener('click', function () {
        clearTimeout(timer)
      })
  }, 5000)
}

//menjalankan function
cycleTestimonials(0)

// END SLIDER ------
