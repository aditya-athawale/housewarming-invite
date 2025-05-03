// Countdown Animation
const countdown = document.getElementById("timer");
const targetDate = new Date("August 16, 2025 11:00:00").getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft < 0) {
    countdown.innerHTML = "🎉 समारंभ सुरु झाला आहे!";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((timeLeft / (1000 * 60)) % 60);
  const secs = Math.floor((timeLeft / 1000) % 60);

  countdown.innerHTML = `${days} दिवस ${hours} तास ${mins} मिनिटे ${secs} सेकंद`;
}, 1000);

// WhatsApp message generation
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!/^\d{10}$/.test(phone)) {
    alert("कृपया वैध 10 अंकी मोबाईल नंबर टाका.");
    return;
  }

  const fullPhone = "91" + phone; // भारतासाठी देशकोड
  const inviteLink = "https://athawale-invite.netlify.app"; // तुझ्या वेबसाईट लिंक
  const message = `नमस्कार ${name}, आपल्याला अथवले कुटुंबाकडून आमच्या नवीन घराच्या गृहप्रवेश समारंभाचे हार्दिक आमंत्रण! 
📅 दिनांक: १६ ऑगस्ट २०२५
🕚 वेळ: सकाळी ११ वाजता
📍 ठिकाण: Noble Heights, मालाड ईस्ट, कुरार गाव, फ्लॅट नं. १२०६
🗺️: https://maps.app.goo.gl/2oBXdPaGkhBfFHrb7

🌐 अधिक माहिती येथे पाहा: ${inviteLink}`;

  const waLink = `https://wa.me/${fullPhone}?text=${encodeURIComponent(message)}`;
  window.open(waLink, "_blank");

  // Attendance Confirmation Popup
  alert(`तुमचं उपस्थिती नोंदवली आहे. आमचं घर पाहण्यासाठी स्वागत आहे, ${name}!`);
});

// Scroll Reveal Animation
ScrollReveal().reveal('.heading', { delay: 500, distance: '50px', origin: 'top' });
ScrollReveal().reveal('.details', { delay: 1000, distance: '50px', origin: 'left' });
ScrollReveal().reveal('.countdown', { delay: 1500, distance: '50px', origin: 'right' });
ScrollReveal().reveal('.rsvp-form', { delay: 2000, distance: '50px', origin: 'bottom' });
