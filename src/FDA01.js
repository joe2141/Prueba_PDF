import React, { useEffect } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

function FDA01() {
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

    let currentPositionY = 90;




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


  function crearSeccionConTexto(doc, titulo, contenido) {
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
  
    const textHeight = doc.getTextDimensions(contenido, { align: 'justify', maxWidth: 175 }).h;
  
    if (currentPositionY + textHeight + 25 > doc.internal.pageSize.height - 20) {
      doc.addPage();
      currentPositionY = 20; // Reiniciar la posición vertical en la nueva página
    }
  
    doc.setFont("helvetica");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(contenido, 20, currentPositionY + 15, { align: 'justify', maxWidth: 175 });
  
    currentPositionY += textHeight + 20; // Espacio después del texto
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
        crearCelda(doc, 150, 40, 45, 7, "FDA01");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(69, 133, 244);
        doc.text(`OFICIO DE ENTREGA DE DOCUMENTACIÓN`, 20, 50);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`SUBSECRETARÍA DE EDUCACIÓN SUPERIOR`, 20, 60);
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`AT´N: DIRECTOR GENERAL DE INCORPORACIÓN Y SERVICIOS ESCOLARES.`, 40, 69);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`${primerDato.fechas}`, 152, 75);


         crearSeccion(
      doc,
      "Por este conducto manifiesto que estoy en condiciones para iniciar el trámite de SOLICITUD DE CAMBIO DE DOMICILIO del programa LICENCIATURA en DERECHO, modalidad MIXTA, en periodos CUATRIMESTRAL, turno MATUTINO, VESPERTINO, de la Institución CENTRO UNIVERSITARIO UNE. Así mismo declaro Bajo Protesta de Decir la Verdad que la información y los documentos anexos en la presente solicitud son verídicos y fueron elaborados siguiendo principios éticos profesionales, que son de mi conocimiento las penas en que incurren quienes se conducen con falsedad ante autoridad distinta de la judicial, y señalo como domicilio para recibir notificaciones:"
    );

    crearSeccion(
      doc,
      `Calle / Av. CHIMALHUACÁN, N° 6, Col. CIUDAD DEL SOL, Municipio ZAPOPAN.
Número telefónico particular: 80000863
Número telefónico celular: 80000863`,
      'left' // Al cambiar esto a 'right', el contenido se alineará a la derecha
    );

    crearSeccion(
      doc,
      `Quedo enterado de todas las disposiciones establecidas en la Ley General de Educación, La Ley General de Educación Superior, de Educación del Estado Libre y Soberano de Jalisco, la Ley de Educación Superior del Estado de Jalisco, así como del para obtención de Reconocimiento de Validez Oficial de Estudios de Educación Superior del Estado de Jalisco.`,
      'justify',
    );

    currentPositionY += 50;

    crearSeccion(
      doc,
      `                                                   BAJO PROTESTA DE DECIR VERDAD
                                                      GUILLERMO GÓNGORA CHALITA`,
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

    function crearSeccionConTabla(doc, primerDato) {
      const headers1 = [
        "NOMBRE DE LA INSTITUCIÓN",
        "MODALIDAD",
        "DURACIÓN DEL CICLO",
        "DURACIÓN DEL PLAN DE ESTUDIOS",
      ];
      const dataColumn1 = [
        primerDato.institucion,
        primerDato.modalidad,
        primerDato.ciclo,
        primerDato.fechas,
      ];
    
      const tableData1 = headers1.map((header, index) => [
        header,
        dataColumn1[index],
      ]);
    
      const tableOptions = {
        startY: currentPositionY,
        margin: { right: 40, left: 40 },
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
    
      const textHeight = doc.getTextDimensions(tableData1.join('\n'), tableOptions).h;
    
      if (currentPositionY + textHeight > doc.internal.pageSize.height - 20) {
        doc.addPage();
        currentPositionY = 20; // Reiniciar la posición vertical en la nueva página
      }
    
      doc.autoTable({
        body: tableData1,
        ...tableOptions,
      });
    
      currentPositionY = doc.previousAutoTable.finalY + 10; // Espacio después de la tabla
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

export default FDA01;
