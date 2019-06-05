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
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    // Collapse now if page is not at top
    // Check window width and render the navbar accordingly
    // Collapse the navbar when page is scrolled
    const collapseNow = () => {
        if ($(window).width() >= 992) {
            $(window).scroll(navbarCollapse);
        }
    };
    collapseNow();

    // A couple of functions for when the window resizes
    $(window).resize(() => {
        collapseNow();
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
