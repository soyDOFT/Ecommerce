function validateContactForm() {
    event.preventDefault();

    let finalAlert = "Error: ";
    let fname = document.forms["contact-form"]["fname"].value;
    let regex = /[0-9]{1,50}/;
    if (fname === "" || regex.test(fname)) {
        finalAlert += "Enter your valid first name.\n";
    }

    let lname = document.forms["contact-form"]["lname"].value;
    if (lname === "" || regex.test(lname)) {
        finalAlert += "Enter your valid last name.\n";
    }

    if (finalAlert === "Error: ") {
        window.location.assign("index.html");
    } else {
        alert(finalAlert);
    }
}