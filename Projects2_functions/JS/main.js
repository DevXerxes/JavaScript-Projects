function The_First_Function() {
    var str = "Purple grapes!";
    var result = str.fontcolor("purple")
    document.getElementById("Purple_Text").innerHTML = result;
    var text = "Green Watermelons!";
    var solution = text.fontcolor("green")
    document.getElementById("Green_Text").innerHTML = solution;
}
function myFunction() { //assigned a function to use in my HTMl file
    var sentence = "I am learning";
    sentence += " a lot from The Tech Academy!"; //+= operator concatenates values together
    document.getElementById("Concatenate").innerHTML = sentence;
}