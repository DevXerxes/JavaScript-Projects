//This function performs different actions based on conditions presented here
function Mortal_Kombat() {
    var Fighter_Output;
    var Fighters = document.getElementById("Fighter_input").value;
    var Fighter_String = " is a great fighter!";
    switch(Fighters) {
        case "Scorpion":
            Fighter_Output = "Scorpion" + Fighter_String;
        break;
        case "Sub-zero":
            Fighter_Output = "Sub-zero" + Fighter_String;
        break;
        case "Liu Kang":
            Fighter_Output = "Liu Kang" + Fighter_String;
        break;
        case "Raiden":
            Fighter_Output = "Raiden" + Fighter_String;
        break;
        case "Shang Tsung":
            Fighter_Output = "Shang Tsung" + Fighter_String;
        break;
        case "Mileena":
            Fighter_Output = "Mileena" + Fighter_String;
        break;
        case "Baraka":
            Fighter_Output = "Baraka" + Fighter_String;
        break;
        default:
        Fighter_Output = "Please enter a fighter exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Fighter_Output;
}

//This function uses the get.ElementsByClassName() method to display an element within a class
function get_water_function() {
    var B = document.getElementsByClassName("Water");
    B[0].innerHTML = "The shape of water has changed!";
}

//This uses the c.getContext to display text within a canvas as specified here
var c = 
document.getElementById("border");
var ctx = c.getContext("2d");
ctx.font = "150px Arial";
ctx.strokeText("Norma",50,120);

//This uses the createLinearGradient() Method to define a canvas with gradient coloring rectangle
var c =
document.getElementById("gradient");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "green");
grd.addColorStop(0.5, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);