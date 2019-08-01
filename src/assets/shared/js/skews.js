// window.addEventListener("DOMContentLoaded", () => {
// Create svg files that dynamically change with the image size
// svgDrawer Draws using body width

// Adding SVG Elements to the DOM
const createRerenderSvgDomElements = () => {
    try {
        // Retrieving DOM elements that will have skews added
        const slide = document.querySelector("section > .section-slide-1");
        const body = document.querySelector("body");
        let wh = [
            body.getBoundingClientRect().width,
            body.getBoundingClientRect().height
        ]; // An array of both width and height of the body
        // height of the slant 60px + 4 adjusting for margins
        let ch = 60 + 4;

        // Paths to be added to SVG elements
        const svgBottomLeft = `<path d="M0 ${wh[1] - ch / 2} L0 ${wh[1] + 4} L${
            wh[0]
        } ${wh[1] + 4} L${wh[0]} ${wh[1]}Z" fill="white"></path>`;
        const svgBottomRight = `<path d="M0 ${wh[1]} L0 ${wh[1] + 4} L${
            wh[0]
        } ${wh[1] + 4} L${wh[0]} ${wh[1] - ch / 2}Z" fill="white"></path>`;
        const svgTopLeft = `<path d="M0 0 L0 ${ch + 4} L${wh[0]} 4 L${
            wh[0]
        } 0Z" fill="white"></path>`;

        // Creating DOM elements
        const main = document.querySelector(".main-section .container"); // Main Section bottom left skew
        const pro = document.querySelector(".projekte");
        let el;

        // Main Section SVG Element
        if (main.parentNode.querySelector(".bottom-left-skew") == null) {
            main.insertAdjacentHTML(
                "beforebegin",
                `<svg class='bottom-left-skew'>${svgBottomLeft}</svg>`
            );
        } else {
            el = main.parentNode.querySelector(
                ".main-section > .bottom-left-skew"
            );
            main.parentNode.removeChild(el);
            main.insertAdjacentHTML(
                "beforebegin",
                `<svg class='bottom-left-skew'>${svgBottomLeft}</svg>`
            );
        }

        // Index Pages Projekte Sections SVG elements
        if (pro != null) {
            const col = document
                .getElementById("projekte-slide-1")
                .getBoundingClientRect();
            wh = [col.width, col.height]; // An array of both width and height of the projekte elements

            // height of the slant 60px + 2 accounting for margins
            ch = 60 + 4;

            // Svg Path Strings
            const svgProjekteBottomLeft = `<path d="M0 ${wh[1] -
                ch / 2} L0 ${wh[1] + 4} L${wh[0]} ${wh[1] + 4} L${wh[0]} ${
                wh[1]
            }Z" fill="#f5f5f5"></path>`;
            const svgProjekteBottomRight = `<path d="M0 ${wh[1]} L0 ${wh[1] +
                4} L${wh[0]} ${wh[1] + 4} L${wh[0]} ${wh[1] -
                ch}Z" fill="#f5f5f5"></path>`;
            const svgProjekteTopLeft = `<path d="M0 0 L0 ${ch} L${wh[0]} 4 L${
                wh[0]
            } 0Z" fill="#f5f5f5"></path>`;
            const svgProjekteTopRight = `<path d="M0 0 L0 4 L${wh[0]} ${ch /
                2} L${wh[0]} 0Z" fill="#f5f5f5"></path>`;

            // Creates first svg element for the first projekte section
            const firstPro = document.querySelector(".projekte:nth-child(4)");

            if (firstPro.querySelector(".top-left-skew") == null) {
                firstPro.insertAdjacentHTML(
                    "afterbegin",
                    `<svg class='top-left-skew'>${svgTopLeft}</svg>`
                );
            } else {
                el = firstPro.querySelector(".top-left-skew");
                firstPro.removeChild(el);
                firstPro.insertAdjacentHTML(
                    "afterbegin",
                    `<svg class='top-left-skew'>${svgTopLeft}</svg>`
                );
            }

            // Creates svg elements for first projekte image
            // Find first projekte section link
            let tmp;
            el = firstPro.querySelector(
                ".projekte-wrapper .row .col-lg-6#projekte-slide-1"
            ).innerHTML;
            tmp = /href\=\"\/projekte\/\w+\"/.test(el);
            if (tmp != null) {
                tmp = /href\=\"\/projekte\/\w+\"/.exec(el);
            }
            if (tmp == null) {
                tmp = /href\=\"\/en\/projects\/\w+\"/.exec(el);
            }
            firstPro.querySelector(
                ".projekte-wrapper .row .col-lg-6#projekte-slide-1"
            ).innerHTML = `<svg class='projekte-bottom-left-skew'>${svgProjekteBottomLeft}</svg><a ${tmp}></a>`;

            // Creates svg elements for the last projekte section
            const lastPro = document.querySelector(".projekte:nth-child(14)");
            wh = [
                body.getBoundingClientRect().width,
                lastPro.getBoundingClientRect().height
            ];
            const svgBtmLeft = `<path d="M0 ${wh[1] - ch / 2} L0 ${wh[1] +
                2} L${wh[0]} ${wh[1] + 2} L${wh[0]} ${
                wh[1]
            }" fill="white"></path>`;

            if (lastPro.querySelector(".bottom-left-skew") == null) {
                lastPro.insertAdjacentHTML(
                    "afterbegin",
                    `<svg class='bottom-left-skew'>${svgBtmLeft}</svg>`
                );
            } else {
                el = lastPro.querySelector(".bottom-left-skew");
                lastPro.removeChild(el);
                lastPro.insertAdjacentHTML(
                    "afterbegin",
                    `<svg class='bottom-left-skew'>${svgBtmLeft}</svg>`
                );
            }

            // Creates SVG elements excluding the first projekte section
            // Create an array that stores image links
            let links = [];
            let selector;

            // Find links and store them
            for (let i = 2; i < 12; i += 1) {
                selector = `.projekte > .row > .col-lg-6#projekte-slide-${i}`;
                el = document.querySelector(selector).innerHTML;
                tmp = /href\=\"\/projekte\/\w+\"/.test(el);
                if (tmp != null) {
                    links[i] = /href\=\"?(\/)projekte\/\w+\"/.exec(el);
                }
                tmp = /href\=\"?(\/)en\/projects\/\w+\"/.test(el);
                if (tmp != null) {
                    links[i] = /href\=\"?(\/)en\/projects\/\w+\"/.exec(el);
                }
            }

            for (let i = 2; i < 12; i += 1) {
                selector = `.projekte > .row > .col-lg-6#projekte-slide-${i}`;
                el = document.querySelector(selector);
                if (i % 2 === 0) {
                    // Check if even numbered to have right sided angled skews
                    el.innerHTML = `<svg class='projekte-top-right-skew'>${svgProjekteTopRight}</svg><svg class='projekte-bottom-right-skew'>${svgProjekteBottomRight}</svg><a ${
                        links[i]
                    }></a>`;
                } else {
                    // If not will have left sided angled skews
                    el.innerHTML = `<svg class='projekte-top-left-skew'>${svgProjekteTopLeft}</svg><svg class='projekte-bottom-left-skew'>${svgProjekteBottomLeft}</svg><a ${
                        links[i]
                    }></a>`;
                }
            }
        }

        // Check if projekte product classes exist and create svg elements
        if (slide != null) {
            const ss = slide.getBoundingClientRect().height; // Slide section height
            const svgSlideBtmLeft = `<path d="M0 ${ss - ch / 2} L0 ${ss + 2} L${
                wh[0]
            } ${ss + 2} L${wh[0]} ${ss}Z" fill="white" />`;
            // Retrieve the other sections
            const slideRow = document.querySelector(
                "section:nth-child(5) .row"
            );
            const slideTwo = document.querySelector(".section-slide-2");
            const slideThree = document.querySelector(".section-slide-3");
            const slideFour = document.querySelector(".section-slide-4");
            const slideFive = document.querySelector(".section-slide-5");

            slide.setAttribute("class", "section-slide-1 no-top height-100");
            document
                .querySelector("section:nth-child(4)")
                .setAttribute("class", "height-100");

            if (slideTwo != null) {
                document
                    .querySelector("section:nth-child(5)")
                    .setAttribute("class", "height-100");
                if (slide.parentNode.querySelector(".top-left-skew") == null) {
                    slide.insertAdjacentHTML(
                        "beforebegin",
                        `<svg class='top-left-skew'>${svgTopLeft}</svg>`
                    );
                } else {
                    el = slide.parentNode.querySelector(".top-left-skew");
                    slide.parentNode.removeChild(el);
                    slide.insertAdjacentHTML(
                        "beforebegin",
                        `<svg class='top-left-skew'>${svgTopLeft}</svg>`
                    );
                }
                if (slideRow != null) {
                    slideTwo.setAttribute(
                        "class",
                        "col-6 section-slide-2 no-top"
                    );
                } else {
                    slideTwo.setAttribute("class", "section-slide-2 no-top");
                }
                if (slideThree != null) {
                    document
                        .querySelector("section:nth-child(6)")
                        .setAttribute("class", "height-100");
                    if (slideRow != null) {
                        slideThree.setAttribute(
                            "class",
                            "col-6 section-slide-3 no-top"
                        );
                    } else {
                        slideThree.setAttribute(
                            "class",
                            "section-slide-3 no-top"
                        );
                    }
                    if (slideFour != null) {
                        document
                            .querySelector("section:nth-child(7)")
                            .setAttribute("class", "height-100");
                        slideFour.setAttribute(
                            "class",
                            "section-slide-4 no-top"
                        );
                        if (slideFive == null) {
                            if (
                                slideFour.parentNode.querySelector(
                                    ".projekte-page-bottom-left-skew"
                                ) == null
                            ) {
                                slideFour.insertAdjacentHTML(
                                    "beforebegin",
                                    `<svg class='projekte-page-bottom-left-skew'>${svgSlideBtmLeft}</svg>`
                                );
                            } else {
                                el = slideFour.parentNode.querySelector(
                                    ".projekte-page-bottom-left-skew"
                                );
                                slideFour.parentNode.removeChild(el);
                                slideFour.insertAdjacentHTML(
                                    "beforebegin",
                                    `<svg class='projekte-page-bottom-left-skew'>${svgSlideBtmLeft}</svg>`
                                );
                            }
                        }
                        if (slideFive != null) {
                            document
                                .querySelector("section:nth-child(7)")
                                .setAttribute("class", "height-100");
                            slideFive.setAttribute(
                                "class",
                                "section-slide-4 no-top"
                            );
                            if (
                                slideFive.parentNode.querySelector(
                                    ".projekte-page-bottom-left-skew"
                                ) == null
                            ) {
                                slideFive.insertAdjacentHTML(
                                    "beforebegin",
                                    `<svg class='projekte-page-bottom-left-skew'>${svgSlideBtmLeft}</svg>`
                                );
                            }
                        }
                    } else {
                        if (
                            slideThree.parentNode.querySelector(
                                ".projekte-page-bottom-left-skew"
                            ) == null
                        ) {
                            slideThree.insertAdjacentHTML(
                                "beforebegin",
                                `<svg class='projekte-page-bottom-left-skew'>${svgSlideBtmLeft}</svg>`
                            );
                        } else {
                            el = slideThree.parentNode.querySelector(
                                ".projekte-page-bottom-left-skew"
                            );
                            slideThree.parentNode.removeChild(el);
                            slideThree.insertAdjacentHTML(
                                "beforebegin",
                                `<svg class='projekte-page-bottom-left-skew'>${svgSlideBtmLeft}</svg>`
                            );
                        }
                    }
                } else {
                    if (
                        slideTwo.parentNode.querySelector(
                            ".projekte-page-bottom-left-skew"
                        ) == null
                    ) {
                        slideTwo.insertAdjacentHTML(
                            "beforebegin",
                            `<svg class='projekte-page-bottom-left-skew'>${svgSlideBtmLeft}</svg>`
                        );
                    } else {
                        el = slideTwo.parentNode.querySelector(
                            ".projekte-page-bottom-left-skew"
                        );
                        slideTwo.parentNode.removeChild(el);
                        slideTwo.insertAdjacentHTML(
                            "beforebegin",
                            `<svg class='projekte-page-bottom-left-skew'>${svgSlideBtmLeft}</svg>`
                        );
                    }
                }
            } else {
                if (
                    slide.parentNode.querySelector(
                        ".projekte-page-bottom-left-skew"
                    ) == null
                ) {
                    slide.insertAdjacentHTML(
                        "beforebegin",
                        `<svg class='top-left-skew'>${svgTopLeft}</svg><svg class='projekte-page-bottom-left-skew'>${svgSlideBtmLeft}</svg>`
                    );
                } else {
                    el = slide.parentNode.querySelector(
                        ".projekte-page-bottom-left-skew"
                    );
                    slide.parentNode.removeChild(el);
                    el = slide.parentNode.querySelector(".top-left-skew");
                    slide.parentNode.removeChild(el);
                    slide.insertAdjacentHTML(
                        "beforebegin",
                        `<svg class='top-left-skew'>${svgTopLeft}</svg><svg class='projekte-page-bottom-left-skew'>${svgSlideBtmLeft}</svg>`
                    );
                }
            }
        }
    } catch (err) {
        console.log(err.message);
    }
};

// Run the functions at first launch
const runSvgAlt = () => {
    try {
        createRerenderSvgDomElements();

        // Run the functions when the windows are resized
        window.addEventListener("resize", () => {
            try {
                createRerenderSvgDomElements();
            } catch (err) {
                console.log(err);
            }
        });
    } catch (err) {
        console.log(err);
    }
};

const checkBrowserRender = () => {
    const ua = navigator.userAgent;
    const M =
        ua.match(
            /(opera|chrome|safari|firefox|msie|trident|edge(?=\/))\/?\s*(\d+)(\.\d+)+/i
        ) || [];
    if (/trident/i.test(M[1])) {
        return runSvgAlt(); // Internet Explorer present
    }
    if (M[1] === "Chrome") {
        const chrome = ua.match(/\bChrome\/(\d+?(.\d+)+)/i);
        const opera = ua.match(/\bOPR\/(\d+?(.\d+)+)/i);
        const edge = ua.match(/\bEdge\/(\d+?(.\d+)+)/i);

        if (edge != null) {
            if (parseFloat(edge[1]) < 75) {
                return runSvgAlt();
            }
            return null;
        }
        if (opera != null) {
            if (parseFloat(opera[1]) < 45) {
                return runSvgAlt();
            }
            return null;
        }
        if (chrome != null) {
            if (parseFloat(chrome[1]) < 45) {
                if (ios[1] < 537.71) {
                    return runSvgAlt();
                }
            }
        }
    }
    if (M[1] === ("Safari" || "AppleWebkit")) {
        if (parseFloat(M[0]) < 537.71) {
            return runSvgAlt();
        }
    }
    if (M[1] === "Firefox") {
        if (parseFloat(M[0]) < 54) {
            return runSvgAlt();
        }
    }
};

checkBrowserRender();

// });
