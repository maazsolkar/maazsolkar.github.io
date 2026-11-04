/**
 * MAAZ SOLKAR - CLOUD OPERATIONS PROFILE
 * Contact Form Module with Client-Side Validation & Sanitization
 */

(function () {
  'use strict';

  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const roleInput = document.getElementById('contactRole');
  const messageInput = document.getElementById('contactMessage');
  const honeypot = document.getElementById('botField');
  const submitBtn = contactForm.querySelector('button[type="submit"]');

  // Input sanitizer helper
  function sanitize(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Check Honeypot for bot detection
    if (honeypot && honeypot.value) {
      console.warn('Bot submission blocked via honeypot.');
      return;
    }

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const role = roleInput ? roleInput.value : 'General Inquiry';
    const message = messageInput ? messageInput.value.trim() : '';

    // Validation
    if (!name || name.length < 2) {
      window.showToast('Please enter your full name or company name.', 'error');
      if (nameInput) nameInput.focus();
      return;
    }

    if (!email || !isValidEmail(email)) {
      window.showToast('Please provide a valid work or personal email address.', 'error');
      if (emailInput) emailInput.focus();
      return;
    }

    if (!message || message.length < 10) {
      window.showToast('Please write a brief message (at least 10 characters).', 'error');
      if (messageInput) messageInput.focus();
      return;
    }

    // Disable button and indicate sending
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>⏳ Preparing message...</span>`;
    }

    // Build mailto URI as secure, reliable fallback for static hosting
    const cleanName = encodeURIComponent(name);
    const cleanRole = encodeURIComponent(role);
    const cleanBody = encodeURIComponent(`Hello Maaz,\n\nName / Organization: ${name}\nInquiry Type: ${role}\nSender Email: ${email}\n\nMessage:\n${message}\n\n---\nSent via https://maazsolkar.github.io`);
    const mailtoUri = `mailto:contact.maazsolkar@gmail.com?subject=${encodeURIComponent(`[https://maazsolkar.github.io] ${role} from ${name}`)}&body=${cleanBody}`;

    setTimeout(() => {
      // Trigger client default mail client
      window.location.href = mailtoUri;

      window.showToast('Opening your email client to send to contact.maazsolkar@gmail.com!', 'success');

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>✓ Prepared! Click to Reopen</span>`;
      }

      // Show confirmation banner
      let confirmBox = document.getElementById('formSuccessNotice');
      if (!confirmBox) {
        confirmBox = document.createElement('div');
        confirmBox.id = 'formSuccessNotice';
        confirmBox.style.cssText = 'margin-top: 20px; padding: 16px; background: var(--color-success-light); border: 1px solid var(--color-success); border-radius: var(--radius-md); font-size: 0.92rem; color: var(--color-success);';
        contactForm.appendChild(confirmBox);
      }
      confirmBox.innerHTML = `<strong>Thank you, ${sanitize(name)}!</strong><br>Your message was prepared for <strong>contact.maazsolkar@gmail.com</strong>. If your email application did not launch automatically, you can directly email <a href="mailto:contact.maazsolkar@gmail.com" style="text-decoration: underline; font-weight: bold; color: inherit;">contact.maazsolkar@gmail.com</a>.`;
    }, 400);
  });

})();