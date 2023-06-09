import React, { useState, useEffect, useRef } from 'react';
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import file from "./cv.pdf";
import "./App.css";

const App = () => {
  const [pdfInfo, setPdfInfo] = useState([]);

  useEffect(() => {
    modifyPdf();
  }, []);

  const modifyPdf = async () => {
    const existingPdfBytes = await fetch(file)
      .then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    
    // Get the width and height of the first page
    const { width, height } = firstPage.getSize();
    firstPage.drawText("CONFIDENCIAL", {
      x: 5,
      y: height / 2 + 300,
      size: 50,
      font: helveticaFont,
      color: rgb(0.95, 0.1, 0.1),
      rotate: degrees(-45),
    });

    const pdfBytes = await pdfDoc.save();
    const bytes  = new Uint8Array( pdfBytes ); 
    const blob   = new Blob( [ bytes ], { type: "application/pdf" } );
    const docUrl = URL.createObjectURL(new Blob([pdfBytes], {type: 'application/pdf'}))
    setPdfInfo(docUrl);
  };
  
  return (
    <>
      {
        <iframe width="100vw" height="100vh" title="test-frame" src={pdfInfo} type="application/pdf" />
      }
    </>
  );
};

export default App;