// Particles.js initialization
document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#3b82f6" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#3b82f6", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      }
    }
  });
});

// Countdown Timer
const targetDate = new Date("August 16, 2025 11:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft < 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = mins.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = secs.toString().padStart(2, '0');
}

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);

// WhatsApp message generation
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name) {
    showAlert("कृपया तुमचं नाव टाका.", "error");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    showAlert("कृपया वैध 10 अंकी मोबाईल नंबर टाका.", "error");
    return;
  }

  // Your WhatsApp number
  const yourNumber = "917208184758"; // Your number without +91
  const guestNumber = "91" + phone;
  const inviteLink = window.location.href;
  
  // Message to send to guest
  const guestMessage = `नमस्कार ${name}, आपल्याला अथवले कुटुंबाकडून आमच्या नवीन घराच्या गृहप्रवेश समारंभाचे हार्दिक आमंत्रण! 
  
📅 दिनांक: १६ ऑगस्ट २०२५
🕚 वेळ: सकाळी ११ वाजता
📍 ठिकाण: Noble Heights, मालाड ईस्ट, कुरार गाव, फ्लॅट नं. १२०६
🗺️: https://maps.app.goo.gl/2oBXdPaGkhBfFHrb7

🌐 अधिक माहिती येथे पाहा: ${inviteLink}`;

  // Message to send to you (notification)
  const notificationMessage = `नवीन RSVP प्राप्त झाले:
  
नाव: ${name}
फोन: ${phone}

एकूण आमंत्रित: ${document.querySelectorAll('.rsvp-form').length + 1}`;

  // Send message to guest
  const guestWaLink = `https://wa.me/${guestNumber}?text=${encodeURIComponent(guestMessage)}`;
  
  // Send notification to you
  const notificationWaLink = `https://wa.me/${yourNumber}?text=${encodeURIComponent(notificationMessage)}`;
  
  // Open both links
  window.open(guestWaLink, "_blank");
  setTimeout(() => {
    window.open(notificationWaLink, "_blank");
  }, 1000);

  // Show confirmation
  showAlert(`धन्यवाद, ${name}! तुमचं उपस्थिती नोंदवली आहे. तुमच्या WhatsApp वर आमंत्रण पाठवले आहे.`, "success");
  
  // Reset form
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
});

// Custom alert function with animation
function showAlert(message, type) {
  const alertDiv = document.createElement('div');
  alertDiv.className = `custom-alert ${type}`;
  alertDiv.innerHTML = `
    <div class="alert-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
      <span>${message}</span>
    </div>
  `;
  document.body.appendChild(alertDiv);
  
  // Animation in
  setTimeout(() => {
    alertDiv.classList.add('show');
  }, 10);
  
  // Animation out after 3 seconds
  setTimeout(() => {
    alertDiv.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(alertDiv);
    }, 300);
  }, 3000);
}

// Scroll Reveal Animation with enhanced effects
ScrollReveal().reveal('.logo', { 
  delay: 300, 
  distance: '50px', 
  origin: 'top',
  duration: 1000,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  scale: 0.9
});

ScrollReveal().reveal('.heading', { 
  delay: 500, 
  distance: '30px', 
  origin: 'top',
  duration: 1000,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  rotate: { x: 5 }
});

ScrollReveal().reveal('.subtitle', { 
  delay: 700, 
  distance: '30px', 
  origin: 'top',
  duration: 1000,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  rotate: { x: 5 }
});

ScrollReveal().reveal('.detail-card', { 
  delay: 800, 
  distance: '50px', 
  origin: 'left',
  duration: 1000,
  interval: 200,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  opacity: 0.3
});

ScrollReveal().reveal('.countdown', { 
  delay: 1200, 
  distance: '50px', 
  origin: 'right',
  duration: 1000,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  scale: 0.9
});

ScrollReveal().reveal('.rsvp-form', { 
  delay: 1500, 
  distance: '50px', 
  origin: 'bottom',
  duration: 1000,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  scale: 0.9
});

// Add hover animations to cards
const cards = document.querySelectorAll('.detail-card, .time-box');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px) scale(1.02)';
    card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});
