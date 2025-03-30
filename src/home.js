import { buildElement } from "./util";

export function buildHomePage(parentElement) {
    parentElement.appendChild(buildGreeting());
    parentElement.appendChild(buildIntroduction());
    parentElement.appendChild(buildHours());
}

function buildGreeting() {
    const heading = buildElement("h1", "Welcome to Carrot Souffle Castle!");    
    return heading;
}

function buildIntroduction() {
    const introduction = buildElement("div");

    const heading = "A souffle to remember";
    const paragraph = "Here at Carrot Souffle Castle, we offer only the finest of souffles, made with only the highest quality ingredients.";

    introduction.appendChild(buildElement("h2", heading));
    introduction.appendChild(buildElement("p", paragraph));

    return introduction;
}

function buildHours() {
    const hours = buildElement("div");    

    const heading = "Hours";
    const paragraph = "24/7";

    hours.appendChild(buildElement("h2", heading));
    hours.appendChild(buildElement("p", paragraph));

    return hours;
}