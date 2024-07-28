"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactSelect = _interopRequireWildcard(require("react-select"));
require("../index.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var customStyles = {
  control: function control(provided) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      borderRadius: '5px',
      boxShadow: 'none',
      borderColor: '#ccc'
    });
  },
  menu: function menu(provided) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      borderRadius: '5px',
      marginTop: 0,
      zIndex: 1050
    });
  },
  option: function option(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      backgroundColor: state.isSelected ? '#eafaf1' : state.isFocused ? '#b1f386' : 'white',
      color: '#333',
      padding: 10,
      display: 'flex',
      alignItems: 'center'
    });
  },
  menuPortal: function menuPortal(provided) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      zIndex: 1050
    });
  }
};
var Option = function Option(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactSelect.components.Option, props, props.data.icon && /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      marginRight: 10
    }
  }, props.data.icon), props.data.label);
};
var Dropdown = function Dropdown(_ref) {
  var options = _ref.options,
    isSearchable = _ref.isSearchable,
    isMulti = _ref.isMulti,
    usePortal = _ref.usePortal;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "label"
  }, "Label"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "select-container"
  }, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
    options: options,
    styles: customStyles,
    placeholder: "Select options",
    isSearchable: isSearchable,
    isMulti: isMulti,
    components: {
      Option: Option
    },
    menuPortalTarget: usePortal ? document.body : null
  })));
};
var _default = exports["default"] = Dropdown;