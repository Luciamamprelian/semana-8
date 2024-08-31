const DATA_URL = "data.json"; // URL del archivo JSON

const container = document.getElementById("container"); // Traemos el div de id "container" para colocar la información en él

/**
 * Función que recibe un array con los datos de los estudiantes y los muestra en el DOM
 * @param {Array} studentsArray - Array de objetos con datos de los estudiantes
 */
function showData(studentsArray) {
  container.innerHTML = ''; // Limpia el contenedor antes de agregar nuevos datos
  for (const student of studentsArray) {
    // Crear un nuevo párrafo para cada estudiante
    const paragraph = document.createElement('p');
    paragraph.textContent = `${student.name} ${student.lastname}`;
    container.appendChild(paragraph);
  }
}

// Realiza la solicitud para obtener el archivo JSON
fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON.');
    }
    return response.json(); // Convierte la respuesta en formato JSON
  })
  .then(data => {
    if (data && data.students) {
      showData(data.students); // Pasa el array de estudiantes a la función showData
    } else {
      console.error('No se encontraron datos de estudiantes en el JSON.');
    }
  })
  .catch(error => {
    console.error('Hubo un problema con la carga del archivo JSON:', error); // Manejo de errores
  });
