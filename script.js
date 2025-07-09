// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// BMI Calculator (Pop-up Prompt)
function calculateBMI() {
  const weight = prompt("Enter your weight in kg:");
  const height = prompt("Enter your height in cm:");

  if (!weight || !height || isNaN(weight) || isNaN(height)) {
    alert("Please enter valid numbers.");
    return;
  }

  const h = parseFloat(height) / 100;
  const w = parseFloat(weight);
  const bmi = (w / (h * h)).toFixed(2);

  let message = `Your BMI is ${bmi}. `;

  if (bmi < 18.5) message += "You're underweight.";
  else if (bmi < 25) message += "You have a normal weight.";
  else if (bmi < 30) message += "You're overweight.";
  else message += "You are obese.";

  alert(message);
}

// Add BMI button dynamically
document.addEventListener('DOMContentLoaded', () => {
  const services = document.getElementById('services');
  const bmiBtn = document.createElement('button');
  bmiBtn.textContent = "🧮 Calculate Your BMI";
  bmiBtn.className = "btn";
  bmiBtn.style.marginTop = "20px";
  bmiBtn.onclick = calculateBMI;
  services.appendChild(bmiBtn);
});

// Workout Video Popup (simple modal)
function showWorkoutVideo() {
  const videoUrl = "https://www.youtube.com/embed/UoC_O3HzsH0"; // Change to your video
  const modal = document.createElement('div');
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000";

  const iframe = document.createElement('iframe');
  iframe.src = videoUrl;
  iframe.width = "80%";
  iframe.height = "60%";
  iframe.frameBorder = "0";
  iframe.allow = "autoplay; encrypted-media";
  iframe.allowFullscreen = true;

  modal.appendChild(iframe);
  modal.addEventListener('click', () => document.body.removeChild(modal));
  document.body.appendChild(modal);
}

// Add workout video button dynamically
document.addEventListener('DOMContentLoaded', () => {
  const contact = document.getElementById('contact');
  const videoBtn = document.createElement('button');
  videoBtn.textContent = "🎥 Watch Workout Video";
  videoBtn.className = "btn";
  videoBtn.style.marginTop = "20px";
  videoBtn.onclick = showWorkoutVideo;
  contact.appendChild(videoBtn);
});

// Dark Mode Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
// Dark Mode Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
