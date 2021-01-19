
// Init Scrollspy
$('body').scrollspy({ target: '#main-nav' });

// Smooth scrolling
$('#main-nav a').on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            window.location.hash = hash;
        });
    }
});

$(document).ready(function () {

    let width = $(window).width();

    // Navbar bg
    $(window).scroll(function () {
        let position = $(this).scrollTop();

        //console.log(position);

        // Show Navigation if scroll down 200 px and screen on lg-(998px in width)


        if (position >= 200) {
            $('.nav-menu').removeClass('hide-nav');
            $('.nav-menu').addClass('show-nav');

            $('.navbar').addClass('dark');
        } else {
            $('.nav-menu').removeClass('show-nav');
            $('.nav-menu').addClass('hide-nav');

            $('.navbar').removeClass('dark');
        }

    });

    $('#projects-carousel').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        autoplayTimeout: 6000,
        smartSpeed: 1200,
        dotsSpeed: 1000,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

});

