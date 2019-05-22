(function ($) {
    "use strict";

    // Start of use strict

    // Smooth scrolling using jQuery easing
    $("a.js-scroll-trigger[href*=\"#\"]:not([href=\"#\"])").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
            if (target.length) {
                $("html, body").animate({
                    scrollTop: (target.offset().top - 70),
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Scroll to top button appear
    $(document).scroll(function () {
        const scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $(".scroll-to-top").fadeIn();
        } else {
            $(".scroll-to-top").fadeOut();
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(() => {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 80,
    });

    // Collapse Navbar
    const navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $("#logo-white").addClass("hide");
            if ($("#logo").hasClass("hide")) {
                $("#logo").removeClass("hide");
            }
        } else {
            $("#logo").addClass("hide");
            if ($("#logo-white").hasClass("hide")) {
                $("#logo-white").removeClass("hide");
            }
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    // Collapse now if page is not at top
    // Check window width and render the navbar accordingly 
    const collapseNow = () => {
        if ($("body").width >= 992) {
            navbarCollapse();
        } else { // Style for mobile screen
            $("#logo-white").addClass("hide");
            $("#mainNav").addClass("navbar-shrink");
            $(".navbar-nav").addClass("text-grey");
        }
    };
    collapseNow();

    // Get the footer to seat at the bottom of landing page
    const getBottom = () => {
        let h = $("#projekte").height();
        if ($("body").width() >= 992) {
            h *= 10;
        } else {
            h *= 21;
        }
        $("footer").css("margin-top", h);
    };
    getBottom();

    // A couple of functions for when the window resizes
    $(window).resize(() => {
        collapseNow();
        getBottom();
    })

    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Modal popup$(function () {
    $(".portfolio-item").magnificPopup({
        type: "inline",
        preloader: false,
        focus: "#username",
        modal: true,
    });
    $(document).on("click", ".portfolio-modal-dismiss", (e) => {
        e.preventDefault();
        $.magnificPopup.close();
    });

    // Floating label headings for the contact form
    $(() => {
        $("body").on("input propertychange", ".floating-label-form-group", function (e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function () {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function () {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });
}(jQuery)); // End of use strict
