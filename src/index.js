import "./style.css"
import { buildHomePage } from "./home";
import { buildMenuPage } from "./menu";
import { buildAboutPage } from "./about";
const contentElement = document.querySelector("#content");


// Initialize content
buildHomePage(contentElement);
initButtons();



function initButtons() {
    const home = document.querySelector("#home-button");
    const menu = document.querySelector("#menu-button");
    const about = document.querySelector("#about-button");
    let activeButton = home;

    function setActive(button) {
        activeButton.removeAttribute("class", "button-active");
        button.setAttribute("class", "button-active");
        activeButton = button;
    }

    function setButtonEventListener(button, pageBuilder) {
        button.addEventListener("click", () => {
            clearPage();
            pageBuilder(contentElement);
            setActive(button);
        });
    }

    setActive(activeButton);
    setButtonEventListener(home, buildHomePage);
    setButtonEventListener(menu, buildMenuPage);
    setButtonEventListener(about, buildAboutPage);
}

function clearPage() {
    const childElements = document.querySelectorAll("#content>*");
    for (let child of childElements) {
        child.remove();
    }
}