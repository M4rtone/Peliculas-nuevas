// Intenta obtener el usuario autenticado desde localStorage
const user = JSON.parse(localStorage.getItem('login_success')) || false;

// Si no hay un usuario autenticado, redirige a la página de inicio de sesión
if (!user) {
    window.location.href = 'login.html';
}

// Selecciona el botón o enlace de cierre de sesión por su ID
const logout = document.querySelector('#logout');

// Añade un evento 'click' al botón de cierre de sesión
logout.addEventListener('click', () => {
    // Muestra una alerta de despedida
    alert('Hasta pronto!');

    // Elimina el registro del usuario autenticado en localStorage
    localStorage.removeItem('login_success');

    // Redirige al usuario a la página de inicio de sesión
    window.location.href = 'login.html';
});
 
