function validateTextbox() {
	var mail = document.getElementById("email");
	var pass = document.getElementById("pass");


	if (mail.value.length < 5 || pass.value.lenght <  ) {
alert("please enter a valide email and password");
mail.focus();
mail.style.border = "solid 5px red";
pass.focus();
pass.style.border = "solid 5px red";
return false;
	}
}

