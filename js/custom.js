/* --------------------------------------------------------
[ Custom Settings ]

01. ScrollIt
02. Preloader
03. Navbar scrolling background
04. Close navbar-collapse when a clicked
05. Close mobile menu "on click"
06. Sections background image from data background
07. Slider & Slider-Fade owlCarousel
08. Image Gallery owlCarousel
09. Clients owlCarousel
10. Blog owlCarousel
11. MagnificPopup (Image, Youtube, Vimeo & Custom PopUp)
12. Accordion
13. Animations
14. YouTubePopUp
15. Scroll back to top
16. Video Text
17. When & Where
18. Countdown Wedding

-------------------------------------------------------- */
$(function () {
    "use strict";
    var wind = $(window);
    
    // ScrollIt
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -70 // offste (in px) for fixed top navigation
    });
    
    // Preloader
    $(window).load(function() {
    $('.preloader').fadeOut("slow");
    });
    
    // Navbar scrolling background
    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop()
            , navbar = $(".navbar")
            , logo = $(".navbar .logo> img");
        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');
        }
        else {
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo.png');
        }
    });
    
    // Close navbar-collapse when a clicked
    $(".navbar-nav .dropdown-item a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    // Close mobile menu "on click"
    $(function () {
        var navMain = $(".navbar-collapse");
        navMain.on("click", "a", null, function () {
            navMain.collapse('hide');
        });
    });
    
    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    
    // Slider & Slider-Fade owlCarousel
    $(document).ready(function () {
        var owl = $('.header .owl-carousel');
        // Slider owlCarousel - (Inner Page Slider)
        $('.slider .owl-carousel').owlCarousel({
            items: 1
            , loop: true
            , dots: true
            , margin: 0
            , autoplay: false
            , autoplayTimeout: 5000
            , nav: true
            , navText: ['<i class="fa-light fa-angle-left" aria-hidden="true"></i>', '<i class="fa-light fa-angle-right" aria-hidden="true"></i>']
            , responsiveClass: true
            , responsive: {
                0: {
                    dots: false
                , }
                , 600: {
                    dots: false
                , }
                , 1000: {
                    dots: false
                , }
            }
        });
        $('.slider-fade .owl-carousel').owlCarousel({
            items: 1
            , loop: true
            , dots: true
            , margin: 0
            , autoplay: false
            , autoplayTimeout: 5000
            , animateOut: 'fadeOut'
            , nav: true
            , navText: ['<i class="fa-light fa-angle-left" aria-hidden="true"></i>', '<i class="fa-light fa-angle-right" aria-hidden="true"></i>']
        });
        owl.on('changed.owl.carousel', function (event) {
            var item = event.item.index - 2; // Position of the current item
            $('h6').removeClass('animated fadeInUp');
            $('h1').removeClass('animated fadeInUp');
            $('h2').removeClass('animated fadeInUp');
            $('h5').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('.date').removeClass('animated fadeInUp');
            $('.car-features').removeClass('animated fadeInRight');
            $('.button-1').removeClass('animated fadeInUp');
            $('.button-2').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h6').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h5').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.date').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.button-1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.button-2').addClass('animated fadeInUp');
        });
    });
    
    // Image Gallery owlCarousel
    $('.galleryscroll .owl-carousel').owlCarousel({
        stagePadding: 0
        , autoWidth: true
        , loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: true
        , autoplayTimeout: 3000
        , smartSpeed: 1000
        , dots: false
        , nav: false
        , navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"]
        , autoplayHoverPause: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            , }
            , 1000: {
                items: 3
            , }
        }
    });
    
    // Clients owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop: true
        , margin: 20
        , mouseDrag: true
        , autoplay: false
        , dots: false
        , autoplayHoverPause: true
        , nav: false
        , navText: ["<span class='lnr fa-light fa-angle-left'></span>", "<span class='lnr fa-light fa-angle-right'></span>"]
        , responsiveClass: true
        , responsive: {
            0: {
                items: 2
            , }
            , 600: {
                items: 3
            , }
            , 1000: {
                items: 6
            , }
        }
    });
    
    // Blog owlCarousel
    $('.blog .owl-carousel').owlCarousel({
        loop: true
        , margin: 20
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , autoplayHoverPause: true
        , nav: false
        , navText: ["<span class='lnr fa-light fa-angle-left'></span>", "<span class='lnr fa-light fa-angle-right'></span>"]
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            , }
            , 1000: {
                items: 3
            , }
        }
    });
    
    // MagnificPopup
    $(".img-zoom").magnificPopup({
        type: "image"
        , closeOnContentClick: !0
        , mainClass: "mfp-fade"
        , gallery: {
            enabled: !0
            , navigateByImgClick: !0
            , preload: [0, 1]
        }
    })
    $('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700
        , type: 'iframe'
        , mainClass: 'mfp-fade'
        , removalDelay: 300
        , preloader: false
        , fixedContentPos: false
    });
    
    // Accordion
    if ($(".accordion-box").length) {
        $(".accordion-box").on("click", ".acc-btn", function () {
            var outerBox = $(this).parents(".accordion-box");
            var target = $(this).parents(".accordion");
            if ($(this).next(".acc-content").is(":visible")) {
                //return false;
                $(this).removeClass("active");
                $(this).next(".acc-content").slideUp(200);
                $(outerBox).children(".accordion").removeClass("active-block");
            }
            else {
                $(outerBox).find(".accordion .acc-btn").removeClass("active");
                $(this).addClass("active");
                $(outerBox).children(".accordion").removeClass("active-block");
                $(outerBox).find(".accordion").children(".acc-content").slideUp(200);
                target.addClass("active-block");
                $(this).next(".acc-content").slideDown(200);
            }
        });
    }
    
    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });
    
    // YouTubePopUp
    $("a.vid").YouTubePopUp();
    
    // Scroll back to top
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        }
        else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        })
    
    // Video Text
    letterCarousel('.video-wrapper', '.video-text');
    function letterCarousel(parent_cls, child_cls) {
        var e = jQuery(parent_cls + ' ' + child_cls)
            , t = jQuery(window).height();
        jQuery(window).on("scroll", function () {
            if (jQuery(parent_cls).length) {
                var t = jQuery(document).scrollTop() + jQuery(window).height()
                    , n = jQuery(parent_cls).offset().top;
                if (n <= t) {
                    var i = jQuery(document).scrollTop() - n + jQuery(window).height();
                    var scroll = i - 150;
                    var scroll_slow = scroll + ((scroll / 70) / 100);
                    var img_scroll = scroll_slow * 30 / 100;
                    e.css({
                        transform: "translateX(" + img_scroll + "px)"
                    })
                }
            }
        });
    }
    
    // When & Where
    $('.when-where').each(function (index, value) {
        var valueObj = $(value)
            , totalWidth = valueObj.outerWidth()
            , slidingLength = valueObj.find('.item').length
            , devideRightPadding = parseInt(valueObj.css('padding-right')) / slidingLength
            , devideLeftPadding = parseInt(valueObj.css('padding-left')) / slidingLength
            , usageWidth = (slidingLength * 30) + 30 + devideRightPadding + devideLeftPadding
            , useWidth = totalWidth - usageWidth
            , devideLength = slidingLength + 1
            , devideWidth = (useWidth / devideLength)
            , activeWidth = devideWidth * 2;
        valueObj.find('.item, .img, .item .cont').css('width', devideWidth);
        valueObj.find('.item .cont').css('left', devideWidth);
        valueObj.find('.item.active').css('width', activeWidth);
        $(document).on('mouseenter', '.when-where .item', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            valueObj.find('.item, .img, .item .cont').css('width', devideWidth);
            valueObj.find('.item .cont').css('left', devideWidth);
            valueObj.find('.item.active').css('width', activeWidth);
        });
    });
    
    
    // RSVP FORM 
    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
    
}());

// Countdown Wedding
(function () {
    const second = 1000
        , minute = second * 60
        , hour = minute * 60
        , day = hour * 24;
    let birthday = "November 15, 2025 17:00:00"
        , countDown = new Date(birthday).getTime()
        , x = setInterval(function () {
            let now = new Date().getTime()
                , distance = countDown - now;
            document.getElementById("days").innerText = Math.floor(distance / (day))
                , document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))
                , document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute))
                , document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline")
                    , countdown = document.getElementById("countdown")
                    , content = document.getElementById("content");
                headline.innerText = "¡Hoy es nuestra boda!";
                countdown.style.display = "none";
                content.style.display = "block";
                clearInterval(x);
            }
            //seconds
        }, 0)
}());


$('a[data-scroll-nav="8"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#mesa').offset().top - 50 // Ajusta el desplazamiento según tu diseño
    }, 600);
});



$('div[class="copy-btn"]').on('click', function(e) {
    // Obtener el texto del número de evento
    const eventText = document.getElementById('event-number').innerText;

    // Extraer solo el número del texto
    const eventNumber = eventText.split(': ')[1];

    // Crear un elemento temporal para copiar el texto
    const tempInput = document.createElement('input');
    tempInput.value = eventNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Notificar al usuario que se copió el texto
    alert('Número de evento copiado: ' + eventNumber);
});