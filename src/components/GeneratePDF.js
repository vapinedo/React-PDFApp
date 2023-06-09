import React, { useState, useEffect } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import file from "../cv.pdf";

const drawText = (page, font, x, y) => {
    page.drawText("VICTOR ALFONSO", {
        x,
        y,
        font,
        size: 11,
        color: rgb(0, 0, 0)
    });
};

const GeneratePDf = () => {
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
      firstPage.drawText("PINEDO", {
        x: 70,
        y: 602,
        size: 11,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      });

      firstPage.drawText("MARTINEZ", {
        x: 236,
        y: 602,
        size: 11,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      });
      drawText(firstPage, helveticaFont, 405, 602);
  
      const pdfBytes = await pdfDoc.save();
      const bytes  = new Uint8Array( pdfBytes ); 
      const blob   = new Blob( [ bytes ], { type: "application/pdf" } );
      const docUrl = URL.createObjectURL(new Blob([pdfBytes], {type: 'application/pdf'}))
      setPdfInfo(docUrl);
    };
    
    return (
      <>
        {<iframe width="100vw" height="100vh" title="test-frame" src={pdfInfo} type="application/pdf" />}
      </>
    );    
};

export default GeneratePDf;