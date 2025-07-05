// Dynamic Header
const header = document.getElementById("dynamic-header");
const hours = new Date().getHours();
header.textContent = hours < 12 ? "Good Morning!" : hours < 18 ? "Good Afternoon!" : "Good Evening!";

// Fun Fact Generator
const funFacts = [
    "I love coding at night!",
    "I once built a website in under 24 hours!",
    "I enjoy experimenting with CSS animations!",
    "I believe simplicity is key in design!"
];

document.getElementById("fun-fact").textContent = `Fun Fact: ${funFacts[Math.floor(Math.random() * funFacts.length)]}`;

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
let isDarkMode = false;

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
    isDarkMode = true;
} else {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙";
    isDarkMode = false;
}

themeToggle.addEventListener("click", () => {
    if (isDarkMode) {
        // Switch to light mode
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        themeToggle.textContent = "🌙";
        localStorage.setItem('theme', 'light');
        isDarkMode = false;
    } else {
        // Switch to dark mode
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
        localStorage.setItem('theme', 'dark');
        isDarkMode = true;
    }
});



