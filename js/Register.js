function validateRegisterForm() {
    var fullName = document.getElementById('full-name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (fullName.trim() === '' || email.trim() === '' || phone.trim() === '' || address.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Vui lòng điền đầy đủ thông tin.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Mật khẩu và nhập lại mật khẩu không khớp.');
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Vui lòng nhập địa chỉ email hợp lệ.');
        return false;
    }

    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Vui lòng nhập số điện thoại hợp lệ.');
        return false;
    }

    alert('Đăng ký thành công!');
    window.location.href = 'account.html';
    return true;
}
