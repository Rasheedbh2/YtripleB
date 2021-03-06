$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                    var elements = document.getElementsByClassName('nav-link');
                    for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color = '#333';
                        }
                        document.getElementById("navigation").style.marginRight= "-10px"
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                    var elements = document.getElementsByClassName('nav-link');
                    for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color = '#ffffff';
                        }
                        document.getElementById("navigation").style.marginRight= "170px"
                }
            })
        }
    }

    navbarFixed();

});