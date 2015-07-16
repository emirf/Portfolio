var passThis = "CodeMe";
var pass;

function enterThis(event){
	if(event.which == 13 || event.which == 13) {
		validateThis();
		return false;
	}
	return true;
}

function validateThis() {
	pass = document.getElementById("pWord").value;
	if (pass === passThis) {
		window.location = "work.html";
	}
}