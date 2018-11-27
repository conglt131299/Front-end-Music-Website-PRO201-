function loginValidation() {
	var user = document.getElementById('user').value;
	var pwd = document.getElementById('pwd').value;
	if (user == '0969981028') {
		if (pwd === 'lethanhcong') {
			alert("Đăng nhập thành công");
		} else {
			alert("Mật khẩu không chính xác");
		}
	} else {
		alert("Tài khoản không tồn tại");
	}
}
