/** 
 * @Describtion Getting the landing page sections and creating the tabs in the nav-bar.
 * @pram sections > is the array of all sections in the site.
 * @pram nav > is the nav-bar element.
 * @pram tabs > is an array of all tabs.
 */
let sections = document.querySelectorAll("section");
let nav = document.querySelector(".page__header nav ul");
nav.className = "nav-bar";
sections.forEach((sec, i) => {
    // @pram tab > is section icon in the nav bar.
    let tab = document.createElement("li");
    tab.className = "tab";
    tab.innerText = sec.dataset.nav;
    nav.appendChild(tab);
    i == 0 ? tab.classList.add("active") : "";
});
let tabs = document.querySelectorAll(".tab");
/** 
 * @Describtion Checking the viewd section on the page and give it the active state.
 * @pram sections > is the array of all sections in the site.
 * @pram nav > is the nav-bar element.
 * @pram tabs > is an array of all tabs.
 */
function activeCheck() {
    tabs.forEach((tab, i) => {
        if (window.scrollY > sections[i].offsetTop - 80 && window.scrollY < sections[i].offsetTop + sections[i].offsetHeight) {
            tabs.forEach((tab, i) => {
                tab.classList.remove("active");
                sections[i].classList.remove("your-active-class")
            })
            tab.classList.add("active")
            sections[i].classList.add("your-active-class")
        }
    })
}

// @Describtion Addding the active state to viewed section while the page is loaded.

window.onload = () => {
    activeCheck()
}

// @Describtion Addding the active state to viewed section while scrolling.

window.addEventListener("scroll", () => {
    activeCheck()
})

/** 
// @Describtion Addding the active state to the section whose tabe is clicked.
 * @pram sections > is the array of all sections in the site.
 * @pram nav > is the nav-bar element.
 * @pram tabs > is an array of all tabs.
 */
function tabActivation() {
    tabs.forEach((tab, i) => {
        tab.addEventListener("click", (e) => {
            tabs.forEach((tab, i) => {
                tab.classList.remove("active");
                sections[i].classList.remove("your-active-class")
            })
            e.target.classList.add("active");
            if (tab.classList.contains("active")) {
                sections[i].classList.add("your-active-class")
                sections[i].scrollIntoView({ behavior: "smooth" })
            }
        })
    })
}
tabActivation()

/** 
// @Describtion Adding the active state to the closing button of the nav bar in phone screen
 * @pram closeButton > closing button of the nav bar.
 */

let closeButton = document.querySelector(".close-button")
closeButton.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    if (e.target.classList.contains("active")) {
        // nav.classList.add("active")
        document.querySelector(".navbar__menu").classList.add("visible")
    } else {
        // nav.classList.remove("active")
        document.querySelector(".navbar__menu").classList.remove("visible")
    }
})

/** 
// @Describtion setting up the functionality of scroll to top button
 * @pram closeButton > closing button of the nav bar.
 */

let scrollTop = document.querySelector(".scroll-top");

// @Describtion displaying the button while scroll down

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
        scrollTop.classList.add("active")
    } else {
        scrollTop.classList.remove("active")
    }
})

// @Describtion scroll to the top of the page when the button is clicked

scrollTop.addEventListener("click", () => window.scrollTo({
    top: 0,
    behavior: "smooth",
}))