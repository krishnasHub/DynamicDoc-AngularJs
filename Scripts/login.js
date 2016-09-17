function validate() {
    var username = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var finalUrl = baseUrl + "login/login?userName=" + username + "&password=" + password;
    getJsonDataFromUrl(finalUrl, fn_success, null);
}

var baseUrl = "http://localhost:54539/";

function fn_success(userData) {
	if(userData.user == null)
		alertify.error("Username and Password does not match");
	else {
		alertify.success("Welcome " + userData.user.Name);
		window.open("index.html","_self");
	} 

}