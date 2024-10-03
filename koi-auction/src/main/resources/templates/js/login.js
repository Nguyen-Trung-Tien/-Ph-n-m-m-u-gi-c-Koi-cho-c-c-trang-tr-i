// noinspection JSUnusedAssignment

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
    $('#facebook-button').click(function (e) {
        e.preventDefault();
        window.location.href = 'https://www.facebook.com/login';
    });
    $('#google-button').click(function (e) {
        e.preventDefault();
        window.location.href = 'https://accounts.google.com/signin';
    });

    document.getElementById('form-register').addEventListener('submit', function (event) {
        event.preventDefault();

        const password = document.querySelector('input[type="password"]:nth-of-type(1)').value;
        const confirmPassword = document.querySelector('input[type="password"]:nth-of-type(2)').value;

        const messageElement = document.createElement('p');
        messageElement.id = 'message';
        document.getElementById('wrapper').appendChild(messageElement);
        if (password !== confirmPassword) {
            messageElement.textContent = 'Mật khẩu không khớp!';
            messageElement.style.color = 'red';
            messageElement.textContent = 'Đăng ký thành công!';
            messageElement.style.color = 'green';
        }
    });
    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll('.top-buttons a');
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                button.classList.add('button-clicked');
                setTimeout(() => {
                    button.classList.remove('button-clicked');
                }, 100);
            });
        });
    });

});
document.addEventListener("DOMContentLoaded", function () {
    // Select the buttons
    const homeButton = document.querySelector('.home-button');
    const buttons = document.querySelectorAll('.top-buttons a');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            button.classList.add('button-clicked');

            setTimeout(() => {
                button.classList.remove('button-clicked');
            }, 100);
        });
    });

    homeButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'logon/logon.html';
    });
});
let homeButton;
homeButton.addEventListener('click', function (event) {
    event.preventDefault(); // This would prevent the default action, including link navigation
});
