document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeCheckbox = document.getElementById('componentes-toggle-theme');
    toggleThemeCheckbox.addEventListener('change', function() {
        document.body.classList.toggle('light-mode');
    });
});