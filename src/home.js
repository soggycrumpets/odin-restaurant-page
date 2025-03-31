import { buildElement } from "./util";

export function buildHomePage(parentElement) {
    parentElement.appendChild(buildElement("h1", "Welcome to Carrot Souffle Castle"));

    let heading;
    let text;

    // Introduction
    heading = "A Souffle to Remember";
    text = "Here at Carrot Souffle Castle, we offer only the finest of souffles, made with only the highest quality ingredients.";
    parentElement.appendChild(buildSection(heading, text));

    // Hours
    heading = "Hours";
    text = "24/7";
    parentElement.appendChild(buildSection(heading, text));
    
    // Location
    heading = "Location";
    text = "1234 Carrot Lain, Greensville, New Souffland";
    parentElement.appendChild(buildSection(heading, text));

}

function buildSection(heading, text) {
    const section = buildElement("div");

    section.appendChild(buildElement("h2", heading));
    section.appendChild(buildElement("p", text));

    return section;
}