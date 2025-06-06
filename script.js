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
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});



