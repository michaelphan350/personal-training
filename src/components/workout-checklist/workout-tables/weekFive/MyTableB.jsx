import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import TableRowB from './TableRowB';
import DataTableB from './DataTableB';
// import Button from "react-bootstrap/Button";
// import jsPDF from 'jspdf';



function MyTableB() {
  const data = DataTableB;

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedOption, setSelectedOption] = useState({});
  const [selectedOption2, setSelectedOption2] = useState({});
  const [textValues, setTextValues] = useState({});

  const handleRowSelection = (rowIndex, optionValue) => {
    setSelectedRow(rowIndex);
    setSelectedOption((prevSelectedOption) => ({
      ...prevSelectedOption,
      [rowIndex]: optionValue,
    }));
  };

  const handleRowSelection2 = (rowIndex, optionValue) => {
    setSelectedRow(rowIndex);
    setSelectedOption2((prevSelectedOption) =>({
        ...prevSelectedOption,
        [rowIndex]: optionValue,
    }));
  };

  const handleTextChange = (rowIndex, textValue) => {
    setTextValues((prevTextValues) => ({
      ...prevTextValues,
      [rowIndex]: textValue,
    }));
  };

//   const generatePDF = () => {
//     const element = document.documentElement;
//     const options = {
//       margin:       0,
//       filename:     'myfile.pdf',
//       image:        { type: 'jpeg', quality: 0.98 },
//       html2canvas:  { scale: 2 },
//       jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
//       pagebreak:    { avoid: '.pagebreak' }
//     };
  
//     html2pdf().set(options).from(element).save();
//   }

// const generatePDF = () => {
//     const doc = new jsPDF();
//     const table = document.getElementById('my-table');
//     doc.html(table, {
//       callback: function (doc) {
//         doc.save('table.pdf');
//       },
//     });
//   };

  return (
    <div  id='my-table' className='table-responsive'>
        <table className='table dark'>
            <thead>
                <tr>
                <th>Exercise</th>
                <th>Warmup</th>
                <th>Recommended Sets and Reps</th>
                <th>Your Sets</th>
                <th>Your Reps (Set # - Rep #)</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                <TableRowB
                    key={index}
                    index={index}
                    data={item}
                    selected={index === selectedRow}
                    selectedOption={selectedOption[index]}
                    selectedOption2={selectedOption2[index]}
                    textValues={textValues[index]}
                    onSelect={handleRowSelection}
                    onSelect2={handleRowSelection2}
                    onTextChange={handleTextChange}
                />
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default MyTableB;