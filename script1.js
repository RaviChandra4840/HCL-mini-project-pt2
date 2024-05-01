document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".book-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", function() {
            const hotelName = this.getAttribute("data-hotel");
            const basePrice = parseInt(this.getAttribute("data-price"));
            const location = this.getAttribute("data-location");
            const checkinDate = new Date(document.getElementById("checkin").value);
            const checkoutDate = new Date(document.getElementById("checkout").value);
            
            const days = (checkoutDate - checkinDate) / (1000 * 3600 * 24);
            const totalPrice = days * basePrice;

            if (isNaN(totalPrice) || totalPrice <= 0) {
                alert("Please select a valid check-in and check-out date");
                return;
            }

            sessionStorage.setItem("hotelName", hotelName);
            sessionStorage.setItem("days", days);
            sessionStorage.setItem("totalPrice", totalPrice);
            sessionStorage.setItem("location", location);

            window.location.href = "booking.html";
        });
    });
});
