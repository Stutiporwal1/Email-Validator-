// Typing animation for heading
document.addEventListener("DOMContentLoaded", () => {
  const text = "About Us";
  let i = 0;
  const speed = 100;
  const heading = document.getElementById("about-heading");

  function typeWriter() {
    if (i < text.length) {
      heading.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});

// Dark mode toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
