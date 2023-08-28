import React, { useEffect, useState } from "react";
import { PDFViewer, Page, Text, Document, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

function Fda01() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/alumnos");
        const result = await response.json();
        setData(result);
      } catch (error) {
        throw new Error("Error fetching data");
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <PDFViewer style={{ width: "100%", height: "800px" }}>
        <MyDocument data={data} />
      </PDFViewer>
    </div>
  );
}

function MyDocument({ data }) {
  return (
    <Document>
      <Page>
        <Text>Lista de Alumnos</Text>
        {data.map((alumno, index) => (
          <React.Fragment key={index}>
            {/* Adjust the path to your image */}
            <Image src="./imagen1.png" style={styles.image} />
            <Text>{`${alumno.nombre} - ${alumno.fechas} años`}</Text>
          </React.Fragment>
        ))}
      </Page>
    </Document>
  );
}

export default Fda01;