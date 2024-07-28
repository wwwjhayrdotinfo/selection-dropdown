import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  argTypes: {
    isSearchable: { control: 'boolean' },
    isMulti: { control: 'boolean' },
    options: { control: 'object' },
    usePortal: { control: 'boolean' },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  isSearchable: true,
  isMulti: false,
  usePortal: false,
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'optionWithIcon', label: 'Option with icon', icon: '🌟' },
    { value: 'longOption3', label: 'Long Long Option 3' },
    { value: 'longOption4', label: 'Long Long Option 4' },
    { value: 'longOption5', label: 'Long Long Long Option 5' },
    { value: 'longOption6', label: 'Long Long Long Long Option 6' },
  ],
};
