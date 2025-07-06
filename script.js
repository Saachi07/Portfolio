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

// Back to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Smooth scroll to top when button is clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-fill');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fillBar 2s ease-out forwards';
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
});

// Contact Form with Node.js Backend
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Disable submit button
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            try {
                console.log('Sending form data:', formData);
                
                // Send to our Node.js backend
                //const response = await fetch('/api/contact', {
                const response = await fetch('https://your-app-name.railway.app/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                console.log('Response status:', response.status);
                console.log('Response headers:', response.headers);
                
                const result = await response.json();
                console.log('Response data:', result);
                
                if (result.success) {
                    // Show success message
                    contactForm.style.display = 'none';
                    successMessage.style.display = 'block';
                    
                    // Reset form
                    contactForm.reset();
                } else {
                    alert(result.message || 'Failed to send message. Please try again.');
                }
                
            } catch (error) {
                console.error('Network Error Details:', error);
                console.error('Error name:', error.name);
                console.error('Error message:', error.message);
                alert('Network error. Please check your connection and try again.');
            } finally {
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
        });
    }
});
