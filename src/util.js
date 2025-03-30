export function buildElement(elementType, text) {
    const element = document.createElement(elementType); 
    element.textContent = text;
    return element;
}