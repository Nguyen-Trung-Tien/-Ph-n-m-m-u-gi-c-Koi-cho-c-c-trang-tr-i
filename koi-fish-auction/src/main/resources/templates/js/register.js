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
