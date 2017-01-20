function ValidateForm() {
    var d = document.getElementById('FeedBackForm'); // just a shortcut
    var errors = false;
    var errorMsg = "";
// basic check required fields
    if (d.FirstName.value == "") {
        errorMsg += "Please enter your name.\n";
        errors = true;
    }
	
	if (d.LastName.value == "") {
        errorMsg += "Please enter your last name.\n";
        errors = true;
    }
	 var Gender = false;
    for (var i = 0; i < 2; i++) {
        if (d.Gender[i].checked)
            Gender = true;
    }
    if (!Gender) {
        errorMsg += "Please select a gender.\n";
        errors = true;
    }
	
	if (d.Email.value == "") {
        errorMsg += "Please enter your email address.\n";
        errors = true;
    }
	
	if (d.Feedback.value == "") {
        errorMsg += "Please enter your feedback in the feedback text field.\n";
        errors = true;
    }
	
// if errors exist, popup error message 
    if (errors)
        alert(errorMsg);
	else 
		alert("Your feedback has been submitted.")
// return true (submit form) or false (don't submit form) depending on errors
    return !errors;
}

function resetForm() {
    var reset = confirm('Reset all fields?');
    if (reset) {
        console.log("Resetting form modifications.");
        // note - could do this with an array of required fields
        document.mainForm.nameTick.src = "cross.png";
        document.mainForm.nameTick.alt = "cross";
        document.mainForm.rateTick.src = 'cross.png';
        document.mainForm.rateTick.alt = 'cross';
        document.mainForm.areas.style.background = "#fff";
    }
    return reset;
}