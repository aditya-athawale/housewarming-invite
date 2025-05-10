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

updateCountdown();
setInterval(updateCountdown, 1000);

// Form submission for invitation card
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

  // Generate and download the invitation card
  generateInvitationCard(name);
  
  // Reset form
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
});

function generateInvitationCard(name) {
  // Create a new window with the card content
  const cardWindow = window.open('', '_blank');
  cardWindow.document.write(`
    <!DOCTYPE html>
    <html lang="mr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${name} - गृहप्रवेश आमंत्रण</title>
      <style>
        body {
          font-family: 'Baloo 2', cursive;
          background-color: #f5f5f5;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          padding: 20px;
        }
        .invitation-card {
          width: 100%;
          max-width: 600px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          position: relative;
        }
        .card-header {
          background: linear-gradient(135deg, #2563eb, #1e40af);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .card-header h1 {
          margin: 0;
          font-size: 2.2rem;
        }
        .card-header p {
          margin: 10px 0 0;
          font-size: 1.2rem;
        }
        .card-body {
          padding: 30px;
          text-align: center;
          position: relative;
        }
        .guest-name {
          font-size: 2rem;
          color: #2563eb;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px dashed #2563eb;
        }
        .card-details {
          margin: 20px 0;
          text-align: left;
        }
        .card-details p {
          margin: 15px 0;
          font-size: 1.1rem;
        }
        .card-footer {
          background: #f8fafc;
          padding: 20px;
          text-align: center;
          font-style: italic;
        }
        @media print {
          body {
            background: none;
          padding: 0;
          display: block;
          height: auto;
          min-height: auto;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          zoom: 0.9;
          transform: scale(0.9);
          transform-origin: 0 0;
        }
        }
      </style>
    </head>
    <body>
      <div class="invitation-card">
        <div class="card-header">
          <h1>गृहप्रवेश आमंत्रण</h1>
          <p>अथवले कुटुंब</p>
        </div>
        <div class="card-body">
          <div class="guest-name">${name} यांना</div>
          <div class="card-details">
            <p>📅 दिनांक: <strong>१६ ऑगस्ट २०२५</strong></p>
            <p>🕚 वेळ: <strong>सकाळी ११ वाजता</strong></p>
            <p>📍 ठिकाण: <strong>Noble Heights, मालाड ईस्ट, कुरार गाव, फ्लॅट नं. १२०६</strong></p>
          </div>
          <p>आपल्या सहभागासाठी आभारी आहोत. आपली उपस्थिती आमच्या या आनंदाच्या प्रसंगाला अधिक सुंदर बनवेल.</p>
        </div>
        <div class="card-footer">
          💙 आपली वाट पाहत आहोत
        </div>
      </div>
      <script>
        // Automatically trigger print dialog when loaded
        window.onload = function() {
          setTimeout(function() {
            window.print();
          }, 500);
        };
      </script>
    </body>
    </html>
  `);
  cardWindow.document.close();
  
  showAlert(`धन्यवाद, ${name}! आपले आमंत्रण पत्र डाउनलोड होत आहे.`, "success");
}

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
  
  setTimeout(() => {
    alertDiv.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    alertDiv.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(alertDiv);
    }, 300);
  }, 3000);
}

// Scroll Reveal Animation
ScrollReveal().reveal('.logo', { 
  delay: 300, 
  distance: '50px', 
  origin: 'top',
  duration: 1000
});

ScrollReveal().reveal('.heading, .subtitle', { 
  delay: 500, 
  distance: '30px', 
  origin: 'top',
  duration: 1000,
  interval: 200
});

ScrollReveal().reveal('.detail-card', { 
  delay: 800, 
  distance: '50px', 
  origin: 'left',
  duration: 1000,
  interval: 200
});

ScrollReveal().reveal('.countdown', { 
  delay: 1200, 
  distance: '50px', 
  origin: 'right',
  duration: 1000
});

ScrollReveal().reveal('.rsvp-form', { 
  delay: 1500, 
  distance: '50px', 
  origin: 'bottom',
  duration: 1000
});
