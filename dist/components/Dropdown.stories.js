"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Dropdown = _interopRequireDefault(require("./Dropdown"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  title: 'Example/Dropdown',
  component: _Dropdown["default"],
  argTypes: {
    isSearchable: {
      control: 'boolean'
    },
    isMulti: {
      control: 'boolean'
    },
    options: {
      control: 'object'
    },
    usePortal: {
      control: 'boolean'
    }
  }
};
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Dropdown["default"], args);
};
var Default = exports.Default = Template.bind({});
Default.args = {
  isSearchable: true,
  isMulti: false,
  usePortal: false,
  options: [{
    value: 'option1',
    label: 'Option 1'
  }, {
    value: 'optionWithIcon',
    label: 'Option with icon',
    icon: '🌟'
  }, {
    value: 'longOption3',
    label: 'Long Long Option 3'
  }, {
    value: 'longOption4',
    label: 'Long Long Option 4'
  }, {
    value: 'longOption5',
    label: 'Long Long Long Option 5'
  }, {
    value: 'longOption6',
    label: 'Long Long Long Long Option 6'
  }]
};