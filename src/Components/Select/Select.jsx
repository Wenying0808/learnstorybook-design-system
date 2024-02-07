import React from 'react';
import Select from 'react-select';
import './Select.css';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const BaseSelect = ({width}) => {

  const customStyles = {
    control: (provided, state) => ({ 
      ...provided, 
      width,
      height: '34px',
      minHeight:'34px', // It was 38px
      borderColor: state.isFocused || state.isMenuOpen || state.isSelected ? '#4758DC' : '#97999C',
      boxShadow: state.isFocused ? '0px 0px 10px 0px rgba(71, 88, 220, 0.15)' : 'none',
      '&:hover': {
        borderColor: '#4758DC',
      }
      
    }),
    input: (provided, state) => ({ // Style for the selected value within the control
      ...provided,
      fontWeight: state.hasValue ? 'bold' : 'normal', // Change font weight after selection
    }),
    indicatorSeparator: () => null, // Remove the indicator separator
    dropdownIndicator: (provided, state) => ({
      ...provided,
      cursor:'pointer',
      padding:'6px 8px', // make sure the height fit to the height of control 34px
      transition: 'transform 0.5s ease',
      transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
      color:'#97999C',
      '&:hover': {
        color: '#4758DC',
      }
      
    }),
    menu: (provided) => ({ 
      ...provided, 
      width,
    }),
    menuList: (provided) => ({
      ...provided,
      border: 'none' // Remove the border from the menu list -- doesn't work yet FIXEDME!!
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      backgroundColor: state.isSelected ? '#4758DC' : state.isFocused ? '#E1EBFF': '#FFFFFF',
      color: state.isSelected ? '#FFFFFF' : '#000000',
      '&:hover': {
        backgroundColor: state.isSelected ? '#4758DC' : '#E1EBFF',
        color: state.isSelected ? '#FFFFFF' : '#000000',
      }
    }),
  };

  return (
        <Select 
          options = {options}
          styles = {customStyles} 
        />    
  );
};
  

export default BaseSelect;