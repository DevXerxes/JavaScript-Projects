function connect_function() { //This function uses the concat() method to put elements together as one string(sentence)
    var part_1 = "This is ";
    var part_2 = "my concat method ";
    var part_3 = "example of ";
    var part_4 = "concatenating multiple strings into ";
    var part_5 = "a full sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {  //This function uses the slice() method to display the specified element only
    var Sentence = "Life is good when you have mentor to be a Mentee to.";
    var Section = Sentence.slice(26,33);
    var Section = Section.toUpperCase();
    document.getElementById("Slice").innerHTML = Section;
}

function search_function() {  //This function uses the search() method to display a matched element thats being searched for 
    let str = "Visit W3Schools!"; 
    document.getElementById("demo").innerHTML = str.search("W3Schools");
}

function string_Method() {  //This function uses the toString method to convert a number into a string. 
    var Y = 1245;
    document.getElementById("Numbers_to_string").innerHTML = Y.toString();
}

function precision_method() {  //This function uses the toPrecision() method to format a number to specified length
    var M = 11453.21309875488112324;
    document.getElementById("Precision").innerHTML = M.toPrecision(10);
}

function fixed_method() {  //this function uses the toFixed() method to convert number into string, rounding the number to keep only two decimals
    var num = 7.33352;
    var n = num.toFixed(2);
    document.getElementById("fix").innerHTML = n;
}

function value_method() {  //This function uses the valueOf() method to return the value of a string
    let str = "A primitive value brought back.";
    document.getElementById("of").innerHTML = str.valueOf();
}