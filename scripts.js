// script.js

document.addEventListener('DOMContentLoaded', loadEvents);

function loadEvents() {
    fetch('events.json') // Assuming events.json contains the event data
        .then(response => response.json())
        .then(data => {
            let eventsContainer = document.getElementById('events');
            data.events.forEach(event => {
                let eventCard = document.createElement('div');
                eventCard.classList.add('event-card');
                eventCard.innerHTML = `
                    <h2>${event.name}</h2>
                    <p>${event.date}</p>
                    <p>${event.description}</p>
                    <a href="event-details.html?id=${event.id}">View Details</a>
                `;
                eventsContainer.appendChild(eventCard);
            });
        });
}
// script.js

document.addEventListener('DOMContentLoaded', loadEvents);

function loadEvents() {
    fetch('events.json') // Assuming events.json contains the event data
        .then(response => response.json())
        .then(data => {
            let eventsContainer = document.getElementById('events');
            data.events.forEach(event => {
                let eventCard = document.createElement('div');
                eventCard.classList.add('event-card');
                eventCard.innerHTML = `
                    <h2>${event.name}</h2>
                    <p>${event.date}</p>
                    <p>${event.description}</p>
                    <a href="event-details.html?id=${event.id}">View Details</a>
                `;
                eventsContainer.appendChild(eventCard);
            });
        });
}

// Handle form submission

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let quantity = document.getElementById('quantity').value;

    // Validate form data
    if (quantity <= 0) {
        alert('Please select a valid number of tickets.');
        return;
    }

    // Store booking data in local storage
    localStorage.setItem('bookingDetails', JSON.stringify({
        eventName: 'Event Name',
        eventDate: 'Event Date',
        quantity: quantity
    }));

    // Redirect to confirmation page
    window.location.href = 'booking-confirmation.html';
});
// On booking confirmation page

document.addEventListener('DOMContentLoaded', function () {
    let bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));

    if (bookingDetails) {
        document.getElementById('confirmation-details').innerHTML = `
            <p>Your booking has been confirmed! Details are as follows:</p>
            <p>Event: ${bookingDetails.eventName}</p>
            <p>Date: ${bookingDetails.eventDate}</p>
            <p>Number of Tickets: ${bookingDetails.quantity}</p>
        `;
    } else {
        document.getElementById('confirmation-details').innerHTML = '<p>No booking found.</p>';
    }
});
// Implement search functionality
function searchEvents(keyword) {
    let eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(card => {
        if (card.innerText.toLowerCase().includes(keyword.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Search input event listener
document.getElementById('search-input').addEventListener('input', function () {
    searchEvents(this.value);
});
