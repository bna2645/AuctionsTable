function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Vui lòng nhập tên đăng nhập và mật khẩu.');
        return false;
    }
    alert('Đăng nhập thành công!');
    window.location.href = 'homepage.html'; 
    return false; 
}