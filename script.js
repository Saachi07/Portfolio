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

// Contact Form with EmailJS
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init("LZkobiONn-hP2bxnT"); 
    
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Disable submit button
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Prepare template parameters
            const templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                message: document.getElementById('message').value,
                to_name: 'Saachi' // Your name
            };
            
            // Send email using EmailJS
            emailjs.send('service_zcnwm9s', 'template_mydx2sl', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success message
                    contactForm.style.display = 'none';
                    successMessage.style.display = 'block';
                    
                    // Reset form
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Sorry, there was an error sending your message. Please try again.');
                })
                .finally(function() {
                    // Re-enable button
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                });
        });
    }
});
