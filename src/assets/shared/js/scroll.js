// @flow
// Gettng elements from the document
// Whose scroll is to be manipulated
const inf = document.getElementById("info");
const bio = document.getElementById("avatar");
const avt = document.getElementById("main-pro-pic");
const feed = document.getElementById("feed");
const header = document.getElementById("rantbox-cover");
const avtBg = document.getElementsByClassName("avatar-blob-bg");

// Computing the height of the main profile/avatar image and
// halfing it so that we can account for the displaced space
// and adding 30px on top of it
const h = (parseFloat(getComputedStyle(avt).height) / 2) + 20;

let lastScroll: number = 0;
let d: number = 0;
// Adding Scroll event listener
window.addEventListener("scroll", () => {
    // Find the current scroll offset in the window
    const pageOffset: number = window.pageYOffset;
    // Condition to check for Down Scroll
    if (pageOffset > lastScroll) {
        // Rotate Blob Clockwise
        d += 5;
        for (let i = 0; i < avtBg.length; i += 1) {
            const trans: string = `transform: rotate(${d}deg); transition: 1s ease;`;
            avtBg[i].setAttribute("style", trans);
        }
        // Checking the vertical position of the info section and fixing it
        if (inf.getBoundingClientRect().top <= 0) {
            inf.setAttribute("style", "position: fixed; right: 0; top: 0;");
        }

        // Checking the vertical position of the info section and fixing
        // the bio section
        if (inf.getBoundingClientRect().top <= h) {
            const sty: string = `position: fixed; left: 0; top: ${h}px;`;
            bio.setAttribute("style", sty);
            feed.setAttribute("style", "margin-left: 25%;");
        }
    } else { // Up Scroll
        // Rotate Blob anti clockwise
        d -= 5;
        for (let i = 0; i < avtBg.length; i += 1) {
            const trans: string = `transform: rotate(${d}deg);  transition: 1s ease;`;
            avtBg[i].setAttribute("style", trans);
        }
        // Checking the vertical position of the header section while
        // scrolling back up and unfixing the info section
        if (header.getBoundingClientRect().bottom >= 0) {
            if (inf.getBoundingClientRect().top <= 0) {
                inf.setAttribute("style", "position: relative; right: auto; top: auto;");
            }
        }

        // Checking the vertical position of the header section while
        // scrolling back up and unfixing the bio section
        if (header.getBoundingClientRect().bottom >= h) {
            if (bio.getBoundingClientRect().top <= h) {
                bio.setAttribute("style", "position: relative; left: auto; top: auto;");
                feed.setAttribute("style", "margin-left: 0;");
            }
        }
    }
    lastScroll = pageOffset;
});
