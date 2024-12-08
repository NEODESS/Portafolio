 // Efecto de pulsación suave al hacer clic, con un pequeño retraso
    document.querySelector('.cta-primary').addEventListener('click', function() {
        this.style.transform = 'scale(0.97)';
        setTimeout(() => {
            this.style.transform = ''; 
        }, 150);
    });


// Funcionalidad interactiva: Rotación del botón
document.querySelector('.cta-outline').addEventListener('click', function() {
    // Al hacer clic en el botón con la clase 'cta-outline', se ejecuta esta función

    // Aplica una rotación de 360 grados al botón
    this.style.transform = 'rotate(360deg)';

    // Define una transición suave para la transformación, que durará 0.6 segundos
    this.style.transition = 'transform 0.3s ease-in-out';

    // Después de 600 milisegundos (0.6 segundos), elimina la transformación
    setTimeout(() => {
        this.style.transform = '';
    }, 300);
});

    // Funcionalidad interactiva: Elevación con rotación al hacer clic
    document.querySelector('.cta-floating').addEventListener('click', function() {
        this.style.transform = 'translateY(-10px) rotate(5deg)';
        this.style.transition = 'transform 0.4s ease-in-out';
        setTimeout(() => {
            this.style.transform = '';
        }, 400);
    });

    // Selecciono el primer elemento con la clase 'cta-glow' y añado un evento de clic
document.querySelector('.cta-glow').addEventListener('click', function() {
    // Al hacer clic en el botón con la clase 'cta-glow', se ejecuta esta función

    // Guardo el color de fondo original del botón
    const originalColor = this.style.backgroundColor;

    // Cambio el color de fondo del botón a un color de explosión (#ff9e7a)
    this.style.backgroundColor = '#ff9e7a';

    // Después de 300 milisegundos (0.3 segundos), restauro el color de fondo original
    setTimeout(() => {
        this.style.backgroundColor = originalColor;
    }, 300);
});


  // Funcionalidad interactiva: Efecto de pulsación elegante
    document.querySelector('.unique-cta-glow').addEventListener('click', function() {
        const originalColor = this.style.backgroundColor;
        this.style.backgroundColor = '#383D41'; // Color intermedio al hacer clic
        setTimeout(() => {
            this.style.backgroundColor = originalColor; // Vuelve al color original después de un breve momento
        }, 300);
    });
