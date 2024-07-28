# Dropdown Component

This project includes a customizable `Dropdown` component built with React and `react-select`. The component supports multi-select, searchability, custom option rendering, and rendering with or without a portal.

## Installation

First, ensure you have the necessary dependencies installed. If you haven't already, install `react-select` and other dependencies:
npm install react-select

## Usage

To use the Dropdown component in your project, you can import and render it as follows:

import React from 'react';
import Dropdown from './Dropdown';

const options = [
{ value: 'option1', label: 'Option 1' },
{ value: 'optionWithIcon', label: 'Option with icon', icon: '🌟' },
{ value: 'longOption3', label: 'Long Long Option 3' },
{ value: 'longOption4', label: 'Long Long Option 4' },
{ value: 'longOption5', label: 'Long Long Long Option 5' },
{ value: 'longOption6', label: 'Long Long Long Long Option 6' },
];

const App = () => (

  <div>
    <Dropdown
      options={options}
      isSearchable={true}
      isMulti={true}
      usePortal={false}
    />
  </div>
);

export default App;

## Props

options (Array): An array of options to display in the dropdown. Each option should have a value and label, and can optionally include an icon.
isSearchable (Boolean): Determines whether the dropdown is searchable. Default is true.
isMulti (Boolean): Determines whether multiple options can be selected. Default is false.
usePortal (Boolean): Determines whether the dropdown menu should be rendered with a portal. Default is false.
Custom Option Rendering
The Dropdown component uses a custom option renderer to allow for more complex option displays, including icons.
