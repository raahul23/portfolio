// Toggle Navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Open Case Study
function openCaseStudy(id) {
  document.getElementById(id).style.display = "flex";
}

// Close Case Study
function closeCaseStudy(id) {
  document.getElementById(id).style.display = "none";
}

// Close modal on outside click
window.addEventListener("click", (e) => {
  document.querySelectorAll(".case-study-modal").forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
