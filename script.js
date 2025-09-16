// Smooth scroll to form
function scrollToForm() {
  document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
}

// Form submit alert
document.getElementById("form").addEventListener("submit", function(event) {
  alert("🚀 Thanks for joining Tech Master, Ijoba will reach out to you soon!");
});
