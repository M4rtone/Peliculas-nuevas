// Selecciona el formulario de registro por su ID
const signupForm = document.querySelector('#signupForm');

// Añade un evento 'submit' al formulario
signupForm.addEventListener('submit', (e) => {
    // Previene el comportamiento por defecto del formulario (recargar la página)
    e.preventDefault();

    // Obtiene el valor del campo de entrada con ID 'name'
    const name = document.querySelector('#name').value;

    // Obtiene el valor del campo de entrada con ID 'email'
    const email = document.querySelector('#email').value;

    // Obtiene el valor del campo de entrada con ID 'password'
    const password = document.querySelector('#password').value;

    // Recupera los usuarios almacenados en localStorage, o inicializa un array vacío si no hay ninguno
    const Users = JSON.parse(localStorage.getItem('users')) || [];

    // Busca si ya existe un usuario registrado con el mismo email
    const isUserRegistered = Users.find(user => user.email === email);

    // Si se encuentra un usuario con el mismo email, muestra una alerta y detiene la ejecución
    if (isUserRegistered) {
        return alert('El usuario ya está registrado!');
    }

    // Añade el nuevo usuario al array de usuarios
    Users.push({ name: name, email: email, password: password });

    // Guarda el array de usuarios actualizado en localStorage
    localStorage.setItem('users', JSON.stringify(Users));

    // Muestra una alerta de registro exitoso
    alert('Registro Exitoso!');

    // Redirige al usuario a la página de inicio de sesión
    window.location.href = 'login.html';
});
