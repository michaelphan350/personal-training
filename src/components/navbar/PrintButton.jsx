import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PrintPDF = () => {
    const handleDownload = () => {
        const fileName = prompt('Please Enter the name for your saved PDF:', 'workout.pdf');
        if (fileName !== null) {
            html2canvas(document.body).then(function(canvas) {
                var imgData = canvas.toDataURL('image/png');
                var doc = new jsPDF();
                doc.addImage(imgData, 'PNG', 0, 0);
                doc.save(fileName);
            });
        };
    };

    return (
        <div>
            <button onClick={handleDownload}>
                Print to PDF
            </button>
        </div>
    )


}


export default PrintPDF;