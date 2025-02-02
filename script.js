document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
  
const fadeInSections = () => {
    sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
  
    if (sectionTop < window.innerHeight && sectionBottom > 0) {
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
    }
    });
};
  
fadeInSections();

window.addEventListener("scroll", fadeInSections);
});
  
const buttons = document.querySelectorAll(".btn");
  
buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "#00854d";
      button.style.transform = "scale(1.1)";
});
  
button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "#00FF00";
      button.style.transform = "scale(1)";
    });
});
  
const profilePicture = document.querySelector(".profile-picture");
  
profilePicture.addEventListener("mouseenter", () => {
    profilePicture.style.transform = "scale(1.1)";
    profilePicture.style.borderColor = "#00854d";
});
  
profilePicture.addEventListener("mouseleave", () => {
    profilePicture.style.transform = "scale(1)";
    profilePicture.style.borderColor = "#00FF00";
});

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  updateToggleIcon();
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const isLightMode = body.classList.contains("light-mode");
  localStorage.setItem("theme", isLightMode ? "light-mode" : "");
  updateToggleIcon();
});

function updateToggleIcon() {
  const isLightMode = body.classList.contains("light-mode");
  themeToggle.innerHTML = isLightMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}