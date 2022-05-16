const btnEnviar = document.getElementById('btn-enviar');
const usuario = document.getElementById('usuario');
const clave = document.getElementById('clave');

btnEnviar.addEventListener('click', function(){
    if (usuario.value === "" && clave.value === "") {
        alert("Por favor, ingrese su usuario y contraseña");
    } else if(usuario.value.includes('@')) {
        alert(`Bienvenido ${usuario.value}!`);
    } else {
        alert("Falta el arroba en el usuario");
    }
});