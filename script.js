// Scroll animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

// initial state
sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "0.6s";
});

// dark mode
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};
