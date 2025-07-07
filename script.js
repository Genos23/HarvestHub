// JavaScript for handling modal pop-ups
const aboutLink = document.getElementById('about-link');
const resourcesLink = document.getElementById('resources-link');
const contactLink = document.getElementById('contact-link');

const modalAbout = document.getElementById('modal-about');
const modalResources = document.getElementById('modal-resources');
const modalContact = document.getElementById('modal-contact');

const closeButtons = document.querySelectorAll('.close');

// Event listeners for opening modals
aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    modalAbout.style.display = 'block';
});

resourcesLink.addEventListener('click', (e) => {
    e.preventDefault();
    modalResources.style.display = 'block';
});

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    modalContact.style.display = 'block';
});

// Event listeners for closing modals
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.modal').style.display = 'none'; // Close the modal on click
    });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Functionality to show feature description on clicking the feature card
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
        const overlay = card.querySelector('.overlay');
        if (card.classList.contains('active')) {
            overlay.style.display = 'flex'; // Show overlay with description
        } else {
            overlay.style.display = 'none'; // Hide overlay
        }
    });
});
