document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });

    // --- Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const themeSwitchWrapper = document.querySelector('.theme-switch-wrapper');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (themeSwitchWrapper) {
            themeSwitchWrapper.style.display = navLinks.classList.contains('active') ? 'flex' : 'none';
        }
    });
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (themeSwitchWrapper) themeSwitchWrapper.style.display = 'none';
            }
        });
    });

    // --- Theme Switcher ---
    const themeToggle = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggle.checked = true;
        }
    }
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // --- Typing Effect ---
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        const roles = ["UI/UX Designer", "Frontend Developer", "AI Enthusiast"];
        let roleIndex = 0, charIndex = 0, isErasing = false;
        function type() {
            const currentRole = roles[roleIndex];
            if (isErasing) {
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) { isErasing = false; roleIndex = (roleIndex + 1) % roles.length; }
            } else {
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentRole.length) { isErasing = true; setTimeout(type, 2000); return; }
            }
            setTimeout(type, isErasing ? 50 : 100);
        }
        type();
    }

    // --- Stable Spotlight Cursor ---
    const root = document.documentElement;
    if (root) {
        window.addEventListener('mousemove', (e) => {
            root.style.setProperty('--x', e.clientX + 'px');
            root.style.setProperty('--y', e.clientY + 'px');
        });
    }

});

// --- Modal Functions ---
function openCaseStudy(modalId) {
    document.getElementById(modalId).style.display = 'block';
}
function closeCaseStudy(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
window.onclick = function(event) {
    document.querySelectorAll('.case-study-modal').forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
