"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonStyle = require("./Button-style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var btnName = _ref.btnName,
      handleClick = _ref.handleClick,
      disabled = _ref.disabled,
      width = _ref.width;
  return /*#__PURE__*/React.createElement(_ButtonStyle.StyledBtn, {
    onClick: function onClick(e) {
      return handleClick(e);
    },
    disabled: disabled,
    width: width
  }, btnName);
};

var _default = Button;
exports.default = _default;
Button.propTypes = {
  btnName: _propTypes.default.string.isRequired,
  handleClick: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  width: _propTypes.default.string
};