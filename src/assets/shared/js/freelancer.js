(function ($) {
    "use strict";

    // Collapse Navbar + Slow Down Text for Main Header (quasi-parallax text)
    const navbarCollapse = () => {
        // Navbar Collapse
        if (($("body").width() < 992)) { // Settings for mobile devices
            if ($("#mainNav").offset().top > 100) {
                return $("#mainNav").addClass("navbar-shrink");
            }
            if ($("#mainNav button.navbar-toggler").hasClass("collapsed")) {
                return $("#mainNav").removeClass("navbar-shrink");
            }
        } else {
            // Settings for Large Screen Devices
            if ($("#mainNav").offset().top > 100) {
                return $("#mainNav").addClass("navbar-shrink");
            }
            return $("#mainNav").removeClass("navbar-shrink");
        }
        return null;
    };

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
    // Since ScrollTop jQuery property cannot be used with window or
    // html tags, it can only be used with the body tags
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


    // Adds event listener to check if the navbar is at the top of
    // a mobile device, where it checks to see if the menu button has been clicked
    // and regulates if the white background should appear or not
    const mobileNavbarTop = () => {
        if ($("body").width() < 992) {
            let clickCount = 0;
            $("button.navbar-toggler.navbar-toggler-right").click(
                () => {
                    clickCount += 1;
                    console.log(`You have clicked ${clickCount} times`);
                    if ((clickCount % 2) === 0) {
                        if ($("#mainNav").offset().top < 100) {
                            $("#mainNav").removeClass("navbar-shrink");
                        }
                    } else {
                        if ($("#mainNav").offset().top < 100) {
                            $("#mainNav").addClass("navbar-shrink");
                        }
                    }
                }
            );
        }
    }
    mobileNavbarTop();

    // A couple of functions for when the window resizes
    $(window).resize(() => {
        $(window).scroll(() => {
            navbarCollapse();
            parallaxText();
        });

        mobileNavbarTop();
    });

    // Makinng considerations according to the browser
    const checkBrowserRender = () => {
        const ua = navigator.userAgent;
        let M = ua.match(/(opera|chrome|safari|firefox|msie|trident|edge(?=\/))\/?\s*(\d+)(\.\d+)+/i) || [];
        if (/trident/i.test(M[1])) {
            return runSvgAlt(); // Internet Explorer present
        }
        if (M[1] === "Chrome") {
            // Collapse now if page is not at top
            // Check window width and render the navbar accordingly
            // Collapse the navbar when page is scrolled
            console.log("We're in Chrome")
            return $(window).scroll(() => {
                navbarCollapse();
                parallaxText();
            });
        }
        if (M[1] === "Firefox") {
            return $(window).scroll(() => {
                navbarCollapse();
                parallaxText();
            });
        }
    };
    checkBrowserRender();
} (jQuery)); // End of use strict

