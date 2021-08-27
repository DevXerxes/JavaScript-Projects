//this function creates a clickable list to explain the element's properties by clicking on it
function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is part of the " + character.innerHTML + " zombie game universe!");
}