document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const btnSubmit = document.getElementById('btnSubmit');

  let errors = [];

  if (!name) {
    errors.push('Name is required.');
  }
  if (!email) {
    errors.push('Email is required.');
  } else if (!emailPattern.test(email)) {
    errors.push('Please enter a valid email address.');
  }
  if (!message) {
    errors.push('Message is required.');
  }

  if (errors.length > 0) {
    alert(errors.join('\n'));
    return;
  }

  btnSubmit.disabled = true;
  btnSubmit.textContent = 'Sending...';

  // Simulate form submission
  setTimeout(() => {
    alert(`Message sent successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    btnSubmit.disabled = false;
    btnSubmit.textContent = 'Send Message';
    document.getElementById('contactForm').reset();
  }, 2000);
});