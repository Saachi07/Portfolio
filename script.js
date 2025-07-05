// Dynamic Header
const header = document.getElementById("dynamic-header");
const hours = new Date().getHours();
header.textContent = hours < 12 ? "Good Morning!" : hours < 18 ? "Good Afternoon!" : "Good Evening!";


// Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById("theme-toggle");
    
    if (!themeToggle) {
        console.error("Theme toggle button not found!");
        return;
    }
    
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
        console.log("Theme toggle clicked! Current mode:", isDarkMode ? "dark" : "light");
        
        if (isDarkMode) {
            // Switch to light mode
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            themeToggle.textContent = "🌙";
            localStorage.setItem('theme', 'light');
            isDarkMode = false;
            console.log("Switched to light mode");
        } else {
            // Switch to dark mode
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            themeToggle.textContent = "☀️";
            localStorage.setItem('theme', 'dark');
            isDarkMode = true;
            console.log("Switched to dark mode");
        }
    });
    
    console.log("Theme toggle initialized successfully");
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // For now, just show an alert (you can replace this with actual email sending)
            alert(`Thank you for your message, ${name}! I'll get back to you at ${email} soon.`);
            
            // Clear the form
            contactForm.reset();
        });
    }
});



