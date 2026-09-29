/**
 * Agudike Uchechukwu Maryrose - Portfolio Client Scripts
 * Pure vanilla JavaScript - no external framework dependencies required
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initPortfolioFilters();
  initApproachSteps();
  initContactForm();
});

// 1. Sticky Navbar & Mobile Navigation
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      if (navbar) navbar.classList.add('scrolled');
    } else {
      if (navbar) navbar.classList.remove('scrolled');
    }
  });

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (mobileNav) mobileNav.classList.toggle('open');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav) mobileNav.classList.remove('open');
    });
  });
}

// 2. Portfolio Category Filtering
function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter') || 'all';

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 3. Approach Steps Tab Controller
function initApproachSteps() {
  const stepButtons = document.querySelectorAll('.step-btn');
  const stepPanels = document.querySelectorAll('.step-detail-panel');

  stepButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      stepButtons.forEach(b => b.classList.remove('active'));
      stepPanels.forEach(p => {
        p.style.display = 'none';
      });

      btn.classList.add('active');
      const targetPanel = document.getElementById('step-panel-' + (index + 1));
      if (targetPanel) {
        targetPanel.style.display = 'block';
      }
    });
  });
}

// 4. Contact Form Validation & AJAX Submission
function initContactForm() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('form-alert');
  const submitBtn = form ? form.querySelector('button[type="submit"]') : null;

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email || !subject || !message) {
      showAlert('error', 'Please fill in all required fields.');
      return;
    }

    // Set loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = 'Sending Message...';
    }

    try {
      const response = await fetch('contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        showAlert('success', result.message || 'Your message has been sent successfully!');
        form.reset();
      } else {
        showAlert('error', result.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      // Fallback for static server without PHP execution
      showAlert('success', 'Thank you! Your message has been noted. Please also reach out directly via agudikeuchechukwu@gmail.com.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Send Message';
      }
    }
  });

  function showAlert(type, msg) {
    if (!alertBox) return;
    alertBox.className = 'form-alert ' + type;
    alertBox.textContent = msg;
    alertBox.style.display = 'block';
  }
}

