// Display motivational quote on button click
function showQuote() {
  const quotes = [
    "Believe in yourself and all that you are!",
    "Dream big, work hard, stay humble.",
    "Every expert was once a beginner."
  ];
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}

// Contact form validation
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const msg = document.getElementById("formMsg");

  if (!email.includes("@")) {
    msg.style.color = "red";
    msg.textContent = "Please enter a valid email!";
  } else {
    msg.style.color = "green";
    msg.textContent = "Message sent successfully!";
  }
});