$(document).ready(function () {
    let $navBtn = $('#collapseBtn');
    let $header = $('#hero-header');
    let $navMenuItems = $('#collapseMenu');
    let $navbar = $('#navbar')
    let $wrapper = $('.wrapper');
    $navBtn.on('click', () => {
        $navBtn.toggleClass('cross');
        $navMenuItems.toggleClass('show')
        $navbar.toggleClass('reveal')

        $('#hero-background').toggleClass('main');
        $wrapper.toggleClass('blur');
        $('body').toggleClass('overflow');
    })

    if ($(window).scrollTop > 0) {
        $(window).animate({
            'transition': '500ms',
        }, 1000)


    }


    // On window scroll up header show and hide when scroll down
    let $lastScroll = 0;
    let $scrolled = false;
    $(window).on('scroll', function () {
        // Header show and hide when page scroll up and down
        let $currentScroll = window.pageYOffset || $('body').scrollTop || 0;
        let $scrollDirection = $currentScroll < $lastScroll;
        let $toggle = $scrolled && $scrollDirection;
        $scrolled = $currentScroll > 100;
        $header.toggleClass('sticky', $toggle);
        $lastScroll = $currentScroll;



        // counter animation when page scroll down 
        $('.percent').each(function () {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()

            }).animate({
                countNum: countTo

            },

                {
                    delay: 50,
                    duration: 1500,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }

                });
        });

    });

});

// On page scroll text content move up with animation
function animatation() {
    let animates = document.querySelectorAll(".animate");

    for (let i = 0; i < animates.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = animates[i].getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            animates[i].classList.add("active");
        } else {
            animates[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", animatation);



// Image slide show
let current = 0,
    main = document.getElementById('mainSlider')
slides = document.querySelectorAll('.slider');
slideImg = document.querySelectorAll('.overlay');

function slideShow() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden')
        slides[i].classList.remove('visible')

        for (let j = 0; j < slideImg.length; j++) {
            slides[i].classList.add('hidden')
            slides[i].classList.remove('visible')
        }
    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    current = (current != slideImg.length - 1) ? current + 1 : 0;
    slides[current].classList.remove('hidden')
    slideImg[current].classList.remove('hidden')
    slides[current].classList.add('visible')
    slideImg[current].classList.add('visible')

};

main.addEventListener("wheel", slideShow)


let mobile = window.matchMedia('(max-width:767px)');
if (mobile.matches) {
    main.removeEventListener("wheel", slideShow);
    // alert("slider event remove");
}
