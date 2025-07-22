const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();

  // Validate fields
  if (!name || !email || !msg) {
    message.style.color = 'red';
    message.textContent = '❌ Please fill in all fields.';
    return;
  }

  // Validate email format
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    message.style.color = 'red';
    message.textContent = '❌ Please enter a valid email address.';
    return;
  }

  // Success
  message.style.color = 'green';
  message.textContent = '✅ Thank you! Your message has been sent.';

  // Reset form after a short delay
  setTimeout(() => {
    form.reset();
    message.textContent = '';
  }, 2000);
});
