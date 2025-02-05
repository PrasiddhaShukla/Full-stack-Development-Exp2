// Event listener for player registration
document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("registerBtn");
    
    if (registerBtn) {
        registerBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            alert("Player registered successfully!");
        });
    }
});
