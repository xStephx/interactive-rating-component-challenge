// DOM elements
const buttons = document.querySelectorAll('.button')
const selected = document.getElementById('selected')
const submitBtn = document.getElementById('submit-btn')
const ratingSection = document.getElementById('rating-section')
const thankYouSection = document.getElementById('thank-you-section')
let buttonText = ''

// Interacting through each button element
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('bg-White', 'text-DarkBlue'))
        button.classList.add('bg-White', 'text-DarkBlue');
        buttonText = button.textContent
    });
});

// Interacting with submit button
submitBtn.addEventListener('click', () => {
    if (buttonText) {
        selected.textContent = `You selected ${buttonText} out of 5`
        ratingSection.classList.add('hidden')
        thankYouSection.classList.remove('hidden')
    } else {
        alert('Please select a rating before submitting.')
    }
});