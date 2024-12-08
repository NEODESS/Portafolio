// Funcionalidad para las pestañas
document.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remover clase active de todas las pestañas del mismo grupo
        tab.parentElement.querySelectorAll('.tab-item').forEach(t => {
            t.classList.remove('active');
        });
        // Añadir clase active a la pestaña clickeada
        tab.classList.add('active');

        // Mostrar solo la sección activa
        const sectionId = tab.getAttribute('href').substring(1);
        document.querySelectorAll('.component-section').forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});

// Inicializar mostrando solo la sección de botones
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.component-section').forEach(section => {
        if (section.id === 'buttons') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});

// Funcionalidad para la navegación vertical
document.querySelectorAll('.vertical-nav-item').forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.querySelectorAll('.vertical-nav-item').forEach(i => {
            i.classList.remove('active');
        });
        item.classList.add('active');
    });
});

// Funcionalidad responsive para el sidebar
const toggleSidebar = () => {
    document.querySelector('.sidebar').classList.toggle('active');
};

// Añadir botón de toggle en móvil si es necesario
if (window.innerWidth <= 768) {
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '☰';
    toggleButton.style.cssText = `
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 1001;
        background: var(--accent);
        border: none;
        color: white;
        padding: 0.5rem;
        border-radius: 4px;
        cursor: pointer;
    `;
    toggleButton.addEventListener('click', toggleSidebar);
    document.body.appendChild(toggleButton);
}

// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad para el menú móvil
    const createMobileMenu = () => {
        if (window.innerWidth <= 768) {
            const toggleButton = document.createElement('button');
            toggleButton.innerHTML = '☰';
            toggleButton.className = 'mobile-menu-toggle';
            toggleButton.style.cssText = `
                position: fixed;
                top: 1rem;
                left: 1rem;
                z-index: 1000;
                background: var(--primary);
                border: none;
                color: white;
                padding: 0.5rem;
                border-radius: 4px;
                cursor: pointer;
            `;
            
            document.body.appendChild(toggleButton);
            
            toggleButton.addEventListener('click', () => {
                document.querySelector('.sidebar').classList.toggle('active');
            });
        }
    };

    // Inicializar menú móvil
    createMobileMenu();

    // Smooth scroll para los enlaces del sidebar
    document.querySelectorAll('.sidebar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Cerrar sidebar en móvil después de click
            if (window.innerWidth <= 768) {
                document.querySelector('.sidebar').classList.remove('active');
            }

            // Remover clase active de todos los enlaces
            document.querySelectorAll('.sidebar a').forEach(link => {
                link.classList.remove('active');
            });

            // Añadir clase active al enlace clickeado
            this.classList.add('active');
        });
    });

    // Funcionalidad para los formularios de demostración
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aquí iría la lógica de envío del formulario
            console.log('Formulario enviado');
        });
    });

    // Observador de intersección para animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar todas las cards de componentes
    document.querySelectorAll('.component-card').forEach(card => {
        observer.observe(card);
    });

    // Funcionalidad para los botones
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

    // Funcionalidad para los botones primarios, secundarios, outline, ghost y gradient
    document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline, .btn-ghost, .btn-gradient').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });

        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });

        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.05)';
        });
    });
});

document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.dataset.target;
        const targetElement = document.getElementById(targetId);
        const textToCopy = targetElement.textContent;

        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Mostrar el modal con el código del componente
    document.querySelectorAll('.view-code').forEach(button => {
        button.addEventListener('click', function() {
            const componentCard = this.closest('.component-card');
            const componentHtml = componentCard.querySelector('.component-preview').innerHTML.trim();
            const componentCss = getComponentCss(this.dataset.component);
            const componentJs = getComponentJs(this.dataset.component);

            document.getElementById('code-html').value = componentHtml;
            document.getElementById('code-css').value = componentCss;
            document.getElementById('code-js').value = componentJs;

            const previewContainer = document.getElementById('component-preview');
            previewContainer.innerHTML = componentHtml;

            const modal = document.getElementById('codeModal');
            modal.style.display = 'flex';

            // Cerrar el modal después de 1 minuto
            setTimeout(() => {
                modal.style.display = 'none';
            }, 60000);
        });
    });

    // Cerrar el modal al hacer clic en la "X"
    document.querySelector('.close').addEventListener('click', function() {
        const modal = document.getElementById('codeModal');
        modal.style.display = 'none';
    });

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('codeModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Funcionalidad de copiado
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const targetElement = document.getElementById(targetId);
            const textToCopy = targetElement.value;

            navigator.clipboard.writeText(textToCopy).then(() => {
                showCopyNotification();
            }).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
        });
    });

    // Función para mostrar la notificación de copiado
    function showCopyNotification() {
        const notification = document.getElementById('copyNotification');
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000);
    }

    // Funciones para obtener el CSS y JS de los componentes
    function getComponentCss(component) {
        switch (component) {
            case 'btn-3d':
                return `.btn-3d {
    background-color: #4CAF50;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 6px #999;
    transition: all 0.3s ease;
}

.btn-3d:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px #666;
}

.btn-3d:active {
    transform: translateY(4px);
    box-shadow: 0 4px #666;
}`;
            case 'btn-particles':
                return `.btn-particles {
    background-color: #FF6347;
    color: white;
    font-size: 18px;
    padding: 15px 30px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;
}

.btn-particles:hover {
    background-color: #FF4500;
}

.particle {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #fff5bc;
    border-radius: 50%;
    opacity: 0;
    animation: particle-animation 1s forwards;
}

@keyframes particle-animation {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0); }
}`;
            case 'btn-ripple':
                return `.btn-ripple {
    background-color: #0d9b2c;
    color: white;
    padding: 15px 30px;
    border: none;
    font-size: 16px;
    border-radius: 50px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s;
}

.btn-ripple:hover {
    background-color: #0c8033;
}

.btn-ripple:focus {
    outline: none;
}

.btn-ripple::after {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    width: 300%;
    height: 300%;
    transition: all 0.6s ease;
    pointer-events: none;
    transform: scale(0);
}

.btn-ripple:active::after {
    transform: scale(1);
    animation: ripple 0.6s;
}

@keyframes ripple {
    0% { transform: scale(0); }
    100% { transform: scale(1); }
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.1);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}`;
            case 'btn-creative':
                return `.btn-creative {
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 50px;
    padding: 15px 40px;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    outline: none;
    z-index: 1;
    display: inline-block;
}

.btn-creative::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: linear-gradient(45deg, #ff0080, #ff8c00, #ece909);
    background-size: 400% 400%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: gradientAnimation 4s ease infinite;
}

.btn-creative::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 100%;
    background-color: #ffffff21;
    border-radius: 50px;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    z-index: 0;
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.btn-creative:hover {
    transform: scale(1.1);
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
}

.btn-creative:hover::after {
    width: 100%;
}`;
            case 'btn-shadow':
                return `.btn-shadow {
    background-color: #008CBA;
    color: white;
    padding: 15px 30px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
}

.btn-shadow:hover {
    transform: scale(1.1);
}

.btn-shadow:active {
    transform: scale(1.05);
}`;
            case 'btn-primary':
                return `.btn-primary {
    background-color: var(--primary);
    color: white;
    transition: transform 0.2s, box-shadow 0.2s;
}`;
            case 'btn-secondary':
                return `.btn-secondary {
    background-color: var(--secondary);
    color: white;
    transition: transform 0.2s, box-shadow 0.2s;
}`;
            case 'btn-outline':
                return `.btn-outline {
    background-color: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);
    transition: transform 0.2s, box-shadow 0.2s;
}`;
            case 'btn-ghost':
                return `.btn-ghost {
    background-color: transparent;
    color: var(--primary);
    transition: transform 0.2s, box-shadow 0.2s;
}`;
            case 'btn-gradient':
                return `.btn-gradient {
    background: linear-gradient(45deg, var(--primary), var(--accent));
    color: white;
    transition: transform 0.2s, box-shadow 0.2s;
}`;
            case 'button-slide-in':
                return `.button.slide-in {
    background: linear-gradient(135deg, #6a6a6a, #1f1f1f);
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    padding: 20px 40px;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    border: none;
}

.button.slide-in:hover {
    background: linear-gradient(135deg, #1f1f1f, #6a6a6a);
    transform: translateX(10px);
}

.button.slide-in::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.button.slide-in:hover::after {
    left: 100%;
}`;
            case 'button-glowing-edge':
                return `.button.glowing-edge {
    background-color: #333;
    color: #fff;
    font-size: 18px;
    padding: 20px 40px;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border: 2px solid #333;
    position: relative;
    transition: all 0.3s ease;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button.glowing-edge:hover {
    color: #ff6b6b;
    border: 2px solid #ff6b6b;
    box-shadow: 0 0 10px rgba(255, 107, 107, 0.7);
}

.button.glowing-edge:active {
    transform: scale(0.98);
}`;
            case 'button-bounce':
                return `.button.bounce {
    background-color: #3b3b3b;
    color: #fff;
    font-size: 18px;
    padding: 20px 40px;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    border: none; /* Sin bordes predeterminados */
}

.button.bounce:hover {
    animation: bounce 0.6s ease-in-out;
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}`;
            default:
                return '';
        }
    }

    function getComponentJs(component) {
        switch (component) {
            case 'btn-3d':
                return `// No hay JS específico para este botón`;
            case 'btn-particles':
                return `document.querySelector('.btn-particles').addEventListener('click', function(e) {
    const numParticles = 50;
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
        
        particle.style.left = \`\${posX}px\`;
        particle.style.top = \`\${posY}px\`;
        e.target.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
});`;
            case 'btn-ripple':
                return `document.querySelector('.btn-ripple').addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = \`\${size}px\`;
    ripple.style.left = \`\${e.clientX - rect.left - size / 2}px\`;
    ripple.style.top = \`\${e.clientY - rect.top - size / 2}px\`;

    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});`;
            case 'btn-creative':
                return `// No hay JS específico para este botón`;
            case 'btn-shadow':
                return `const btnShadow = document.querySelector('.btn-shadow');

btnShadow.addEventListener('mousemove', function(e) {
    const { clientX: mouseX, clientY: mouseY } = e;
    const { left, top, width, height } = btnShadow.getBoundingClientRect();
    
    const offsetX = (mouseX - left) / width * 30 - 15;
    const offsetY = (mouseY - top) / height * 30 - 15;
    
    btnShadow.style.boxShadow = \`\${offsetX}px \${offsetY}px 15px rgba(0, 0, 0, 0.3)\`;
});

btnShadow.addEventListener('mouseleave', function() {
    btnShadow.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
});`;
            case 'btn-primary':
            case 'btn-secondary':
            case 'btn-outline':
            case 'btn-ghost':
            case 'btn-gradient':
                return `document.querySelectorAll('.${component}').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });

    button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });

    button.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1.05)';
    });
});`;
            case 'button-slide-in':
            case 'button-glowing-edge':
            case 'button-bounce':
                return `// No hay JS específico para este botón`;
            default:
                return '';
        }
    }
});