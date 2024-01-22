document.addEventListener('DOMContentLoaded', function () {
    var logoLink = document.getElementById('logo-link');

    logoLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});