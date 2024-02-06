import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const BaseSelect = ({width}) => {
    return (
        <Select 
          options={options} 
          styles={{ 
            control: (provided, state) => ({ ...provided, width, borderColor: state.isFocused ? '#4758DC' : '#97999C' }),
            menu: (provided) => ({ ...provided, width }),
         }} 
        />    
    );
};
  

export default BaseSelect;