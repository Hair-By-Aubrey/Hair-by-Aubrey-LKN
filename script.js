// Newsletter form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks for joining the Hair By Aubrey email list!');
  });
}

// Policy checkbox gates the "Book Now" button
const policyCheck = document.getElementById('policyCheck');
const bookNowBtn = document.getElementById('bookNowBtn');
if (policyCheck && bookNowBtn) {
  bookNowBtn.setAttribute('aria-disabled', 'true');
  policyCheck.addEventListener('change', function () {
    if (this.checked) {
      bookNowBtn.removeAttribute('disabled');
      bookNowBtn.removeAttribute('aria-disabled');
      // Replace '#' below with your real booking link (Vagaro, Square, Calendly, etc.)
      bookNowBtn.setAttribute('href', '#');
    } else {
      bookNowBtn.setAttribute('disabled', 'true');
      bookNowBtn.setAttribute('aria-disabled', 'true');
      bookNowBtn.removeAttribute('href');
    }
  });
  bookNowBtn.addEventListener('click', function (e) {
    if (!policyCheck.checked) {
      e.preventDefault();
      alert('Please acknowledge the appointment policy before booking.');
    }
  });
}

// Scroll reveal animation
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => revealObserver.observe(el));
