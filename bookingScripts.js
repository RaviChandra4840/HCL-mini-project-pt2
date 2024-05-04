document.addEventListener("DOMContentLoaded", function() {
    const hotelName = sessionStorage.getItem("hotelName");
    const days = sessionStorage.getItem("days");
    const totalPrice = sessionStorage.getItem("totalPrice");
    const location = sessionStorage.getItem("location");

    document.getElementById("hotel-name").textContent = hotelName;
    document.getElementById("days-stay").textContent = days;
    document.getElementById("hotel-location").textContent = location;
    document.getElementById("total-price").textContent = totalPrice;
});

function confirmBooking() {
    alert("Booking confirmed! (This is a mockup message)");
}

