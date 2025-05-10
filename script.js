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
document.getElementById("submit").addEventListener("click", async function (e) {
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
  await generateAndDownloadInvitation(name);
  
  // Reset form
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
});

async function generateAndDownloadInvitation(name) {
  // Create canvas for the invitation card
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 1600;
  const ctx = canvas.getContext('2d');
  
  // Card background
  ctx.fillStyle = '#f8f4e8';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Decorative border
  ctx.strokeStyle = '#d4a762';
  ctx.lineWidth = 15;
  ctx.strokeRect(20, 20, canvas.width-40, canvas.height-40);
  
  // Header
  ctx.fillStyle = '#1e40af';
  ctx.fillRect(0, 0, canvas.width, 200);
  
  // Header text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 60px "Baloo 2"';
  ctx.textAlign = 'center';
  ctx.fillText('गृहप्रवेश आमंत्रण', canvas.width/2, 120);
  ctx.font = '30px "Baloo 2"';
  ctx.fillText('अथवले कुटुंब', canvas.width/2, 170);
  
  // Guest name
  ctx.fillStyle = '#1e40af';
  ctx.font = 'bold 70px "Baloo 2"';
  ctx.fillText(`${name} यांना`, canvas.width/2, 300);
  
  // Divider
  ctx.strokeStyle = '#d4a762';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(200, 350);
  ctx.lineTo(canvas.width-200, 350);
  ctx.stroke();
  
  // Event details
  ctx.fillStyle = '#333333';
  ctx.font = '40px "Baloo 2"';
  ctx.textAlign = 'left';
  
  // Date
  ctx.fillText('📅 दिनांक:', 150, 450);
  ctx.font = 'bold 40px "Baloo 2"';
  ctx.fillText('१६ ऑगस्ट २०२५', 400, 450);
  
  // Time
  ctx.font = '40px "Baloo 2"';
  ctx.fillText('🕚 वेळ:', 150, 530);
  ctx.font = 'bold 40px "Baloo 2"';
  ctx.fillText('सकाळी ११ वाजता', 400, 530);
  
  // Location
  ctx.font = '40px "Baloo 2"';
  ctx.fillText('📍 ठिकाण:', 150, 610);
  ctx.font = 'bold 40px "Baloo 2"';
  ctx.fillText('Noble Heights, मालाड ईस्ट', 400, 610);
  ctx.fillText('कुरार गाव, फ्लॅट नं. १२०६', 400, 670);
  
  // Location QR Code (using Google Maps URL)
  const mapsUrl = 'https://maps.app.goo.gl/2oBXdPaGkhBfFHrb7';
  const qrCodeSize = 300;
  const qrCodeX = canvas.width/2 - qrCodeSize/2;
  const qrCodeY = 750;
  
  // Create temporary QR code
  const tempQrDiv = document.createElement('div');
  tempQrDiv.style.display = 'none';
  document.body.appendChild(tempQrDiv);
  
  // Using simple API for QR code generation
  const qrImg = new Image();
  qrImg.crossOrigin = 'Anonymous';
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${qrCodeSize}x${qrCodeSize}&data=${encodeURIComponent(mapsUrl)}`;
  
  await new Promise((resolve) => {
    qrImg.onload = resolve;
  });
  
  ctx.drawImage(qrImg, qrCodeX, qrCodeY, qrCodeSize, qrCodeSize);
  
  // Footer text
  ctx.fillStyle = '#1e40af';
  ctx.font = 'italic 40px "Baloo 2"';
  ctx.textAlign = 'center';
  ctx.fillText('💙 आपली वाट पाहत आहोत', canvas.width/2, 1400);
  
  // Decorative elements
  ctx.strokeStyle = '#d4a762';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(canvas.width-150, 150, 100, 0, Math.PI * 2);
  ctx.stroke();
  
  // Convert canvas to image and download
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name}_गृहप्रवेश_आमंत्रण.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showAlert(`धन्यवाद, ${name}! आपले आमंत्रण पत्र डाउनलोड झाले आहे.`, "success");
  }, 'image/png');
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
