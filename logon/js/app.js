$(document).ready(function () {
    $('#ege').click(function () {
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if ($(this).hasClass('open')) {
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }
    });
});
$(document).ready(function () {
    // Redirect to Facebook login page
    $('#facebook-button').click(function (e) {
        e.preventDefault(); // Prevent default action
        window.location.href = 'https://www.facebook.com/login'; // Redirect to Facebook login
    });

    // Redirect to Google login page
    $('#google-button').click(function (e) {
        e.preventDefault(); // Prevent default action
        window.location.href = 'https://accounts.google.com/signin'; // Redirect to Google login
    });
});


document.getElementById('form-register').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from being submitted immediately

    const password = document.querySelector('input[type="password"]:nth-of-type(1)').value; // Select the first password input
    const confirmPassword = document.querySelector('input[type="password"]:nth-of-type(2)').value; // Select the second password input

    const messageElement = document.createElement('p'); // Create a new paragraph for messages
    messageElement.id = 'message'; // Set the ID for the message element
    document.getElementById('wrapper').appendChild(messageElement); // Append it to the wrapper or a suitable parent element

    if (password !== confirmPassword) {
        messageElement.textContent = 'Mật khẩu không khớp!'; // Passwords do not match
        messageElement.style.color = 'red'; // Optional: change text color to red for error
    } else {
        messageElement.textContent = 'Đăng ký thành công!'; // Registration successful
        messageElement.style.color = 'green'; // Optional: change text color to green for success
        // Additional handling for valid form (e.g., sending data to the server)
    }
});
