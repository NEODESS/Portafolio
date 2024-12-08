// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    nav.classList.toggle('active');
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .portfolio-item').forEach((el) => {
    observer.observe(el);
});

// Form handling
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add your form submission logic here
        const formData = new FormData(form);
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // Show success message (you can customize this)
        alert('Message sent successfully!');
        form.reset();
    });
}

// Floating animation for hero image
const heroImage = document.querySelector('.floating-card');
if (heroImage) {
    let y = 0;
    let direction = 1;
    
    function animate() {
        y += 0.1 * direction;
        
        if (y > 10) direction = -1;
        if (y < 0) direction = 1;
        
        heroImage.style.transform = `translateY(${y}px)`;
        requestAnimationFrame(animate);
    }
    
    animate();
}

document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('download-cv');
    downloadButton.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = '/document/Hoja de Vida Daniel Rodriguez Programador.pdf'; // Asegúrate de que esta ruta sea correcta
        link.download = 'Hoja de Vida Daniel Rodriguez Programador.pdf'; // Nombre del archivo que se descargará
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});