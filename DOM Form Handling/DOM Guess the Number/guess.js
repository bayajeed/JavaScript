// Select necessary DOM elements
const input = document.querySelectorAll('input'); // Select all input elements (useful if there are multiple inputs)
const form = document.querySelector('form'); // Select the form element
const span = document.querySelector('span'); // Select the span element to display the random number
const h6 = document.querySelector('h6'); // Select h6 for feedback on user input

// Create and append a new h1 element for displaying the result
const body = document.querySelector('body');
const guesNumber = document.createElement('h1'); // Create a new h1 element
body.append(guesNumber); // Append the h1 to the body

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page upon submission

    // Generate a random number between 1 and 10
    let randomNumber = Math.ceil(Math.random() * 10); 
    span.textContent = randomNumber; // Display the random number in the span
    span.style.color = 'green'; // Style the random number

    // Get and trim user input, then convert to a number
    let inputValue = input[0].value.trim(); // Get input value and trim whitespace
    let inputNumber = Number(inputValue); // Convert trimmed input to a number

    h6.textContent = `You Pressed: ${inputValue}`; // Display what the user entered

    // Validate the input: check if the input is empty or not a valid number
    if (inputValue === '' || isNaN(inputNumber)) {
        guesNumber.textContent = 'Please enter a valid number!';
        guesNumber.style.color = 'tomato'; // Highlight error in red
        return; // Exit the function if input is invalid
    }

    // Check if the guessed number is correct
    if (inputNumber === randomNumber) {
        guesNumber.textContent = 'Congratulations! You guessed the correct number!';
        guesNumber.style.color = 'green'; // Highlight success in green
    } else {
        guesNumber.textContent = `Guessed wrong! The correct number was ${randomNumber}. Try again!`;
        guesNumber.style.color = 'red'; // Highlight failure in red
    }

    // Clear the input field for the next attempt
    input[0].value = '';
});
