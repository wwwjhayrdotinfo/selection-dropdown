import React from 'react';
import Select, { components } from 'react-select';
import '../index.css';

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '5px',
    boxShadow: 'none',
    borderColor: '#ccc',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '5px',
    marginTop: 0,
    zIndex: 1050,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#eafaf1' : state.isFocused ? '#b1f386' : 'white',
    color: '#333',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
  }),
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 1050,
  }),
};

const Option = (props) => (
  <components.Option {...props}>
    {props.data.icon && <span style={{ marginRight: 10 }}>{props.data.icon}</span>}
    {props.data.label}
  </components.Option>
);

const Dropdown = ({ options, isSearchable, isMulti, usePortal }) => (
  <div className="container">
    <label className="label">Label</label>
    <div className="select-container">
      <Select 
        options={options}
        styles={customStyles}
        placeholder="Select options"
        isSearchable={isSearchable}
        isMulti={isMulti}
        components={{ Option }}
        menuPortalTarget={usePortal ? document.body : null}
      />
    </div>
  </div>
);

export default Dropdown;
