function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function People(Age, Condition, Height) {
    this.People_Age = Age;
    this.People_Condition = Condition;
    this.People_Height = Height;
}
var Disabled = new People("16-55", "Handi-capped", "42");
var MiniMe = new People("16-60", "Short for life", "35");
var Elderly = new People("50-75", "Elder", "52 and up");
function newkey() {
    document.getElementById("New_and_This").innerHTML =
    "An exception is for the " + Disabled.People_Age + "-year old " + Disabled.People_Condition +
    " with a height of " + Disabled.People_Height;
}

function reservedFunc() {
    var Mom = volatile;
    document.write(Mom);
}

function count_Function() { //This function is within Nested Functions for add-ons to primary function to allow mutliple actions, counts 1 up from chosen number(Ex: cccchoose 9, returns 10)
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

const add = (function () { //This function includes a diverse nest of functions where it produces a program on website for clicking constantly to count up 1- infinity
    let counter = 0;
    return function () {counter += 1; return counter;}
})();

function UpFunction() {
    document.getElementById("Counting").innerHTML = add();
}