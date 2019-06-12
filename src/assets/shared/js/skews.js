// window.addEventListener("DOMContentLoaded", () => {
// Create svg files that dynamically change with the image size
// svgDrawer Draws using body width

// Adding SVG Elements to the DOM
const createSvgDomElements = () => {
    try {
        const mainInner = document.querySelector(".main-section > .container"); // Main Section bottom left skew
        const pro = document.querySelector(".projekte");
        const slide = document.querySelector(".section-slide-1");

        // Main Section SVG Element
        mainInner.insertAdjacentHTML("beforebegin", "<svg class='bottom-left-skew'><svg>");

        // Index Pages Projekte Sections SVG elements
        if (pro != null) {
            // Creates first svg element for the first projekte section
            const firstPro = document.querySelector(".projekte:nth-child(4)");
            firstPro.querySelector(".container").insertAdjacentHTML("beforebegin", "<svg class='top-left-skew'><svg>");
            // Creates svg elements for first projekte image
            firstPro.querySelector(".projekte-wrapper .row .col-lg-6#projekte-slide-1").innerHTML = "<svg class='projekte-bottom-left-skew'></svg>";

            // Creates svg elements for the last projekte section
            const lastPro = document.querySelector(".projekte:nth-child(14) > .container");
            lastPro.insertAdjacentHTML("beforebegin", "<svg class='bottom-left-skew'><svg>");

            // Creates SVG elements excluding the first projekte section
            let selector;
            let el;
            for (let i = 2; i < 12; i += 1) {
                selector = `.projekte > .row > .col-lg-6#projekte-slide-${i}`;
                el = document.querySelector(selector);
                if (i % 2 === 0) { // Check if even numbered to have right sided angled skews
                    el.innerHTML = "<svg class='projekte-top-right-skew'></svg><svg class='projekte-bottom-right-skew'></svg>";
                } else { // If not will have left sided angled skews
                    el.innerHTML = "<svg class='projekte-top-left-skew'></svg><svg class='projekte-bottom-left-skew'></svg>";
                }
            }
        }

        // Check if projekte product classes exist and create svg elements
        if (slide != null) {
            // Retrieve the other two sections
            const slideTwo = document.querySelector(".section-slide-2");
            const slideThree = document.querySelector(".section-slide-3");

            slide.innerHTML = "<svg class='top-left-skew'></svg>";
            slideThree.innerHTML = "<svg class='bottom-left-skew'></svg>";
            slideTwo.style.marginTop = "0";
            slideThree.style.marginTop = "0";
        }
    } catch (err) {
        console.log(err);
    }
};

// Assign skews
const svgDrawer = () => {
    try {
        // Retrieving DOM elements that will have skews added
        const main = document.querySelector(".main-section");
        const projekte = document.querySelector(".projekte");
        const projekteBtmLeft = document.querySelector(".projekte:nth-child(14) > .bottom-left-skew");
        const body = document.querySelector("body");
        const slide = body.querySelector(".section-slide-3 svg");
        const wh = [body.getBoundingClientRect().width, body.getBoundingClientRect().height]; // An array of both width and height of the body

        // height of the slant 60px + 4 adjusting for margins
        const ch = 60 + 4;

        // Paths to be added to SVG elements
        const svgBottomLeft = `<path d="M0 ${wh[1] - (ch / 2)} L0 ${wh[1] + 4} L${wh[0]} ${wh[1] + 4} L${wh[0]} ${wh[1] - 1}Z" fill="white" />`;
        const svgBottomRight = `<path d="M0 ${wh[1]} L0 ${wh[1] + 4} L${wh[0]} ${wh[1] + 4} L${wh[0]} ${wh[1] - (ch / 2)}Z" fill="white" />`;
        const svgTopLeft = `<path d="M0 0 L0 ${ch + 2} L${wh[0]} 2 L${wh[0]} 0Z" fill="white" />`;

        // Change svg elements inner HTML with Path Strings
        main.querySelector(".bottom-left-skew").innerHTML = svgBottomLeft;
        if (projekte != null) {
            // Rendering for bottom left skew on last projekte section
            // Height needs to be changed to accomodate the smaller projekte sections
            const prWh = projekte.getBoundingClientRect().height; // Projekte section height
            const svgBtmLeft = `<path d="M0 ${prWh - (ch / 2)} L0 ${prWh} L${wh[0]} ${prWh}Z" fill="white" />`;
            projekteBtmLeft.innerHTML = svgBtmLeft;
        }
        if (body.querySelector(".bottom-right-skew") != null) {
            body.querySelector(".bottom-right-skew").innerHTML = svgBottomRight;
        }
        if (body.querySelector(".top-left-skew") != null) { // Check if class even exists
            body.querySelector(".top-left-skew").innerHTML = svgTopLeft;
        }
        if (slide != null) { // Check if class even exists
            slide.innerHTML = svgBottomLeft;
        }
    } catch (err) {
        console.log(err);
    }
};

// This function targets the projekte sections of the landing page
// which have different width and height considerations to be made
const svgProjekteDrawer = () => {
    try {
        const col = document.getElementById("projekte-slide-1").getBoundingClientRect();
        const body = document.querySelector("body");
        const wh = [col.width, col.height]; // An array of both width and height of the projekte elements
        // height of the slant 60px + 2 accounting for margins
        const ch = 60 + 4;

        // Svg Path Strings
        const svgBottomLeft = `<path d="M0 ${wh[1] - (ch / 2)} L0 ${wh[1] + 4} L${wh[0]} ${wh[1] + 4} L${wh[0]} ${wh[1]}Z" fill="#f5f5f5" />`;
        const svgBottomRight = `<path d="M0 ${wh[1]} L0 ${wh[1] + 4} L${wh[0]} ${wh[1] + 4} L${wh[0]} ${wh[1] - ch}Z" fill="#f5f5f5" />`;
        const svgTopLeft = `<path d="M0 0 L0 ${ch} L${wh[0]} 4 L${wh[0]} 0Z" fill="#f5f5f5" />`;
        const svgTopRight = `<path d="M0 0 L0 4 L${wh[0]} ${ch / 2} L${wh[0]} 0Z" fill="#f5f5f5" />`;

        // Add SVG path to class
        body.querySelectorAll(".projekte-top-left-skew").forEach((item) => { item.innerHTML = svgTopLeft; });
        body.querySelectorAll(".projekte-bottom-left-skew").forEach((item) => { item.innerHTML = svgBottomLeft; });
        body.querySelectorAll(".projekte-top-right-skew").forEach((item) => { item.innerHTML = svgTopRight; });
        body.querySelectorAll(".projekte-bottom-right-skew").forEach((item) => { item.innerHTML = svgBottomRight; });
        body.querySelectorAll(".projekte-right-skews").forEach((item) => { item.innerHTML = svgTopLeft + svgBottomLeft; });
    } catch (err) {
        console.log(err);
    }
};

// Run the functions at first launch
if (!(CSS.supports("clip-path", "polygon(0 0, 0 100%, 100% 100%, 0 100%)"))) { // Test if clip-path is supported
    createSvgDomElements();
    svgDrawer();
    // Check to see if the projekte sections are present in the current viewed page
    if (document.querySelector(".projekte") != null) {
        svgProjekteDrawer();
    }

    // Run the functions when the windows are resized
    window.addEventListener("resize", () => {
        try {
            if (!(CSS.supports("clip-path", "polygon(0 0, 0 100%, 100% 100%, 0 100%)"))) {
                svgDrawer();
                // Check to see if the projekte sections are present in the current viewed page
                if (document.querySelector(".projekte") != null) {
                    svgProjekteDrawer();
                }
            }
        } catch (err) {
            console.log(err);
        }
    });
}
// });
