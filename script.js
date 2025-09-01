// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMsg").innerText = "✅ Thank you! Your message has been recorded.";
  this.reset();
});