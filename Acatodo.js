// Este código maneja el inicio de sesión existente
document.getElementById('login-button').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
   
    if (email.endsWith("@pcpuma.acatlan.unam.mx")) {
        // Redirige a la página principal
        window.location.href = "pagina_principal.html";
    } else {
        alert("El correo electrónico no es válido. Por favor, ingrese un correo de la UNAM.");
    }
});

// Manejador de eventos para el botón de registro, si existe en la misma página
if (document.getElementById('register-button')) {
    document.getElementById('register-button').addEventListener('click', function() {
        window.location.href = "registro.html";
    });
}

//REPORTES
function confirmarEnvio() {
    if (confirm('¿Estás seguro de enviar el reporte?')) {
        var form = document.getElementById('form-reporte');
        // Aquí podrías enviar el formulario, por ejemplo:
        // form.submit();
        // Por ahora, solo mostraremos un mensaje
        alert('Reporte enviado.');
    }
}

// ENCARGOS


document.addEventListener('DOMContentLoaded', function() {
    window.cambiarCantidad = function(articulo, cambio) {
        var inputCantidad = document.getElementById('cantidad-' + articulo);
        var nuevaCantidad = parseInt(inputCantidad.value, 10) + cambio;
        if (nuevaCantidad < 0) {
            nuevaCantidad = 0;
        }
        inputCantidad.value = nuevaCantidad;
    };

    document.getElementById('boton-comprar').addEventListener('click', function() {
        console.log("El botón fue presionado."); // Verifica que el clic es detectado
        alert('Orden enviada.');
    });
   
});

