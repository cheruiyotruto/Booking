// kenya-travel.js - JavaScript functionalities for Kenya Travel Website

// Booking form validation
function validateBookingForm() {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();

  // Ensure origin and destination are not the same
  if (from === to) {
    alert("Origin and destination must be different.");
    return false;
  }

  // Check required fields
  if (!name || !phone || !email) {
    alert("Please fill in all required fields.");
    return false;
  }

  alert("Your booking has been submitted successfully!");
  return true; // Allow submission
}

// Resize listener to detect mobile view
window.addEventListener('resize', () => {
  if (window.innerWidth < 600) {
    console.log('Mobile view activated.');
  }
});

// Optional: Auto-scroll to booking confirmation message (if implemented)
// document.querySelector("form").addEventListener("submit", function(e) {
//   e.preventDefault();
//   if (validateBookingForm()) {
//     document.getElementById("confirmationMessage").scrollIntoView({ behavior: 'smooth' });
//   }
// });