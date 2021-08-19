function additionFunction() {
    var addition = 14 + 7;
    document.getElementById("Math").innerHTML = "14 + 7 ="+ addition; //The function returns the sum of 14 and 7
}
function subFunction() {
    var Subtraction = 345 - 130;
    document.getElementById("Sum").innerHTML = "345 - 130 ="+ Subtraction; //The function returns the sum of 345 and 130
}
function mult() {
    var simple_Math = 153 * 5;
    document.getElementById("product").innerHTML = "153 x 5 ="+ simple_Math; //The function returns the product of 153 and 5
}
function divi() {
    var simple_Math = 3040 / 4;
    document.getElementById("result").innerHTML = "3040 / 4 ="+ simple_Math; //The function returns the remainder of 153 and 5
}
function allinone() { //This function includes all arithmetic operators done in one process, add, multiply, divide and subtract
    var simple_Math = (24 + 61) * 17 / 75 - 56;
    document.getElementById("More").innerHTML = "24 plus 61, multiplied by 17, divided by 75 and then subtracted by 56 equals"
    + simple_Math
}
function modOperator() { //This function uses the symbol % to represent the modulus operator aka remainder operator that divides two numbers
    var simple_Math = 22 % 5;
    document.getElementById("Mod").innerHTML = "When you divide 22 by 5 you have a remainder of: " + simple_Math;
}
function negationOp() {  //This function gives result back as opposite or negative, negative in this example
    var x = 33;
    document.getElementById("Negative").innerHTML = -x;
}
var M = 21;  //This function moves up value by one (increment)
M++;
document.write(M);

var N = 24; //This function moves value down by one (decrement)
N--;
document.write(N);

window.alert(Math.random() * 100);
 
function Pie() {
    document.getElementById("piDemo").innerHTML = Math.PI;  //Function that returns the PI using math object method
}

function round() {
    document.getElementById("roundDemo").innerHTML = Math.round(34.47); //Function using math object method to round a number
}
