$(document).ready(function () {
    let $navBtn = $('#collapseBtn');
    let $header = $('#hero-header');
    let $navMenuItems = $('#collapseMenu');
    let $wrap = $('.wrapper');
    $navBtn.on('click', () => {
        $navBtn.toggleClass('cross');
        // $wrap.toggleClass('main')
        $navMenuItems.toggleClass('show')

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
        let counted = 0;
        let count = $('#counter').offset().top - window.innerHeight;
        // console.log($('#counter').offset().top);
        if (counted == 0 && $(window).scrollTop() > count) {
            $('.percent').each(function () {
                let $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },

                    {
                        delay: 100,
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            counted = 1;
        }

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
        slides[i].style.cssText = `
        visibility: hidden; 
        opacity : 0; height:0;
        transition : opacity 3s, height 3s;
    `
        for(let j =0; j<slideImg.length; j++){
            slides[i].style.cssText = 
            `
                visibility: hidden;  
                opacity : 0; height:0;
                transition : opacity 3s, height 3s;
            `
        }
    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    current = (current != slideImg.length - 1) ? current + 1 : 0;
    slides[current].style.cssText = `
        visibility: visible;
        opacity: 1;
        height: 430px;
    `
    slideImg[current].style.cssText = `
        visibility: visible;
        opacity: 1;
        height: 300px;
    `

};

main.addEventListener("wheel", slideShow)
