document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.header_nav-items');
    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); 
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
