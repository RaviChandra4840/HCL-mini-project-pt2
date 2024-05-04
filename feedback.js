// Validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const category = document.getElementById("category").value;
        const message = document.getElementById("message").value;

        // Simple validation
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill in all required fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Prepare data to send
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("category", category);
        formData.append("message", message);

        // Send data to PHP script
        fetch("feedback.php", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert("Feedback submitted successfully!");
                form.reset(); // Clear form fields
            } else {
                throw new Error("Failed to submit feedback.");
            }
        })
        
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while submitting feedback. Please try again later.");
        });
    });
});
