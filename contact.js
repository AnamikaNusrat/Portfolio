// Initialize visitor count from local storage (if available)
let visitorCount = localStorage.getItem('visitorCount');
if (!visitorCount) {
    visitorCount = 0;
} else {
    visitorCount = parseInt(visitorCount);
}

// Update visitor count on the page
document.getElementById('visitorCount').textContent = `Total Visitors: ${visitorCount}`;

// Increment visitor count and store it in local storage
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission
    alert('Form submitted successfully!');
});
