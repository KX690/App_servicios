const closeButtonRegister = document.querySelector('.icon-close');
const inputsRegister = document.querySelectorAll('.register .input-box input');
closeButtonRegister.addEventListener('click', () => {
    inputsRegister.forEach(input => input.value = '');
});

const closeButtonLogin = document.querySelector('.icon-close');
const inputsLogin = document.querySelectorAll('.login .input-box input');
closeButtonLogin.addEventListener('click', () => {
    inputsLogin.forEach(input => input.value = '');
});

function loadProveedores() {
    const proveedores = [
        { nombre: "Kevin", calificacion: "5", profesion: "Backend", ciudad: "Luque", numero: "+595 981 123457" },
        { nombre: "Joel", calificacion: "5", profesion: "Full-stack", ciudad: "Asuncion", numero: "+595 981 324123" },
        { nombre: "Hugo", calificacion: "5", profesion: "Odoo dev", ciudad: "Areguá", numero: "+595 981 914141" },
        { nombre: "Nati", calificacion: "5", profesion: "Fontend", ciudad: "Misiones", numero: "+595 981 123457" },
        { nombre: "Lautaro", calificacion: "5", profesion: "Backend", ciudad: "Luque", numero: "+595 981 123457" },
        { nombre: "Mati", calificacion: "5", profesion: "Backend", ciudad: "Luque", numero: "+595 981 123457" }
    ];

    const proveedorContainer = document.getElementById('proveedores-container');

    proveedores.forEach(proveedor => {
        const card = `
            <div class="proveedor">
                <div>
                    <h4 class="proveedor-title">Nombre: \t ${proveedor.nombre}</h4>
                    <p class="proveedor-rating">Calificación: \t ${proveedor.calificacion}</p>
                    <p class="proveedor-profession">Profesion: \t ${proveedor.profesion}</p>
                    <p class="proveedor-city">Ciudad: \t ${proveedor.ciudad}</p>
                    <p class="proveedor-number">Numero: \t ${proveedor.numero}</p>
                    </div>
                    <a href="#" class="contact-button">Contactar</a>
            </div>
      `;
        proveedorContainer.innerHTML += card;
    });
}
function logout() {
    window.location.href = 'index.html';
}

loadProveedores();

