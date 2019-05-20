(function ($) {
    "use strict";

    // Start of use strict

    // Create svg files that dynamically change with the image size
    const svgDrawer = () => {
        try {
            const wh = [$("body").width(), $("body").height()]; // An array of both width and height of the body

            // height of the slant 12% of total height
            const ch = 0.12 * wh[1];

            const svgBottom = `<path d="M0 ${wh[1] - ch} L0 ${wh[1]} L${wh[0]} ${wh[1]}Z" fill="white" />`;
            const svgTopLeft = `<path d="M0 0 L0 ${ch} L${wh[0]} 0Z" fill="white" />`;
            const svgTopRight = `<path d="M0 0 L${wh[0]} ${ch} L${wh[0]} 0Z" fill="white" />`;
            $(".bottom-slide").html(svgBottom);
            $(".top-left-slide").html(svgTopLeft);
            $(".top-right-slide").html(svgTopRight);
        } catch (err) {
            console.log(err);
        }
    };

    const svgProjekteDrawer = () => {
        try {
            const wh = [($("body").width() * 0.5), ($("body").height() * 0.7)]; // An array of both width and height of the body

            // height of the slant 12% of total height
            const ch = 0.12 * wh[1];

            const svgBottom = `<path d="M0 ${wh[1] - ch} L0 ${wh[1]} L${wh[0]} ${wh[1]}Z" fill="#f5f5f5" />`;
            const svgBottomRight = `<path d="M0 ${wh[1]} L${wh[0]} ${wh[1]} L${wh[0]} ${wh[1] - ch}Z" fill="#f5f5f5" />`;
            const svgTopLeft = `<path d="M0 0 L0 ${ch} L${wh[0]} 0Z" fill="#f5f5f5" />`;
            const svgTopRight = `<path d="M0 0 L${wh[0]} ${ch} L${wh[0]} 0Z" fill="#f5f5f5" />`;
            $(".projekte-bottom").html(svgBottom);
            $(".projekte-bottom-right").html(svgBottomRight);
            $(".projekte-top-left").html(svgTopLeft);
            $(".projekte-top-right").html(svgTopRight);
        } catch (err) {
            console.log(err);
        }
    };

    svgDrawer();
    svgProjekteDrawer();
    $(window).resize(() => {
        try {
            svgDrawer();
            svgProjekteDrawer();
        } catch (err) {
            console.log(err);
        }
    });

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
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
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
