// window.addEventListener("DOMContentLoaded", () => {
// Create svg files that dynamically change with the image size
const svgDrawer = () => {
    try {
        const main = document.querySelector(".main-section");
        const body = document.querySelector("body");
        const wh = [body.getBoundingClientRect().width, body.getBoundingClientRect().height]; // An array of both width and height of the body

        // height of the slant 12% of total height
        const ch = 0.12 * wh[1];
        const svgBottom = `<path d="M0 ${wh[1] - ch} L0 ${wh[1]} L${wh[0]} ${wh[1]}Z" fill="white" />`;
        const svgTopLeft = `<path d="M0 0 L0 ${ch} L${wh[0]} 0Z" fill="white" />`;
        // const svgTopRight = `<path d="M0 0 L${wh[0]} ${ch} L${wh[0]} 0Z" fill="white" />`;

        main.querySelector(".bottom-slide-left").innerHTML = svgBottom;
        body.querySelectorAll(".top-left-slide").forEach((item) => { item.innerHTML = svgTopLeft; });
        // landing.querySelectorAll(".top-right-slide").forEach((item) => { item.innerHTML = svgTopRight; });
    } catch (err) {
        console.log(err);
    }
};

const svgProjekteDrawer = () => {
    try {
        const projekte = document.getElementsByClassName("projekte");
        const col = document.getElementById("projekte-slide-1").getBoundingClientRect();
        const body = document.querySelector("body");

        const wh = [col.width, col.height]; // An array of both width and height of the body

        // height of the slant 12% of total height
        const ch = Math.round(0.12 * body.getBoundingClientRect().height);

        const svgBottomLeft = `<path d="M0 ${wh[1] - ch} L0 ${wh[1]} L${wh[0]} ${wh[1]}Z" fill="#f5f5f5" />`;
        const svgBottomRight = `<path d="M0 ${wh[1]} L${wh[0]} ${wh[1]} L${wh[0]} ${wh[1] - ch}Z" fill="#f5f5f5" />`;
        const svgTopLeft = `<path d="M0 0 L0 ${ch} L${wh[0]} 0Z" fill="#f5f5f5" />`;
        const svgTopRight = `<path d="M0 0 L${wh[0]} 0 L${wh[0]} ${ch}Z" fill="#f5f5f5" />`;

        body.querySelectorAll(".projekte-bottom-left").forEach((item) => { item.innerHTML = svgBottomLeft; });
        body.querySelectorAll(".projekte-left").forEach((item) => { item.innerHTML = svgTopRight + svgBottomRight; });
        body.querySelectorAll(".projekte-right").forEach((item) => { item.innerHTML = svgTopLeft + svgBottomLeft; });
    } catch (err) {
        console.log(err);
    }
};

svgDrawer();
svgProjekteDrawer();
window.addEventListener("resize", () => {
    try {
        svgDrawer();
        svgProjekteDrawer();
    } catch (err) {
        console.log(err);
    }
});
// });
