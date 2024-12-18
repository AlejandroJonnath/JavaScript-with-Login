// login.js

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Credenciales correctas
    const correctUsername = "Alejandro";
    const correctPassword = "Bedoya";

    // Validación de las credenciales
    if (username === correctUsername && password === correctPassword) {
        // Si las credenciales son correctas, redirigir a index.html
        window.location.href = "index.html";
    } else {
        // Si son incorrectas, mostrar un mensaje de error
        document.getElementById('error-message').textContent = "Página Privada, necesitas contraseña";
    }
});
