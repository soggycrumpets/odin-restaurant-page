import "./style.css"
import { buildHomePage } from "./home";

const parentElement = document.querySelector("#content");

buildHomePage(parentElement);
explode();

function explode() {
    const children = document.querySelectorAll("#contant>"); 
    for (child of children) {
        child.remove();
    }
}