import "./style.css"
import { buildHomePage } from "./home";

const contentElement = document.querySelector("#content");
const buttons = (function () {
    const home = document.querySelector("#home-button");
    const menu = document.querySelector("#menu-button");
    const about = document.querySelector("#about-button");

    let activeButton = home;

    let setActive = function (button) {
        activeButton.removeAttribute("class", "button-active");
        button.setAttribute("class", "button-active");
        activeButton = button;
    }

    return { home, menu, about, setActive};
})();



buildHomePage(contentElement);
buttons.setActive(buttons.home);

buttons.home.addEventListener("click", () => {
    clearPage();
    buildHomePage(contentElement);
    buttons.setActive(buttons.home);
});

buttons.menu.addEventListener("click", () => {
    clearPage();
    buttons.setActive(buttons.menu);
});

buttons.about.addEventListener("click", () => {
    clearPage();
    buttons.setActive(buttons.about);
});


function clearPage() {
    const childElements = document.querySelectorAll("#content>*");
    for (let child of childElements) {
        child.remove();
    }
}