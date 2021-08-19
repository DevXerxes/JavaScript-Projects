function Goals_Dictionary() {  //This function creates a dictionary of a chosen topic like cars actions(names of keys) and then describing their actions(values)
    var Goals = {
        Name: "Graduate Tech Academy",
        Why: "Fulfill my passion for Tech",
        How: "Stick to my study schedule",
        Time: "By February 2022",
        Result: "Master the Software Developer Skill(s) to become a Mentor to others."
    };
    delete Goals.Result; //This statement deletes keys before values is displayed
    document.getElementById("Dictionary").innerHTML = Goals.Result; //this displays the content of the function above
}