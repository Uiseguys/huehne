// window.addEventListener("DOMContentLoaded", () => {
// Create svg files that dynamically change with the image size
// svgDrawer Draws using body width
const svgDrawer = () => {
    try {
        const main = document.querySelector(".main-section");
        const projekte = document.querySelector(".projekte");
        const projekteBtmLeft = document.querySelector(".projekte > .bottom-left-skew");
        const body = document.querySelector("body");
        const wh = [body.getBoundingClientRect().width, body.getBoundingClientRect().height]; // An array of both width and height of the body
        // height of the slant 12% of total height
        const ch = 0.12 * wh[1];
        const svgBottomLeft = `<path d="M0 ${wh[1] - (ch / 2)} L0 ${wh[1]} L${wh[0]} ${wh[1]}Z" fill="white" />`;
        const svgBottomRight = `<path d="M0 ${wh[1]} L${wh[0]} ${wh[1]} L${wh[0]} ${wh[1] - (ch / 2)}Z" fill="white" />`;
        const svgTopLeft = `<path d="M0 0 L0 ${ch} L${wh[0]} 0Z" fill="white" />`;
        // const svgTopRight = `<path d="M0 0 L${wh[0]} ${ch} L${wh[0]} 0Z" fill="white" />`;

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
        const ch = Math.round(0.12 * body.getBoundingClientRect().height);

        // Svg Path Strings
        const svgBottomLeft = `<path d="M0 ${wh[1] - (ch / 2)} L0 ${wh[1]} L${wh[0]} ${wh[1]}Z" fill="#f5f5f5" />`;
        const svgBottomRight = `<path d="M0 ${wh[1]} L${wh[0]} ${wh[1]} L${wh[0]} ${wh[1] - ch}Z" fill="#f5f5f5" />`;
        const svgTopLeft = `<path d="M0 0 L0 ${ch} L${wh[0]} 0Z" fill="#f5f5f5" />`;
        const svgTopRight = `<path d="M0 0 L${wh[0]} 0 L${wh[0]} ${ch / 2}Z" fill="#f5f5f5" />`;

        // Change the last projekte skew to have the proper
        // class depending on screen size
        const q = document.querySelector(".projekte #projekte-slide-11 svg"); // Fetch svg element to be changed
        if (body.getBoundingClientRect().width < 992) {
            if (q.getAttribute("class") == "projekte-top-left-skew") {
                q.setAttribute("class", "projekte-left-skews");
            }
        } else {
            if (q.getAttribute("class") == "projekte-left-skews") {
                q.setAttribute("class", "projekte-top-left-skew");              
            }
        }

        // Render top left skew only if the last projekte skew has the respective class
        if (body.querySelector(".projekte-top-left-skew") != null) {
            body.querySelector(".projekte-top-left-skew").innerHTML = svgTopLeft;
        }
        body.querySelector(".projekte-bottom-left-skew").innerHTML = svgBottomLeft;
        body.querySelectorAll(".projekte-left-skews").forEach((item) => { item.innerHTML = svgTopRight + svgBottomRight; });
        body.querySelectorAll(".projekte-right-skews").forEach((item) => { item.innerHTML = svgTopLeft + svgBottomLeft; });
    } catch (err) {
        console.log(err);
    }
};

// Run the apps at first launch
svgDrawer();
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
