const card = document.getElementById("card");
const button = document.querySelector("button");
const stickman = document.querySelector(".stickman");
const beam = document.querySelector(".beam");

// Dynamic card shadow based on mouse movement
document.addEventListener("mousemove", (e) => {
  const { left, top, width, height } = card.getBoundingClientRect();
  const x = e.clientX - left - width / 2;
  const y = e.clientY - top - height / 2;

  const shadowX = x / 20;
  const shadowY = y / 20;

  card.style.boxShadow = `${-shadowX}px ${-shadowY}px 30px rgba(0, 0, 0, 0.3)`;
});

// Hover effect for beam and stickman
button.addEventListener("mouseenter", () => {
  stickman.style.transform = "translateY(-60px)";
  beam.style.fill = "rgba(255, 255, 200, 0.6)";
});

button.addEventListener("mouseleave", () => {
  stickman.style.transform = "translateY(0)";
  beam.style.fill = "rgba(255, 255, 100, 0.3)";
});




  const input = document.getElementById('phone');

  input.addEventListener('keydown', (event) => {
    // Allow control keys: backspace, delete, arrows, tab, etc.
    const allowedKeys = [
      "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter", "Home", "End"
    ];
    // Allow digits 0-9 only
    if (!allowedKeys.includes(event.key) && !/^\d$/.test(event.key)          
) {
  event.preventDefault(); // block the keypress
}
});

