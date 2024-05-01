document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state');

    const stateData = {
        'A': [
            { image: 'image/BodhGaya.png', price: 100, name: 'Bodh Gaya' },
            { image: 'image/serSha.png', price: 120, name: 'Sher Sha Suri' }
        ],
        'B': [
            { image: 'image/kochi.jpg', price: 150, name: 'Kochi' },
            { image: 'image/trivendram.jpg', price: 140, name: 'Thiruvananthapuram' }
        ],
        'C': [
            { image: 'image/Mangeshi.png', price: 160, name: 'Mangeshi Temple' },
            { image: 'image/Calangute.png', price: 130, name: 'Calangute Beach' }
        ],
        'D': [
            { image: 'image/dwarakadheesh.jpg', price: 150, name: 'Dwarakadheesh Temple' },
            { image: 'image/statue.jpg', price: 140, name: 'Statue Of Unity' }
        ],
        'E': [
            { image: 'image/bihar.png', price: 100, name: 'Tourist Place E1' },
            { image: 'image/bihar.png', price: 120, name: 'Tourist Place E2' }
        ],
        'F': [
            { image: 'image/bihar.png', price: 150, name: 'Tourist Place F1' },
            { image: 'image/bihar.png', price: 140, name: 'Tourist Place F2' }
        ],
        'G': [
            { image: 'image/bihar.png', price: 100, name: 'Tourist Place G1' },
            { image: 'image/bihar.png', price: 120, name: 'Tourist Place G2' }
        ],
        'H': [
            { image: 'image/bihar.png', price: 150, name: 'Tourist Place H1' },
            { image: 'image/bihar.png', price: 140, name: 'Tourist Place H2' }
        ],
        'I': [
            { image: 'image/bihar.png', price: 100, name: 'Tourist Place I1' },
            { image: 'image/bihar.png', price: 120, name: 'Tourist Place I2' }
        ],
        'J': [
            { image: 'image/Ooty.png', price: 150, name: 'Ooty' },
            { image: 'image/phichavaram.png', price: 140, name: 'Phichavaram' }
        ],
        'K': [
            { image: 'image/bihar.png', price: 100, name: 'Tourist Place K1' },
            { image: 'image/bihar.png', price: 120, name: 'Tourist Place K2' }
        ],
        'L': [
            { image: 'image/bihar.png', price: 150, name: 'Tourist Place L1' },
            { image: 'image/bihar.png', price: 140, name: 'Tourist Place L2' }
        ]
    };

    let galleryContent = "";
    let selectedStatePlaces = state ? stateData[state] : [];
    let otherStatePlaces = [];

    for (let s in stateData) {
        if (s !== state) {
            otherStatePlaces = otherStatePlaces.concat(stateData[s]);
        }
    }

    const displayPlaces = (places) => {
        for (let place of places) {
            galleryContent += `
                <div class="place">
                    <img src="${place.image}" alt="Place">
                    <div class="placeName">${place.name}</div>
                    <div>Price per person: Rs<span class="price">${place.price}</span></div>
                    <label>Number of persons: 
                        <input type="number" class="persons" min="1" value="1">
                    </label>
                    <button onclick="calculateForPlace(this)">Calculate</button>
                    <div>Total: Rs <span class="totalAmount">0</span></div>
                    <button onclick="saveDetailss(this)">book now</button>
                </div>`;
        }
    };

    displayPlaces(selectedStatePlaces);

    if (!state) {
        otherStatePlaces.sort(() => 0.5 - Math.random());
    }

    displayPlaces(otherStatePlaces);

    document.getElementById('placesGallery').innerHTML = galleryContent;
});

function calculateForPlace(buttonElement) {
    const placeDiv = buttonElement.closest('.place');
    const price = parseInt(placeDiv.querySelector('.price').innerText);
    const persons = parseInt(placeDiv.querySelector('.persons').value);
    
    const total = price * persons;
    placeDiv.querySelector('.totalAmount').innerText = total;
}
// Existing script.js content ...

function saveDetailss(buttonElement) {
    const placeDiv = buttonElement.closest('.place');
    const placeName = placeDiv.querySelector('.placeName').innerText;
    const price = parseInt(placeDiv.querySelector('.price').innerText);
    const persons = parseInt(placeDiv.querySelector('.persons').value);
    const totalAmount = parseInt(placeDiv.querySelector('.totalAmount').innerText);

    // Save data to localStorage
    localStorage.setItem('placeName', placeName);
    localStorage.setItem('price', price);
    localStorage.setItem('persons', persons);
    localStorage.setItem('totalAmount', totalAmount);
  

    // Redirect to the details page
    window.location.href = 'bookingdetails.html';
}







function saveDetails() {
    const form = document.getElementById('detailsForm');
    localStorage.setItem('details', JSON.stringify({
        username: form.username.value,
        adharnumber: form.adharnumber.value,
        name: form.name.value,
        gender: form.gender.value,
        country: form.country.value,
        address: form.address.value,
        phone: form.phone.value,
        email: form.email.value
    }));

    window.location.href = 'view_details.html';
}

function displayDetails() {
    const details = JSON.parse(localStorage.getItem('details'));
    if (details) {
        document.getElementById('username').textContent = details.username;
        document.getElementById('adharnumber').textContent = details.adharnumber;
        document.getElementById('name').textContent = details.name;
        document.getElementById('gender').textContent = details.gender;
        document.getElementById('country').textContent = details.country;
        document.getElementById('address').textContent = details.address;
        document.getElementById('phone').textContent = details.phone;
        document.getElementById('email').textContent = details.email;
    }
}

function deleteDetails() {
    localStorage.removeItem('details');
    alert("Details deleted successfully!");
    location.reload();  // reloads the current page to clear the form
}
function appendToDisplay(value) {
    const display = document.getElementById('result');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('result');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function goToMainMenu() {
    // Assuming main menu is at index.html
    window.location.href = "dashboard.html";
}
function saveContent() {
    const notepadContent = document.getElementById('notepad').value;
    localStorage.setItem('savedContent', notepadContent);
    alert('Content Saved!');
}

function loadContent() {
    const savedContent = localStorage.getItem('savedContent');
    if (savedContent) {
        document.getElementById('notepad').value = savedContent;
    } else {
        alert('No saved content found!');
    }
}


