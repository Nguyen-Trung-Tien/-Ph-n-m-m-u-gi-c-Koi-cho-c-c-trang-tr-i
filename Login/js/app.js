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
        window.location.href = '/account';
    });
    $('#google-button').click(function (e) {
        
        e.preventDefault();
        window.location.href = '/account';
    });
});