import { jsPDF } from "jspdf";

async function App() {
  async function fetchData() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    try {
      const response = await fetch("http://localhost:3000/alumnos", requestOptions);
      const result = await response.json(); // Parse response as JSON
      return result;
    } catch (error) {
      console.log('error', error);
    }
  }
  
  const datos = await fetchData(); // Wait for the array of data
  
  if (datos && datos.length > 0) {
    const primerDato = datos[0];
  
    console.log(primerDato);
    console.log(primerDato.nombre);
  
    const doc = new jsPDF();
    doc.text(`a nombre de ${primerDato.nombre}`, 10, 10);
    // Agregar una imagen
    const imgData = "data:image/png;base64,/9j/4AAQSk..."; // Reemplaza esto con tu cadena base64 de la imagen
    doc.addImage(imgData, "JPEG", 10, 20, 50, 50); // Ajusta las coordenadas y el tamaño según sea necesario
    doc.save("a4.pdf");
  }
  
  return (
    <div>
      <h1>Helllo</h1>
    </div>
  );
}

export default App;