(function ($) {
    "use strict";

    // Start of use strict

    // Smooth scrolling using jQuery easing
    //$("a.js-scroll-trigger[href*=\"#\"]:not([href=\"#\"])").click(function () {
        //if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            //let target = $(this.hash);
            //target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
            //if (target.length) {
                //$("html, body").animate({
                    //scrollTop: (target.offset().top - 70),
                //}, 1000, "easeInOutExpo");
                //return false;
            //}
        //}
    //});

    // Scroll to top button appear
    //$(document).scroll(function () {
        //const scrollDistance = $(this).scrollTop();
        //if (scrollDistance > 100) {
            //$(".scroll-to-top").fadeIn();
        //} else {
            //$(".scroll-to-top").fadeOut();
        //}
    //});

    //// Closes responsive menu when a scroll trigger link is clicked
    //$(".js-scroll-trigger").click(() => {
        //$(".navbar-collapse").collapse("hide");
    //});

    // Activate scrollspy to add active class to navbar items on scroll
    //$("body").scrollspy({
        //target: "#mainNav",
        //offset: 80,
    //});

    // Collapse Navbar
    const navbarCollapse = () => {
        if ($(window).width() < 992) {
            if ($("#mainNav").offset().top > 100) {
                $("#mainNav").addClass("navbar-shrink");
            } else if ($("#mainNav button.navbar-toggler").hasClass("collapsed")) {
                $("#mainNav").removeClass("navbar-shrink");
            }
        } else if ($(window).width() > 992) {
            if ($("#mainNav").offset().top > 100) {
                $("#mainNav").addClass("navbar-shrink");
            } else {
                $("#mainNav").removeClass("navbar-shrink");
            }
            if ($(window).height() < 992) {
                const regex = /\/$/.test(document.location.href); // Test if we are at the home screen
                if (regex) {
                    $(window).scroll(() => {
                        if ($(window).scrollTop() < 400) {
                            $(".main-section > .container > .main-head > b").css("top", `${$(window).scrollTop() / 4}px`);
                            $(".main-section > .container > .main-head > p").css("top", `${$(window).scrollTop() / 4}px`);
                        }
                    });
                } else {
                    $(window).scroll(() => {
                        if ($(window).scrollTop() < 700) {
                            $(".main-section > .container > .main-head > b").css("top", `${$(window).scrollTop() / 4}px`);
                            $(".main-section > .container > .main-head > p").css("top", `${$(window).scrollTop() / 4}px`);
                        }
                    });
                }
            } else if ($(window).height() >= 992) {
                $(window).scroll(() => {
                    if ($(window).scrollTop() < 1200) {
                        $(".main-section > .container > .main-head > b").css("top", `${$(window).scrollTop() / 4}px`);
                        $(".main-section > .container > .main-head > p").css("top", `${$(window).scrollTop() / 4}px`);
                    }
                });
            }
        }
    };

    // Collapse now if page is not at top
    // Check window width and render the navbar accordingly
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Adds event listener to check if the navbar is at the top of
    // a mobile device
    if ($(window).width() < 992) {
        let clickCount = 0;
        $("button.navbar-toggler.navbar-toggler-right").click(
            () => {
                if ((clickCount % 2) === 0) {
                    if ($("#mainNav").offset().top < 100) {
                        $("#mainNav").addClass("navbar-shrink");
                    }
                } else {
                    if ($("#mainNav").offset().top < 100) {
                        $("#mainNav").removeClass("navbar-shrink");
                    }
                }
                clickCount += 1;
            }
        )
    }

    // A couple of functions for when the window resizes
    $(window).resize(() => {
        $(window).scroll(navbarCollapse);

        if ($(window).width() < 992) {
            let clickCount = 0;
            $("button.navbar-toggler.navbar-toggler-right").click(
                () => {
                    if ((clickCount % 2) == 0) {
                        if ($("#mainNav").offset().top < 100) {
                            $("#mainNav").addClass("navbar-shrink");
                        }
                    } else {
                        if ($("#mainNav").offset().top < 100) {
                            $("#mainNav").removeClass("navbar-shrink");
                        }
                    }
                    clickCount += 1;
                }
            )
        }
    });

    // Modal popup$(function () {
    //$(".portfolio-item").magnificPopup({
        //type: "inline",
        //preloader: false,
        //focus: "#username",
        //modal: true,
    //});
    //$(document).on("click", ".portfolio-modal-dismiss", (e) => {
        //e.preventDefault();
        //$.magnificPopup.close();
    //});

    // Floating label headings for the contact form
    //$(() => {
        //$("body").on("input propertychange", ".floating-label-form-group", function (e) {
            //$(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        //}).on("focus", ".floating-label-form-group", function () {
            //$(this).addClass("floating-label-form-group-with-focus");
        //}).on("blur", ".floating-label-form-group", function () {
            //$(this).removeClass("floating-label-form-group-with-focus");
        //});
    //});
}(jQuery)); // End of use strict
