// JavaScript Document
function signinCheck() {
	var email = document.getElementById('email').value;
	var fullName = document.getElementById('full_name').value;
	var loginName = document.getElementById('login_name').value;
	var passWord = document.getElementById('pwd').value;
	var date = document.getElementById('date').value;
	var month = document.getElementById('month').value;
	var year = document.getElementById('year').value;
	var gender = document.getElementById('gender').value;
	
	var result = "Xác nhận lại thông tin\n";
	result += "Email: " + email + "\n";
	result += "Full Name: " + fullName + "\n";
	result += "Login Name: " + loginName + "\n";
	result += "Password: " + passWord + "\n";
	result += "Birthday: " + date + "/" + month + "/" + year + "\n";
	result += "Gender: " + gender;
	
	alert(result);
}