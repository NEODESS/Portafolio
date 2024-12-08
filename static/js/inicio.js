// Generar el fondo del hero
const heroBg = document.querySelector('.hero-bg');
for (let i = 0; i < 400; i++) {
    const div = document.createElement('div');
    div.className = 'hero-bg-item';
    heroBg.appendChild(div);
}

// Funcionalidad de las pestañas del showcase
const tabButtons = document.querySelectorAll('.showcase-tabs button');
const tabContents = {
    buttons: document.getElementById('buttons-content'),


};

function showTab(tabName) {
    // Ocultar todos los contenidos
    Object.values(tabContents).forEach(content => content.style.display = 'none');
    
    // Mostrar el contenido seleccionado
    tabContents[tabName].style.display = 'flex';

    // Actualizar estilos de los botones
    tabButtons.forEach(button => {
        if (button.dataset.tab === tabName) {
            button.className = 'btn btn-primary';
        } else {
            button.className = 'btn btn-outline';
        }
    });
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => showTab(button.dataset.tab));
});

// Inicializar con la pestaña de botones activa
showTab('buttons');

// Funcionalidad de scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cambiar el estilo del header al hacer scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        if (document.body.classList.contains('light-mode')) {
            header.style.backgroundColor = '#ffffff'; // Color sólido para el modo claro
        } else {
            header.style.backgroundColor = '#242424'; // Color sólido para el modo oscuro
        }
    } else {
        header.style.backgroundColor = 'transparent';
    }
}); 

//botones
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.btn-particles').addEventListener('click', function(e) {
    const numParticles = 50; // Aumenta la cantidad de partículas
    const buttonRect = e.target.getBoundingClientRect();
    const x = e.clientX - buttonRect.left;
    const y = e.clientY - buttonRect.top;

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const randomAngle = Math.random() * 2 * Math.PI;
      const randomDistance = Math.random() * 50 + 50;
      
      const posX = x + Math.cos(randomAngle) * randomDistance;
      const posY = y + Math.sin(randomAngle) * randomDistance;
      
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      e.target.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 1000);
    }
  });
});


const btnShadow = document.querySelector('.btn-shadow');

btnShadow.addEventListener('mousemove', function(e) {
  const { clientX: mouseX, clientY: mouseY } = e;
  const { left, top, width, height } = btnShadow.getBoundingClientRect();
  
  const offsetX = (mouseX - left) / width * 30 - 15;
  const offsetY = (mouseY - top) / height * 30 - 15;
  
  btnShadow.style.boxShadow = `${offsetX}px ${offsetY}px 15px rgba(0, 0, 0, 0.3)`;
});

btnShadow.addEventListener('mouseleave', function() {
  btnShadow.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleThemeCheckbox = document.getElementById('toggle-theme');
  toggleThemeCheckbox.addEventListener('change', function() {
    document.body.classList.toggle('light-mode');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.btn-ripple').addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });
});




