import React from 'react';

function TableRowB(props) {
  const handleOptionChange = (optionValue) => {
    props.onSelect(props.index, optionValue);
  };
  const handleOptionChange2 = (optionValue) => {
      props.onSelect2(props.index, optionValue);
  };
  const handleInputChange = (event) => {
      props.onTextChange(props.index, event.target.value);
  };

  return (
    <tr className={props.selected ? 'selected' : ''}>
      <td>{props.data.exercise}</td>
      <td>{props.data.warmUp}</td>
      <td>{props.data.recSets}</td>
      <td>
        <div>
          <label>
            <input
              type="radio"
              name={`selectedRowSets_${props.index}`}
              value="option1"
              checked={props.selectedOption === 'option1'}
              onChange={() => handleOptionChange('option1')}
            />
            1 set
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name={`selectedRowSets_${props.index}`}
              value="option2"
              checked={props.selectedOption === 'option2'}
              onChange={() => handleOptionChange('option2')}
            />
            2 Sets
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name={`selectedRowSets_${props.index}`}
              value="option3"
              checked={props.selectedOption === 'option3'}
              onChange={() => handleOptionChange('option3')}
            />
            3 Sets
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name={`selectedRowSets_${props.index}`}
              value="option4"
              checked={props.selectedOption === 'option4'}
              onChange={() => handleOptionChange('option4')}
            />
            4 Sets
          </label>
        </div>
      </td>
      <td>
        <div>
            <label>
                <input
                type="radio"
                name={`selectedRowReps_${props.index}`}
                value="option5"
                checked={props.selectedOption2 === 'option5'}
                onChange={() => handleOptionChange2('option5')}
                />
                5 reps
            </label>
        </div>
        <div>
            <label>
                <input
                type="radio"
                name={`selectedRowReps_${props.index}`}
                value="option6"
                checked={props.selectedOption2 === 'option6'}
                onChange={() => handleOptionChange2('option6')}
                />
                10 reps
            </label>
        </div>
        <div>
            <label>
                <input
                type="radio"
                name={`selectedRowReps_${props.index}`}
                value="option7"
                checked={props.selectedOption2 === 'option7'}
                onChange={() => handleOptionChange2('option7')}
                />
                15 reps
            </label>
        </div>
        <div>
            <label>
                <input
                type="radio"
                name={`selectedRowReps_${props.index}`}
                value="option8"
                checked={props.selectedOption2 === 'option8'}
                onChange={() => handleOptionChange2('option8')}
                />
                20 reps
            </label>
        </div>
        <div>
            <input
                type='text'
                placeholder='Enter Custom Reps'
                onChange={handleInputChange}
            />
        </div>
      </td>
      
    </tr>
  );
}

export default TableRowB;