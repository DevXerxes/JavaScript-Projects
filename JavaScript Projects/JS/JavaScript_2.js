// this function validates the contact form in the HTML file
function validateForm() {
    let x = document.forms["myForm"]
    ["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}