import React, { useEffect } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

function FDP02() {
  useEffect(() => {
    async function fetchData() {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/alumnos",
          requestOptions
        );
        const result = await response.json();
        return result;
      } catch (error) {
        throw new Error("Error fetching data");
      }
    }

    const img1 =
    "https://portalesmuli.s3.amazonaws.com/sicyt/original_images/SICyT2.png";
    const img2 =
    "data:image/png;base64,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";
    const img3 = "https://pbs.twimg.com/profile_images/1587466002241134594/RCTlvwMC_400x400.jpg";

    let currentPositionY = 77;




    function generateTable(
      doc,
      headers,
      tableData,
      startY,
      headStyles,
      showHead
    ) {
      doc.autoTable({
        
        head: [headers],
        body: tableData,
        startY: startY,
        theme: "grid",
        styles: {
          lineColor: [0, 0, 0],
          lineWidth: 0.3,
        },
        headStyles: headStyles,
        showHead: showHead,
      });
    }





    function crearCelda(doc, x, y, width, height, texto) {
      
      doc.rect(x, y, width, height, 'F');
      doc.rect(x, y, width, height, 'S');
  
      doc.setFont("helvetica");
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
  
      const textoWidth = doc.getStringUnitWidth(texto) * doc.internal.getFontSize() / doc.internal.scaleFactor;
      const textoX = x + (width - textoWidth) / 2; // Calcula la posición X centrada
  
      doc.text(texto, textoX, y + 5); // Usar la posición X centrada
  }




  function crearSeccion(doc, contenido, alineacion = 'justify') {
    const margenIzquierdo = 20;
    const margenSuperior = currentPositionY;
  
    // Contenido de la sección
    doc.setFont("helvetica");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
  
    const textHeight = doc.getTextDimensions(contenido, { maxWidth: 175 }).h;
  
    if (currentPositionY + textHeight > doc.internal.pageSize.height - 20) {
      doc.addPage();
      currentPositionY = 20; // Reiniciar la posición vertical en la nueva página
    }
  
    // Calcular la posición X según la alineación
    const textX = (alineacion === 'right') ? doc.internal.pageSize.width - margenIzquierdo : margenIzquierdo;
  
    doc.text(textX, currentPositionY, contenido, { maxWidth: 175, align: alineacion });
  
    currentPositionY += textHeight + 5; // Espacio después de cada sección
  }




  function crearSeccionConTexto(doc, titulo, contenido, segundoContenido = null) {
    const margenSuperior = currentPositionY;
  
    // Titulo de la sección
    doc.setFillColor(172, 178, 183);
    crearCelda(
      doc,
      20,     // cellX
      currentPositionY, // cellY
      176,    // cellWidth
      7,      // cellHeight
      titulo
    );
  
    const textHeightTitulo = 7; // Altura del título
  
    const textHeightContenido = doc.getTextDimensions(contenido, { align: 'justify', maxWidth: 175 }).h;
  
    if (currentPositionY + textHeightTitulo + textHeightContenido + 25 > doc.internal.pageSize.height - 20) {
      doc.addPage();
      currentPositionY = 20; // Reiniciar la posición vertical en la nueva página
    }
  
    doc.setFont("helvetica");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(contenido, 20, currentPositionY + textHeightTitulo + 5, { align: 'justify', maxWidth: 175 });
  
    currentPositionY += textHeightTitulo + textHeightContenido + 5; // Espacio después del texto
  
    if (segundoContenido) {
      // Si se proporciona un segundo contenido, crear una segunda celda
      const textHeightSegundoContenido = doc.getTextDimensions(segundoContenido, { align: 'justify', maxWidth: 175 }).h;
  
      if (currentPositionY + textHeightSegundoContenido + 20 > doc.internal.pageSize.height - 20) {
        doc.addPage();
        currentPositionY = 20; // Reiniciar la posición vertical en la nueva página
      }
  
      doc.setFont("helvetica");
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(segundoContenido, 20, currentPositionY + 5, { align: 'justify', maxWidth: 175 });
  
    }

  }


function crearSeccionConTexto2(doc, tituloSuperior, subtituloSuperior, contenido, segundoContenido = null) {
  const margenSuperior = currentPositionY;

  // Celdas superiores
  doc.setFillColor(172, 178, 183); // Color gris
  crearCelda(
    doc,
    20, // cellX
    currentPositionY, // cellY
    176, // cellWidth
    7, // cellHeight
    tituloSuperior
  );

  const startY = currentPositionY + 7; // Espacio entre las dos celdas de título

  doc.setFillColor(172, 178, 183); // Color gris
  crearCelda(
    doc,
    20, // cellX
    startY, // cellY
    176, // cellWidth
    7, // cellHeight
    subtituloSuperior
  );

  const textHeightTitulo = doc.getTextDimensions(tituloSuperior, { align: 'justify', maxWidth: 175 }).h;
  const textHeightSubtitulo = doc.getTextDimensions(subtituloSuperior, { align: 'justify', maxWidth: 175 }).h;

  const textHeightTotal = textHeightTitulo + textHeightSubtitulo;

  if (currentPositionY + textHeightTotal + 25 > doc.internal.pageSize.height - 20) {
    doc.addPage();
    currentPositionY = 20; // Reiniciar la posición vertical en la nueva página
  }

  doc.setFont("helvetica");
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(contenido, 20, startY + textHeightTotal + 5, { align: 'justify', maxWidth: 175 });

  currentPositionY += textHeightTotal + textHeightTitulo + 20; // Espacio después del texto

  if (segundoContenido) {
    const textHeightSegundoContenido = doc.getTextDimensions(segundoContenido, { align: 'justify', maxWidth: 175 }).h;

    if (currentPositionY + textHeightSegundoContenido + 20 > doc.internal.pageSize.height - 20) {
      doc.addPage();
      currentPositionY = 20; // Reiniciar la posición vertical en la nueva página
    }

    doc.setFont("helvetica");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(segundoContenido, 20, currentPositionY + 5, { align: 'justify', maxWidth: 175 });

    currentPositionY += textHeightSegundoContenido + 20; // Espacio después del segundo contenido
  }
}




  function crearSeccionConTabla1(doc, titulo, tablaData, tableOptions = {}) {
    const margenSuperior = currentPositionY;
  
    // Titulo de la sección
    doc.setFillColor(172, 178, 183);
    crearCelda(
      doc,
      14,     // cellX
      currentPositionY, // cellY
      182,    // cellWidth
      7,      // cellHeight
      titulo
    );
  
    const startY = currentPositionY + (tableOptions.spaceBeforeTable || 5);

  const textHeight = doc.getTextDimensions(titulo, { align: 'justify', maxWidth: 175 }).h;

  if (currentPositionY + textHeight + 25 > doc.internal.pageSize.height - 20) {
    doc.addPage();
    currentPositionY = 20; // Reiniciar la posición vertical en la nueva página
  }

  doc.autoTable({
    startY: startY,
    head: [tablaData.headers], // Encabezados de la tabla
    body: tablaData.body, // Datos de la tabla
    theme: "grid",
    styles: {
      lineColor: [0, 0, 0],
      lineWidth: 0.3,
    },
    headStyles: {
      fillColor: [172, 178, 183],
      fontSize: 12,
      textColor: [20, 20, 20],
    },
    ...tableOptions, // Opciones adicionales de la tabla
  });

  const tableHeight = doc.previousAutoTable.finalY - startY;

  currentPositionY += tableHeight + 20; // Espacio después de la tabla
}




function crearSeccionConTabla2(doc, tituloSuperior, subtituloSuperior, tablaData, tableOptions = {}) {
  const margenSuperior = currentPositionY;

  // Celdas superiores
  doc.setFillColor(172, 178, 183); // Color gris
  crearCelda(
    doc,
    14, // cellX
    currentPositionY, // cellY
    182, // cellWidth
    7, // cellHeight
    tituloSuperior
  );

  const startY = currentPositionY + (tableOptions.spaceBeforeTable || 5);

  doc.setFillColor(172, 178, 183); // Color gris
  crearCelda(
    doc,
    14, // cellX
    startY, // cellY
    182, // cellWidth
    7, // cellHeight
    subtituloSuperior
  );

  const textHeightTitulo = doc.getTextDimensions(tituloSuperior, { align: 'justify', maxWidth: 175 }).h;
  const textHeightSubtitulo = doc.getTextDimensions(subtituloSuperior, { align: 'justify', maxWidth: 175 }).h;

  const textHeightTotal = textHeightTitulo + textHeightSubtitulo;

  if (currentPositionY + textHeightTotal + 25 > doc.internal.pageSize.height - 20) {
    doc.addPage();
    currentPositionY = 20; // Reiniciar la posición vertical en la nueva página
  }

  doc.autoTable({
    startY: startY + textHeightTotal ,
    head: [tablaData.headers], // Encabezados de la tabla
    body: tablaData.body, // Datos de la tabla
    theme: "grid",
    styles: {
      lineColor: [0, 0, 0],
      lineWidth: 0.3,
    },
    headStyles: {
      fillColor: [172, 178, 183],
      fontSize: 12,
      textColor: [20, 20, 20],
    },
    ...tableOptions, // Opciones adicionales de la tabla
  });

  const tableHeight = doc.previousAutoTable.finalY - startY - textHeightTotal - 5;

  currentPositionY += tableHeight + 20; // Espacio después de la tabla
}

function crearCelda1(doc, cellX, cellY, cellWidth, cellHeight, contenido, opciones = {}) {
  // Establecer el color de fondo antes de dibujar el rectángulo
  doc.setFillColor.apply(this, opciones.fillColor || [255, 255, 255]);
  doc.rect(cellX, cellY, cellWidth, cellHeight, 'F'); // 'F' indica que se debe llenar el rectángulo

  // Establecer los estilos de línea después de dibujar el rectángulo
  doc.setDrawColor.apply(this, opciones.lineColor || [0, 0, 0]);
  doc.setLineWidth(opciones.lineWidth || 0.3);
  doc.rect(cellX, cellY, cellWidth, cellHeight); // Agregar borde alrededor del rectángulo

  doc.text(contenido, cellX + 2, cellY + 2, { align: 'left', valign: 'middle', baseline: 'middle' });
}


function crearSeccionCalificaciones(doc, titulo, tablaData, tableOptions = {}) {
  const margenSuperior = currentPositionY;

  const startY = currentPositionY + (tableOptions.spaceBeforeTable || 5);

  const textHeight = doc.getTextDimensions(titulo, { align: 'justify', maxWidth: 175 }).h;

  if (currentPositionY + textHeight + 25 > doc.internal.pageSize.height - 20) {
    doc.addPage();
    currentPositionY = 20; // Reiniciar la posición vertical en la nueva página
  }

  // Crear la tabla de datos
  doc.autoTable({
    startY: startY,
    head: [
      tablaData.headers.map(header => ({ content: header, styles: { columnWidth: 30 } })),
      // Puedes ajustar el valor de 'columnWidth' según tus necesidades para cada columna
    ],
    body: tablaData.body,
    theme: "grid",
    styles: {
      lineColor: [0, 0, 0],
      lineWidth: 0.3,
    },
    headStyles: {
      fillColor: [172, 178, 183],
      fontSize: 9,
      textColor: [20, 20, 20],
    },
    ...tableOptions,
  });

  const tableHeight = doc.previousAutoTable.finalY - startY;

  currentPositionY += tableHeight + 7; // Espacio después de la tabla

 
const cellHeight = 8; // Alto de la celda

// Columna 1
crearCelda1(
  doc,
  109.4, // cellX
  currentPositionY, // cellY
  21.4, // cellWidth (ejemplo de ancho diferente)
  cellHeight, // cellHeight
  "15",
  { fillColor: [172, 178, 183], lineColor: [0, 0, 0], lineWidth: 0.3 } // Establecer el color de fondo y otros estilos
);

// Columna 2
crearCelda1(
  doc,
  130.3, // cellX (ajusta el valor según sea necesario)
  currentPositionY, // cellY
  15, // cellWidth (ejemplo de ancho diferente)
  cellHeight, // cellHeight
  "25",
  { fillColor: [172, 178, 183], lineColor: [0, 0, 0], lineWidth: 0.3 } // Establecer el color de fondo y otros estilos
);

// Columna 3
crearCelda1(
  doc,
  145.2, // cellX (ajusta el valor según sea necesario)
  currentPositionY, // cellY
  20, // cellWidth (ejemplo de ancho diferente)
  cellHeight, // cellHeight
  "30",
  { fillColor: [172, 178, 183], lineColor: [0, 0, 0], lineWidth: 0.3 } // Establecer el color de fondo y otros estilos
);

  currentPositionY += cellHeight + 10; // Espacio después de las celdas
}










function crearSeccionConTabla(doc, headers, dataColumn, opciones = {}) {
  const tableData = headers.map((header, index) => [
    header,
    dataColumn[index],
  ]);

  const tableOptions = {
    startY: currentPositionY,
    margin: { right: 15, left: 20 },
    theme: "grid",
    styles: {
      lineColor: [0, 0, 0],
      lineWidth: 0.3,
    },
    headStyles: {
      fontSize: 15,
    },
    showHead: false,
    columnStyles: {
      0: {
        fillColor: [172, 178, 183],
      },
      1: {
        fontStyle: "bold",
      },
    },
  };

  const textHeight = doc.getTextDimensions(tableData.join('\n'), tableOptions).h;

  if (currentPositionY + textHeight > doc.internal.pageSize.height - 20) {
    doc.addPage();
    currentPositionY = 20; // Reiniciar la posición vertical en la nueva página
  }

  doc.autoTable({
    body: tableData,
    ...tableOptions,
  });

  currentPositionY = doc.previousAutoTable.finalY + (opciones.spaceBeforeTable || 10); // Espacio después de la tabla
}




  


    async function generatePDF(datos, callback) {
      if (datos && datos.length > 0) {
        const primerDato = datos[0];
        const doc = new jsPDF();
        doc.addImage(img1, "JPEG", 10, 10, 100, 25);
        doc.addImage(img2, "JPEG", 170, 10, 25, 25);


        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setFillColor(6, 98, 211)
        crearCelda(doc, 150, 40, 45, 7, "FDP02");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(69, 133, 244);
        doc.text(`DESCRIPCIÓN DE LAS INSTALACIONES`, 20, 55);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`${primerDato.fechas}`, 152, 65);


        
//         crearSeccion(
//           doc,
//           `                                               CENTRO EDUCATIVO EL SALTO                                                       
//                                             TÉCNICO SUPERIOR UNIVERSITARIO EN HOTELERÍA`
//         );

//         const headers1 = [
//           "MODALIDAD",
//           "DURACIÓN DEL CICLO ",
//           "DURACIÓN DEL PLAN DE ESTUDIOS",
//           "CLAVE DE PLAN DE ESTUDIOS",
//         ];
        
//         const dataColumn1 = [
//           primerDato.modalidad,
//           primerDato.institucion,
//           primerDato.ciclo,
//           primerDato.fechas,
//         ];
        
//         crearSeccionConTabla(doc, headers1, dataColumn1, { spaceBeforeTable: 7 });
        

//         crearSeccionConTexto(
//           doc,
//           "1. ANTECEDENTES ACADÉMICOS DE INGRESO",
//           `bachillerato`
//         );

//         crearSeccionConTexto2(
//   doc,
//   '3. PERFIL DE INGRESO',
//   'Conocimientos:',
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
// );

// currentPositionY += 10;

// crearSeccionConTexto(
//   doc,
//   "Habilidades:",
//   `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
// );

// crearSeccionConTexto(
//   doc,
//   "Actitudes:",
//   `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
// );

// crearSeccionConTexto(
//   doc,
//   "4. PROCESO DE SELECCIÓN DE ESTUDIANTES",
//   `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
// );




    const headers8 = [
      "ÁREA",
      "ASIGNATURA O UNIDAD DE APRENDIZAJE",
      "CLAVE",
      "SERIACIÓN",
      "HORAS DOCENTES",
      "HORAS INDEP.",
      "CRÉDITOS",
      "INSTALACIONES"
    ];
    const tableData8 = datos.map((dato) => [
      dato.area,
      dato.asignatura,
      dato.clave,
      dato.sericacion,
      dato.horas_1,
      dato.horas_2,
      dato.creditos,
      dato.institucion,
    ]);

    crearSeccionCalificaciones(doc, "SEGUNDO CUATRIMESTRE", {
      headers: headers8,
      body: tableData8,
    }, { spaceBeforeTable: 7 });

    
    const headers2 = [
      "TOTAL DE HORAS DE TRABAJO BAJO LA CONDUCCIÓN DE UN DOCENTE DURANTE TODA LA CARRERA",
      "TOTAL DE HORAS DE TRABAJO DE MANERA INDEPENDIENTE DURANTE TODA LA CARRERA ",
      "TOTAL DE CRÉDITOS DE LA CARRERA",
    ];
    
    const dataColumn2 = [
      primerDato.totalh1,
      primerDato.totalh2,
      primerDato.totalc,
    ];
    
    crearSeccionConTabla(doc, headers2, dataColumn2, { spaceBeforeTable: 7 });


    crearSeccionConTexto(
  doc,
  "11. LÍNEAS DE GENERACIÓN Y/O APLICACIÓN DEL CONOCIMIENTO:",
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
);

crearSeccionConTexto(
  doc,
  "12. ACTUALIZACIÓN DEL PLAN DE ESTUDIOS:",
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
);
        

    currentPositionY += 30;

    crearSeccion(
      doc,
      `                                                   FECHA DE AUTORIZACIÓN`,
      'left'
    );

    currentPositionY += 30;

    crearSeccion(
      doc,
      `                                                   ING. MARCO ARTURO CASTRO AGUILERA
      
                                                          DIRECTOR GENERAL DE
                                                          INCORPORACIÓN Y SERVICIOS
                                                          ESCOLARES
      `,
      'left'
    );

        const totalPages = doc.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
          doc.setPage(i);
          doc.setFont("helvetica", "normal");
          doc.setFontSize(10);
          doc.setTextColor(0, 0, 0);
    
          const pageWidth = doc.internal.pageSize.width;
          const pageHeight = doc.internal.pageSize.height;
    
          const pageNumberText = `Página ${i} de ${totalPages}`;
          const pageNumberTextWidth = doc.getStringUnitWidth(pageNumberText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
          const pageNumberTextX = pageWidth - 20 - pageNumberTextWidth;
          const pageNumberTextY = pageHeight - 10;
    
          doc.text(pageNumberText, pageNumberTextX, pageNumberTextY);
    
          // Agregar imagen en el pie de página
          const imgBottomLeftX = 10; // Posición X de la imagen
          const imgBottomLeftY = pageHeight - 10; // Posición Y de la imagen
          const imgBottomLeftWidth = 18; // Ancho de la imagen
          const imgBottomLeftHeight = 18; // Alto de la imagen
    
          doc.addImage(img3, "JPEG", imgBottomLeftX, imgBottomLeftY - imgBottomLeftHeight, imgBottomLeftWidth, imgBottomLeftHeight);
        }
    
        const pdfBlob = doc.output("blob");
        callback(pdfBlob);
      }
    }

    async function fetchDataAndGeneratePDF() {
      try {
        const datos = await fetchData();
        generatePDF(datos, (pdfBlob) => {
          const pdfUrl = URL.createObjectURL(pdfBlob);
          const iframe = document.getElementById("pdfIframe");
          iframe.src = pdfUrl;
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchDataAndGeneratePDF();
  }, []);

  return (
    <div>
      <iframe
        id="pdfIframe"
        style={{ width: "100%", height: "700px", border: "none" }}></iframe>
    </div>
  );
}

export default FDP02;
