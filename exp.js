// External JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Register button event listener
    document.getElementById("registerBtn").addEventListener("click", function (event) {
        event.preventDefault();
        alert("Player Registered Successfully!");
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
