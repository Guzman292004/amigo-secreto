let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Si es valido el nombre, se agrega a la lista de amigos
    amigos.push(nombre);

    actualizarListaAmigos();
    
    limpiarCampo();
}


//funcion para limpiar el campo de entrada
function limpiarCampo() {
    document.getElementById("amigo").value = "";
}

//funcion para actualizar la lista
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar
    
    let contenidoLista = "";
    for (let i = 0; i < amigos.length; i++) {
        contenidoLista += "<li>" + amigos[i] + "</li>";
    }
    lista.innerHTML = contenidoLista;
}
