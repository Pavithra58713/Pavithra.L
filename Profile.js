// Simple contact form handler
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  status.textContent = `Thanks, ${name}! Your message has been sent successfully.`;
  status.style.color = "green";
  
  form.reset();
});
