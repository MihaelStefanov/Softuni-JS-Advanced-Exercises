// function editElement() {
//    const elementProperty = document.getElementById('e1')
//    const firstText = elementProperty.textContent.substring(0, 7);
//    elementProperty.textContent = firstText + "Document Object Model!";
// }

function editElement(element, placeholder, newValue) {
    if(element.innerHTML.includes(placeholder) ) {
        element.innerHTML = element.innerHTML.replace(placeholder, newValue);
    }
}