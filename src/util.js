export function buildElement(elementType, text, elementClasses) {
    const element = document.createElement(elementType);
    element.textContent = text;

    // This way, elementClasses can be a single class OR an array of classes
    if (typeof elementClasses === typeof []) {
        for (let elementClass of elementClasses) {
            element.setAttribute("class", elementClass);
        }
    } else {
        element.setAttribute("class", elementClasses);
    }


    return element;
}