function emailChecker(email) {
	let atIndex = email.indexOf("@");
	if (atIndex < 0) return false;
	return true;
}

$("#js-sign-up-button").click(function() {
	let promise = new Promise((func) => {
	$("#js-sign-up-button").html("submitting...");
	$("#js-sign-up-button").prop("disabled", true);
	setTimeout(func, 2000)});
	
	promise.then(() => {
		$("#js-sign-up-button").html("Sign up now");
		let email = $("#js-input").val();
		if (emailChecker(email)) {
			$("#js-bulk").hide();
			$("#js-thank-you-message").show();
		}
		else {
			$("#js-invalid-message").show();
			$("#js-sign-up-button").prop("disabled", false);
		}
	})
});
