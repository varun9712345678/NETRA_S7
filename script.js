// Function to Update Digital Clock
function updateClock() {

    const clock = document.getElementById("clock");

    if (clock) {
        clock.textContent = new Date().toLocaleTimeString();
    }

}

// Display Clock Immediately
updateClock();

// Update Clock Every Second
setInterval(updateClock, 1000);