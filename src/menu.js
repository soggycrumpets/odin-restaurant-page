import { buildElement } from "./util";

export function buildMenuPage(parentElement) {
    let name;
    let description;
    let price;

    // Drinks
    parentElement.appendChild(buildElement("h1", "Drinks"));

    name = "Carrot Juice";
    description = "This beautiful orange blend is both nutritious and delicious."
    price = "$3.19"
    parentElement.appendChild(buildMenuItem(name, description, price));

    name = "Broccoli Juice";
    description = "This beautiful green blend is nutritious."
    price = "$1.99"
    parentElement.appendChild(buildMenuItem(name, description, price));


    // Souffles
    parentElement.appendChild(buildElement("h1", "Souffles", "new-section"));

    name = "Carrot Souffle";
    description = "Our signature dish. This souffle is guaranteed to knock your socks off."
    price = "$6.39"
    parentElement.appendChild(buildMenuItem(name, description, price));

    name = "Eggplant Delight";
    description = "One of our most popular souffles, we promise that this purple mound of delectibility will not disappoint"
    price = "$5.49"
    parentElement.appendChild(buildMenuItem(name, description, price));


    // Sides
    parentElement.appendChild(buildElement("h1", "Sides", "new-section"));

    name = "Carrots";
    description = "The freshness of our carrots pairs perfectly with our main dishes."
    price = "$1.99"
    parentElement.appendChild(buildMenuItem(name, description, price));

    name = "Baby Carrots";
    description = "A lighter alternative to our most popular side."
    price = "$0.99"
    parentElement.appendChild(buildMenuItem(name, description, price));
}


function buildMenuItem(name, description, price) {
    const menuItem = buildElement("div");

    menuItem.appendChild(buildElement("h2", name));
    menuItem.appendChild(buildElement("p", description));
    menuItem.appendChild(buildElement("h2", price));

    return menuItem;
}