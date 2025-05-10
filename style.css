@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Baloo+2:wght@400;500;600;700&display=swap');

:root {
  --primary: #2563eb;
  --primary-dark: #1e40af;
  --secondary: #f59e0b;
  --dark: #1e293b;
  --light: #f8fafc;
  --accent: #10b981;
  --success: #10b981;
  --error: #ef4444;
  --card-bg: #f8f4e8;
  --gold: #d4a762;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Baloo 2', 'Poppins', sans-serif;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: var(--light);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  line-height: 1.6;
}

.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
}

.container {
  text-align: center;
  width: 90%;
  max-width: 600px;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.85);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
  margin: 2rem 0;
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.logo {
  font-size: 3rem;
  color: var(--secondary);
  margin-bottom: 1rem;
  animation: pulse-glow 2s infinite;
}

@keyframes pulse-glow {
  0% { 
    transform: scale(1);
    text-shadow: 0 0 0 rgba(245, 158, 11, 0.7);
  }
  50% { 
    transform: scale(1.1);
    text-shadow: 0 0 20px rgba(245, 158, 11, 0.9);
  }
  100% { 
    transform: scale(1);
    text-shadow: 0 0 0 rgba(245, 158, 11, 0.7);
  }
}

.heading {
  font-size: 2.5rem;
  color: var(--light);
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #f59e0b, #d97706, #f59e0b);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient-shift 3s linear infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

.subtitle {
  font-size: 1.2rem;
  color: var(--light);
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.divider {
  height: 3px;
  width: 100px;
  background: linear-gradient(to right, var(--primary), var(--accent));
  margin: 1rem auto;
  border-radius: 3px;
  transform: scaleX(0);
  transform-origin: center;
  animation: scaleIn 1s ease-out 0.5s forwards;
}

@keyframes scaleIn {
  to {
    transform: scaleX(1);
  }
}

.details {
  margin: 2rem 0;
}

.detail-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  text-align: left;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.detail-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.1);
}

.detail-card i {
  font-size: 1.5rem;
  color: var(--secondary);
  margin-right: 1rem;
  min-width: 30px;
}

.detail-card p {
  font-size: 1.1rem;
  color: var(--light);
}

.map-link {
  color: var(--accent);
  text-decoration: none;
  position: relative;
  transition: all 0.3s;
}

.map-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--secondary);
  transition: width 0.3s;
}

.map-link:hover {
  color: var(--secondary);
}

.map-link:hover::after {
  width: 100%;
}

.countdown {
  margin: 2rem 0;
  transform: translateX(20px);
  opacity: 0;
  animation: slideInRight 0.8s ease-out 1.4s forwards;
}

@keyframes slideInRight {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.countdown h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--light);
}

.timer-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.time-box {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  min-width: 80px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.time-box:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.time-box span {
  font-size: 2rem;
  font-weight: bold;
  color: var(--light);
  display: block;
}

.time-box small {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

.rsvp-form {
  margin: 2rem 0;
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 1.6s forwards;
}

.rsvp-form h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.form-group {
  position: relative;
  margin: 1rem 0;
}

.rsvp-form input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  margin: 0.5rem 0;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: var(--light);
  transition: all 0.3s;
}

.rsvp-form input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
}

.rsvp-form input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-group i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.3s;
}

.form-group:hover i {
  color: var(--secondary);
}

.rsvp-form button {
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  background: linear-gradient(to right, var(--primary), var(--primary-dark));
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
  position: relative;
  overflow: hidden;
}

.rsvp-form button::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  transition: transform 0.5s;
}

.rsvp-form button:hover {
  background: linear-gradient(to right, var(--primary-dark), var(--primary));
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
}

.rsvp-form button:hover::after {
  transform: rotate(30deg) translate(20%, 20%);
}

footer {
  font-size: 1rem;
  margin-top: 2rem;
  color: var(--light);
  opacity: 0.8;
  text-align: center;
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 1.8s forwards;
}

/* Custom Alert Styling */
.custom-alert {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(100px);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  z-index: 1000;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-out;
  max-width: 90%;
  width: max-content;
}

.custom-alert.show {
  transform: translateX(-50%) translateY(0);
}

.custom-alert.success {
  background: var(--success);
}

.custom-alert.error {
  background: var(--error);
}

.custom-alert .alert-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.custom-alert i {
  font-size: 1.2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .heading {
    font-size: 2rem;
  }
  
  .container {
    width: 95%;
    padding: 1.5rem;
  }
  
  .time-box {
    min-width: 70px;
  }
  
  .time-box span {
    font-size: 1.5rem;
  }
  
  .custom-alert {
    width: 90%;
    text-align: center;
  }
}
