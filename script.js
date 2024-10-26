let swapInterval;

// Function to handle the "Yes" button click
function handleYes() {
    alert('Yay! ❤️😘');
}

// Function to swap the "Yes" and "No" buttons
function swapButtons() {
    // Get the button elements
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');

    // Swap their positions in the DOM
    const parent = noButton.parentNode;
    if (noButton.nextSibling === yesButton) {
        parent.insertBefore(yesButton, noButton); // Moves the Yes button before the No button
    } else {
        parent.insertBefore(noButton, yesButton); // Moves the No button before the Yes button
    }
}

// Start swapping when mouse is over the "No" button
function startSwapping() {
    // Clear any existing interval to avoid multiple intervals running
    stopSwapping(); // Ensure only one interval runs
    swapInterval = setInterval(swapButtons, 150); // Adjust the speed of swapping
}

// Stop swapping when mouse leaves the "No" button
function stopSwapping() {
    clearInterval(swapInterval);
}
