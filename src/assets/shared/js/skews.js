// window.addEventListener("DOMContentLoaded", () => {
// Create svg files that dynamically change with the image size
// svgDrawer Draws using body width
const svgDrawer = () => {
    try {
        // Retrieving DOM elements that will have skews added
        const main = document.querySelector(".main-section");
        const projekte = document.querySelector(".projekte");
        const projekteBtmLeft = document.querySelector(".projekte > .bottom-left-skew");
        const body = document.querySelector("body");
        const wh = [body.getBoundingClientRect().width, body.getBoundingClientRect().height]; // An array of both width and height of the body
        // height of the slant 12% of total height
        const ch = 60 + 2;
        const svgBottomLeft = `<path d="M0 ${wh[1] - (ch / 2)} L0 ${wh[1] + 2} L${wh[0]} ${wh[1] + 2} L${wh[0]} ${wh[1] - 1}Z" fill="white" />`;
        const svgBottomRight = `<path d="M0 ${wh[1]} L0 ${wh[1] + 2} L${wh[0]} ${wh[1] + 2} L${wh[0]} ${wh[1] - (ch / 2)}Z" fill="white" />`;
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
        // height of the slant 12% of total height
        const ch = 60 + 2;

        // Svg Path Strings
        const svgBottomLeft = `<path d="M0 ${wh[1] - (ch / 2)} L0 ${wh[1] + 2} L${wh[0]} ${wh[1] + 2} L${wh[0]} ${wh[1]}Z" fill="#f5f5f5" />`;
        const svgBottomRight = `<path d="M0 ${wh[1]} L0 ${wh[1] + 2} L${wh[0]} ${wh[1] + 2} L${wh[0]} ${wh[1] - ch}Z" fill="#f5f5f5" />`;
        const svgTopLeft = `<path d="M0 0 L0 ${ch + 2} L${wh[0]} 2 L${wh[0]} 0Z" fill="#f5f5f5" />`;
        const svgTopRight = `<path d="M0 0 L0 2 L${wh[0]} ${ch / 2} L${wh[0]} 0Z" fill="#f5f5f5" />`;

        // class depending on screen size
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
svgDrawer();
// Check to see if the projekte sections are present in the current viewed page
if (document.querySelector(".projekte") != null) {
    svgProjekteDrawer();
}

// Run the functions when the windows are resized
window.addEventListener("resize", () => {
    try {
        svgDrawer();
        if (document.querySelector(".projekte") != null) {
            svgProjekteDrawer();
        }
    } catch (err) {
        console.log(err);
    }
});
// });
