//This function uses a while loop for counting up to 10
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//This function uses the length property to return the length of a string
function string_function() {
    let str = "The length property.";
    document.getElementById("length").innerHTML = str.length;;
}

//This function uses a FOR Loop to repeat particular code a number of times as long as a condition given is true
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//This function uses an array to organize cat pictures in a logical way
function array_Function() {
    var Planets = [];
    Planets[0] = "Venus";
    Planets[1] = "Saturn";
    Planets[2] = "Mars";
    Planets[3] = "Jupiter";
    Planets[4] = "Earth";
    document.getElementById("Array").innerHTML = "The planet " + Planets[2] + " is closer to " + Planets[4] + " then to " + Planets[1] + ".";
 }

 //This function uses a const keyword to create an object with properties having values and then able to change values of some identifiers
 function constant_function() {
     const Game_Console = {type: "Xbox series X", brand: "Microsoft", color: "black"};
     Game_Console.color = "green";
     Game_Console.price = "$750";
     document.getElementById("Constant").innerHTML = "The cost of the " + Game_Console.type + " was " + Game_Console.price + " and it's color is " + Game_Console.color + ".";
 }

 //Utilizing the LET keyword
 function let_function() {
     var X = 23;
     document.write(X)
     {
         let X = 22;
         document.write("<br>" + X);
     }
     document.write("<br>" + X);
 }

 //This function uses the return statement to return a value and display it
 function giveback_function(Xerxes) {
     return "Hello " + Xerxes;
 }
 document.getElementById("return").innerHTML = giveback_function("Xerxes");

 //this function creates an object with properties and methods using let keyword and displaying some properties using return keyword
 function object_function() {
     let fruit = {
         type: "Watermelon ",
         color: "Red ",
         nutrient: "139 g of water ",
         growth_time: "about 70 to 75 days ",
         season: "late spring to early summer ",
         description: function() {
             return "The fruit is a " + this.color + this.type + " that contains " + this.nutrient + " and takes " + this.growth_time + " to grow in " + this.season;
         }
     };
     document.getElementById("Fruit_Object").innerHTML = fruit.description();
 }

 //This function uses the break statement to jump out of a loop to perform a task
 function jump_function() {
    let text = "";
 for (let i = 0; i < 10; i++) {
     if (i === 3) { break; }
     text += "El numero es " + i + "<br>";
 }
 document.getElementById("break").innerHTML = text;
 }
 
//This function uses a continue statement to skip a step
function forward_function() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}