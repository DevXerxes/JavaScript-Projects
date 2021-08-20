document.write(typeof 22.60); //This displays what type of data do we have in the parenthesis

document.write("36" + 5); //This type coercion adds number after number in quotes on top, s0 "10" + 8 = 108

function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('01171998'); //This function was to check if the value in parenthesis was a number or not
}

function Function2() {  //This function was to find the positive and negative infinity of a number compared to 1.7976931348623157E308
    document.getElementById("infinity").innerHTML = 1.7976931348623157E+10308 + "<br>" + -1.7976931348623157E+10308;
}

//These functions below determine whether these statements are true or false using Boolean logic
function boolean() {
    document.write(467>382);
    document.write(278<268);
}


//This console.log displays results in the console of browser.
console.log(92 + 8);

console.log(46>64); //This displays boolean decision in browser console

function doubleequal() { //This function uses the double equal method to use symbol "==" to compare values if they're true or false
    document.write(124==124);
    document.write(432==321);
}

function tripleequal() {  //These 2 following functions are examples of using the === symbol for comparing two items of their VALUE and TYPE
    x = 22;
    y = 22;
    document.write(x === y);

    m = 1999;
    n = "1998";
    document.write(m === n);
}

function triple2() {
    w = 4;
    e = '4';
    document.write(w === e);

    u = "mine";
    p = "us";
    document.write(u === p);
}

function AND() { //This function checks if both comparisons are true to be true
    document.write(8 > 4 && 12 > 8);
    document.write(8 > 12 && 12 > 8);
}

function OR() {  //this function checks if one or the other comparison is true to be true
    document.write(50 > 25 || 100 > 200);
    document.write(200 > 400 || 400 > 800);
}

function NOT() { //These 2 following functions check if the comparison if true or not
    document.getElementById("Not").innerHTML = !(30 > 20);
}

function NOT2() {
    document.getElementById("Not2").innerHTML = !(2 > 20);
}