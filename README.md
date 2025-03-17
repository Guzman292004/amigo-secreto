# Amigo Secreto

Este proyecto es una pequeña aplicación para realizar un sorteo de **Amigos Secretos**. Los usuarios pueden añadir los nombres de sus amigos y luego realizar un sorteo aleatorio para asignarles a cada uno un amigo secreto.

## Tecnologías utilizadas

- **HTML**: Para la estructura de la página web.
- **CSS**: Para el estilo de la página.
- **JavaScript**: Para la funcionalidad de agregar amigos y realizar el sorteo aleatorio.

## Funcionamiento

1. **Añadir amigos**: Los usuarios pueden escribir un nombre en el campo de texto y hacer clic en "Añadir". El nombre se agregará a la lista de amigos.
2. **Sorteo aleatorio**: Después de agregar algunos amigos, los usuarios pueden hacer clic en "Sortear amigo" para seleccionar aleatoriamente un amigo de la lista.
3. **Visualización**: El nombre del amigo sorteado se muestra en una lista al lado de los resultados.

## Instrucciones para ejecutar el proyecto

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/tu_usuario/amigo-secreto.git
    ```

2. **Abre el archivo `index.html`** en tu navegador para ver la aplicación funcionando.


## Funcionalidad

1. **Agregar amigos**:  
   La función `agregarAmigo()` captura el nombre de un amigo desde el campo de texto y lo agrega a la lista de amigos. Si el campo está vacío, muestra una alerta.

2. **Limpiar campo**:  
   La función `limpiarCampo()` limpia el campo de texto después de agregar un amigo.

3. **Actualizar la lista**:  
   La función `actualizarListaAmigos()` actualiza la lista en la interfaz cada vez que se agrega un amigo.

4. **Sortear amigo**:  
   La función `sortearAmigo()` selecciona un amigo aleatoriamente usando `Math.random()` y `Math.floor()`. Si no hay amigos en la lista, muestra un mensaje de alerta.



