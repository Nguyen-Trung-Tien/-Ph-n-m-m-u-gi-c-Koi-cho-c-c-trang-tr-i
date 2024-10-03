// scripts.js

// Example click handling for "Bid Now" button
document.getElementById('bid-now').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to the Auction page...');
    window.location.href = '/auctions'; // Redirect to auctions page
});

// Example click handling for "Register" button
document.getElementById('register').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to the Register page...');
    window.location.href = '/register'; // Redirect to register page
});

// Example click handling for "Login" button
document.getElementById('login').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to the Login page...');
    window.location.href = '/login'; // Redirect to login page
});

// Handling for Blog button
document.getElementById('blog').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to the Blog page...');
    window.location.href = '/blog'; // Redirect to blog page
});

// Handling for Terms and Conditions button
document.getElementById('terms').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to the Terms and Conditions page...');
    window.location.href = '/terms'; // Redirect to terms and conditions page
});

// Handling for Profile Management button
document.getElementById('profile').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to the Profile Management page...');
    window.location.href = '/profile'; // Redirect to profile management page
});

// Handling for Cart button
document.getElementById('cart').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to the Cart page...');
    window.location.href = '/cart'; // Redirect to cart page
});
