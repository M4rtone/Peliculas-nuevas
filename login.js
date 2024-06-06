// Selecciona el formulario de inicio de sesión por su ID
const loginForm = document.querySelector('#loginForm');

// Añade un evento 'submit' al formulario
loginForm.addEventListener('submit', (e) => {
    // Previene el comportamiento por defecto del formulario (recargar la página)
    e.preventDefault();

    // Obtiene el valor del campo de entrada con ID 'email'
    const email = document.querySelector('#email').value;

    // Obtiene el valor del campo de entrada con ID 'password'
    const password = document.querySelector('#password').value;

    // Recupera los usuarios almacenados en localStorage, o inicializa un array vacío si no hay ninguno
    const Users = JSON.parse(localStorage.getItem('users')) || [];

    // Busca si existe un usuario con el mismo email y contraseña
    const validUser = Users.find(user => user.email === email && user.password === password);

    // Si no se encuentra un usuario válido, muestra una alerta y detiene la ejecución
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!');
    }

    // Muestra una alerta de bienvenida con el nombre del usuario
    alert(`Bienvenido ${validUser.name}`);

    // Guarda el usuario válido en localStorage bajo la clave 'login_success'
    localStorage.setItem('login_success', JSON.stringify(validUser));

    // Redirige al usuario a la página de inicio
    window.location.href = 'index.html';
});
