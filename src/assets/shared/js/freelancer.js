(function ($) {
    "use strict";
    // Collapse Navbar
    const navbarCollapse = () => {
        // Navbar Collapse
        if (($("body").width() < 992)) { // Settings for mobile devices
            if ($("#mainNav").offset().top > 100) {
                return $("#mainNav").addClass("navbar-shrink");
            }
        }
        // Settings for Large Screen Devices
        if ($("#mainNav").offset().top > 100) {
            return $("#mainNav").addClass("navbar-shrink");
        }
        return $("#mainNav").removeClass("navbar-shrink");
    };

    // Keeps count of the clicks made on the navbar-toggler
    // and adjusts the appearance of the navbar accordingly
    const mobileTop = () => {
        let counter = 0;
        if (($("body").width() < 992)) { // Settings for mobile devices
            if ($("#mainNav").offset().top < 100) {
                $("#mainNav button.navbar-toggler").click(() => {
                    counter += 1;
                    if (counter % 2 === 0) {
                        $("#mainNav").removeClass("navbar-shrink");
                    } else {
                        $("#mainNav").addClass("navbar-shrink");
                    }
                });
                // Else check Offset is lesser than 100 and counter is either
                // an odd or even number upon which add a navbar-shrink class
                if (counter % 2 === 0) {
                    $("#mainNav").removeClass("navbar-shrink");
                } else {
                    $("#mainNav").addClass("navbar-shrink");
                }
            }
        }
    }
    mobileTop();

    // Parallax Text Effect
    const parallaxText = () => {
        if ($("body").width() >= 992) {
            // Slowed Down Text for Main Header Settings based on height
            // Check location specifically for the landing page as it text
            let regex = /\/$/.test(document.location.href);
            // Array that checks for projekte pages, where the main heading has two
            // lines making it stop in the next section when scrolled over
            const arr = ["/projekte/historiches-mehrfamilienhaus", "/projekte/haus-hardenberg", "/projekte/haus-bellevue", "/en/projects/historiches-mehrfamilienhaus", "/en/projects/haus-hardenberg", "/en/projects/haus-bellevue"];
            // Slow text scroll for heights that do not exceed 992px
            if ($("html").height() < 992) {
                if (regex) {
                    // We are in the homepage, implement a lesser height percentage
                    // to ensure that the text does not overlap into the next page
                    $(window).scroll(() => {
                        if ($("html").scrollTop() < ($("body").height() * 0.4)) { // 40% of current height
                            // The dividing number controls the elements speed of
                            // the bold and paragraph tags
                            $(".main-section > .container > .main-head > b").css("top", `${$("html").scrollTop() / 3}px`);
                            $(".main-section > .container > .main-head > p").css("top", `${$("html").scrollTop() / 3}px`);
                        }
                    });
                } else { // This is not the home page
                    regex = /\/projekte\/\w+(\-\w+)?$/.test(document.location.href); // Test if we are in the projekte pages
                    // Test if regex variable is true, where we are in the german projekte pages
                    if (regex) {
                        regex = /\/projekte\/\w+(\-\w+)?$/.exec(document.location.href);
                    } else {
                        // if not in the german projekte pages try and see if we are in
                        // the projekte english pages
                        regex = /\/en\/projects\/\w+(\-\w+)?$/.test(document.location.href);
                        if (regex) { // If true we are in the projekte english pages
                            // Save current projekte english page
                            regex = /\/en\/projects\/\w+(\-\w+)?$/.exec(document.location.href);
                        }
                    }
                    // Using previously made projekte pages array check if there are any hits with
                    // any of the predescribed links using the regex variable
                    if (arr.indexOf(regex[0]) >= 0) {
                        // We are in either the selected english or german projekte pages,
                        // in the arr array thus adjust the scroll so as to ensure it does
                        // not cross over to the next section
                        $(window).scroll(() => {
                            if ($("html").scrollTop() < ($("body").height() * 0.7)) {
                                // Using 70% of viewport height
                                $(".main-section > .container > .main-head > b").css("top", `${$("html").scrollTop() / 3}px`);
                                $(".main-section > .container > .main-head > p").css("top", `${$("html").scrollTop() / 3}px`);
                            }
                        });
                    } else {
                        // We are not in either the selected english or german projekte pages
                        $(window).scroll(() => {
                            if ($("html").scrollTop() < ($("body").height() * 0.75)) {
                                // Using 75% of the viewport height
                                $(".main-section > .container > .main-head > b").css("top", `${$("html").scrollTop() / 3}px`);
                                $(".main-section > .container > .main-head > p").css("top", `${$("html").scrollTop() / 3}px`);
                            }
                        });
                    }
                }
            }
            // Slow text scroll for heights that exceed or equal to 992px
            if ($("html").height() >= 992) {
                regex = /\/$/.test(document.location.href); // Check if we are in the homepage
                if (regex) { // if regex is true then we are in the homepage
                    // Adjust scroll to ensure that we get the slow text scroll for the homepage
                    // Has to be smaller, ensuring it does not overlap into the next section
                    $(window).scroll(() => {
                        if ($("body").scrollTop() < ($("body").height() * 0.82)) { // Using 82% of the viewport height
                            $(".main-section > .container > .main-head > b").css("top", `${$("body").scrollTop() / 2.5}px`);
                            $(".main-section > .container > .main-head > p").css("top", `${$("body").scrollTop() / 2.5}px`);
                        }
                    });
                } else {
                    // We are not in the homepage
                    // Test if we are in the german projekte pages
                    regex = /\/projekte\/\w+(\-\w+)?(\-\w+)?$/.test(document.location.href);
                    if (regex != null) { // If not null, we are in the german projekte pages
                        // Save german projekte page to the regex variable
                        regex = /\/projekte\/\w+(\-\w+)?(\-\w+)?$/.exec(document.location.href);
                    } else {
                        // Test regex to see if we are in the projekte english pages
                        regex = /\/en\/projects\/\w+(\-\w+)?(\-\w+)?$/.test(document.location.href);
                        // Check if regex is true and save location on regex variable
                        if (regex) {
                            regex = /\/en\/projects\/\w+(\-\w+)?(\-\w+)?$/.exec(document.location.href);
                        }
                    }
                    // Using the predefined arr array, check to see if we are in
                    // any of the selected projekte pages
                    if (arr.indexOf(regex[0]) >= 0) {
                        // We are in one of the selected pages in the arr array, thus adjust
                        // percentage to be lesser than that of regular pages
                        $(window).scroll(() => {
                            if ($("html").scrollTop() < ($("body").height() * 0.7)) { // Using 70% of the viewport
                                $(".main-section > .container > .main-head > b").css("top", `${$("html").scrollTop() / 3}px`);
                                $(".main-section > .container > .main-head > p").css("top", `${$("html").scrollTop() / 3}px`);
                            }
                        });
                    } else {
                        // We are not in one of the selected links in the arr array, thus
                        // adjust with a higher amount
                        $(window).scroll(() => {
                            if ($("html").scrollTop() < ($("body").height() * 0.95)) {
                                // Using 95% of the viewport height
                                $(".main-section > .container > .main-head > b").css("top", `${$("html").scrollTop() / 3}px`);
                                $(".main-section > .container > .main-head > p").css("top", `${$("html").scrollTop() / 3}px`);
                            }
                        });
                    }
                }
            }
        }
    };

    // Header text for Webkit Browsers
    // Since ScrollTop jQuery property cannot be used with window element or
    // html tags, it can only be used with body tags
    const parallaxTextSafari = () => {
        if ($("body").width() >= 992) {
            // Slowed Down Text for Main Header Settings based on height
            // Check location specifically for the landing page as it text
            let regex = /\/$/.test(document.location.href);
            // Array that checks for projekte pages, where the main heading has two
            // lines making it stop in the next section when scrolled over
            const arr = ["/projekte/historiches-mehrfamilienhaus", "/projekte/haus-hardenberg", "/projekte/haus-bellevue", "/en/projects/historiches-mehrfamilienhaus", "/en/projects/haus-hardenberg", "/en/projects/haus-bellevue"];
            // Slow text scroll for heights that do not exceed 992px
            if ($("html").height() < 992) {
                if (regex) {
                    // We are in the homepage, implement a lesser height percentage
                    // to ensure that the text does not overlap into the next page
                    $(window).scroll(() => {
                        if ($("body").scrollTop() < ($("body").height() * 0.4)) { // 40% of current height
                            // The dividing number controls the elements speed of
                            // the bold and paragraph tags
                            $(".main-section > .container > .main-head > b").css("top", `${$("body").scrollTop() / 3}px`);
                            $(".main-section > .container > .main-head > p").css("top", `${$("body").scrollTop() / 3}px`);
                        }
                    });
                } else { // This is not the home page
                    regex = /\/projekte\/\w+(\-\w+)?$/.test(document.location.href); // Test if we are in the projekte pages
                    // Test if regex variable is true, where we are in the german projekte pages
                    if (regex) {
                        regex = /\/projekte\/\w+(\-\w+)?$/.exec(document.location.href);
                    } else {
                        // if not in the german projekte pages try and see if we are in
                        // the projekte english pages
                        regex = /\/en\/projects\/\w+(\-\w+)?$/.test(document.location.href);
                        if (regex) { // If true we are in the projekte english pages
                            // Save current projekte english page
                            regex = /\/en\/projects\/\w+(\-\w+)?$/.exec(document.location.href);
                        }
                    }
                    // Using previously made projekte pages array check if there are any hits with
                    // any of the predescribed links using the regex variable
                    if (arr.indexOf(regex[0]) >= 0) {
                        // We are in either the selected english or german projekte pages,
                        // in the arr array thus adjust the scroll so as to ensure it does
                        // not cross over to the next section
                        $(window).scroll(() => {
                            if ($("body").scrollTop() < ($("body").height() * 0.7)) {
                                // Using 70% of viewport height
                                $(".main-section > .container > .main-head > b").css("top", `${$("body").scrollTop() / 3}px`);
                                $(".main-section > .container > .main-head > p").css("top", `${$("body").scrollTop() / 3}px`);
                            }
                        });
                    } else {
                        // We are not in either the selected english or german projekte pages
                        $(window).scroll(() => {
                            if ($("html").scrollTop() < ($("body").height() * 0.75)) {
                                // Using 75% of the viewport height
                                $(".main-section > .container > .main-head > b").css("top", `${$("body").scrollTop() / 3}px`);
                                $(".main-section > .container > .main-head > p").css("top", `${$("body").scrollTop() / 3}px`);
                            }
                        });
                    }
                }
            }
            // Slow text scroll for heights that exceed or equal to 992px
            if ($("html").height() >= 992) {
                regex = /\/$/.test(document.location.href); // Check if we are in the homepage
                if (regex) { // if regex is true then we are in the homepage
                    // Adjust scroll to ensure that we get the slow text scroll for the homepage
                    // Has to be smaller, ensuring it does not overlap into the next section
                    $(window).scroll(() => {
                        if ($("body").scrollTop() < ($("body").height() * 0.82)) { // Using 82% of the viewport height
                            $(".main-section > .container > .main-head > b").css("top", `${$("body").scrollTop() / 2.5}px`);
                            $(".main-section > .container > .main-head > p").css("top", `${$("body").scrollTop() / 2.5}px`);
                        }
                    });
                } else {
                    // We are not in the homepage
                    // Test if we are in the german projekte pages
                    regex = /\/projekte\/\w+(\-\w+)?(\-\w+)?$/.test(document.location.href);
                    if (regex != null) { // If not null, we are in the german projekte pages
                        // Save german projekte page to the regex variable
                        regex = /\/projekte\/\w+(\-\w+)?(\-\w+)?$/.exec(document.location.href);
                    } else {
                        // Test regex to see if we are in the projekte english pages
                        regex = /\/en\/projects\/\w+(\-\w+)?(\-\w+)?$/.test(document.location.href);
                        // Check if regex is true and save location on regex variable
                        if (regex) {
                            regex = /\/en\/projects\/\w+(\-\w+)?(\-\w+)?$/.exec(document.location.href);
                        }
                    }
                    // Using the predefined arr array, check to see if we are in
                    // any of the selected projekte pages
                    if (arr.indexOf(regex[0]) >= 0) {
                        // We are in one of the selected pages in the arr array, thus adjust
                        // percentage to be lesser than that of regular pages
                        $(window).scroll(() => {
                            if ($("body").scrollTop() < ($("body").height() * 0.7)) { // Using 70% of the viewport
                                $(".main-section > .container > .main-head > b").css("top", `${$("body").scrollTop() / 3}px`);
                                $(".main-section > .container > .main-head > p").css("top", `${$("body").scrollTop() / 3}px`);
                            }
                        });
                    } else {
                        // We are not in one of the selected links in the arr array, thus
                        // adjust with a higher amount
                        $(window).scroll(() => {
                            if ($("body").scrollTop() < ($("body").height() * 0.95)) {
                                // Using 95% of the viewport height
                                $(".main-section > .container > .main-head > b").css("top", `${$("body").scrollTop() / 3}px`);
                                $(".main-section > .container > .main-head > p").css("top", `${$("body").scrollTop() / 3}px`);
                            }
                        });
                    }
                }
            }
        }
    }

    // A couple of functions for when the window resizes
    $(window).resize(() => {
        $(window).scroll(() => {
            navbarCollapse();
            parallaxText();
            mobileTop();
        });
    });

    // Making considerations according to the browser specifically
    // Safari browser
    const checkBrowserRender = () => {
        const ua = navigator.userAgent;
        const M = ua.match(/(opera|chrome|safari|firefox|msie|trident|edge(?=\/))\/?\s*(\d+)(\.\d+)+/i) || [];
        if (M[1] === "Safari") {
            return $(window).scroll(() => {
                navbarCollapse();
                parallaxTextSafari();
            });
        }
        // Collapse now if page is not at top
        // Check window width and render the navbar accordingly
        // Collapse the navbar when page is scrolled
        return $(window).scroll(() => {
            navbarCollapse();
            parallaxText();
        });
    };
    checkBrowserRender();
} (jQuery)); // End of use strict

