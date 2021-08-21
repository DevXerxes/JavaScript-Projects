//Global variable example, accessing a funciton from the outside of it
var X =10;
function numbers_add_1() {
    document.write(20 + X + "<br>");
}
function numbers_add_2() {
    document.write(X + 100);
}
numbers_add_1();
numbers_add_2();

//Local variable function used within a function 
function Numbers_add_1() {
    var Y = 15;
    document.write(20 + Y + "<br>");
}
function Numbers_add_2() {
    document.write(Y + 200);
}
Numbers_add_1();
Numbers_add_2();

//In this function there's a console.log method included to help debug code within browser
function Add_numbers_1() {
    var C = 10;
    console.log(15 + C);
}
function Add_numbers_2() {
    console.log(C + 100);
}
Add_numbers_1();
Add_numbers_2();

//This function date().gethours() method returns hour in the specified date according to local time, and hours listed as integers between 0 and 23.
function Telling_Time() {
    if (new Date().getHours() < 18) {
        document.getElementById("Clock").innerHTML = "Como le va su dia?";
    }
}

//this is my example of an IF function
function My_example() {
    var X = 21;
    var Y = 20;
    if (Y < X) {
        document.getElementById("IF").innerHTML = "You aren't old enough to drink.";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Can_Drink = "You are old enough to drink alcohol.";
    }
    else {
        Can_Drink = "You are not old enough for alcohol consumption.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Can_Drink;
}

//This program oulls the local time from your computer and tells what time of day it is\
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Good Morning!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "Good Afternoon!"
    }
    else {
        Reply = "Nice Evening.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}