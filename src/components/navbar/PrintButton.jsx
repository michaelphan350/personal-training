import React from 'react';
import './navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const PrintPDF = () => {
    const handleDownload = () => {
        window.print();
    }

    return (
        <div className='printContainer'>
            <Button id='print-btn' onClick={handleDownload}>Save to PDF</Button>
        </div>
    )


}


export default PrintPDF;