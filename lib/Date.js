/**
 * Created by steve on 22/12/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ComposedComponent = require('./ComposedComponent');

var _ComposedComponent2 = _interopRequireDefault(_ComposedComponent);

var _materialUiDatePicker = require('material-ui/DatePicker');

var _materialUiDatePicker2 = _interopRequireDefault(_materialUiDatePicker);

/**
 * There is no default number picker as part of Material-UI.
 * Instead, use a TextField and validate.
 */

var DateElement = (function (_React$Component) {
  _inherits(DateElement, _React$Component);

  function DateElement(props) {
    _classCallCheck(this, DateElement);

    _get(Object.getPrototypeOf(DateElement.prototype), 'constructor', this).call(this, props);

    this.formatDate = function (e) {
      var dateForString;
      if (e instanceof Date) {
        dateForString = e;
      } else {
        dateForString = new Date(e);
      }
      if (e) {
        // console.log(dateForString)
        return dateForString.getDate() + '/' + (parseInt(dateForString.getMonth()) + 1) + '/' + dateForString.getFullYear();
      } else {
        // console.log('none')
        return '';
      }
    };

    this.convertDate = function (e) {
      var dateForString;
      // console.log('convert date')
      // console.log(e)
      if (e instanceof Date) {
        // console.log('is date')
        // console.log(e)
        return e;
      } else if (e) {
        // console.log(e)
        // console.log('so')
        var dates = e.split('-');
        var year = dates[0];
        var month = ("0" + dates[1]).slice(-2);
        var day = ("0" + dates[2]).slice(-2);

        return new Date(year + '-' + month + '-' + day);
      } else {
        // console.log('nope')
        return null;
      }
    };

    this.onDatePicked = this.onDatePicked.bind(this);
  }

  _createClass(DateElement, [{
    key: 'onDatePicked',
    value: function onDatePicked(empty, date) {
      this.props.onChangeValidate(date);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { style: { width: '100%', display: 'block' } },
        _react2['default'].createElement(_materialUiDatePicker2['default'], {
          mode: "landscape",
          autoOk: true,
          value: this.convertDate(this.props.value),
          formatDate: this.formatDate,
          hintText: this.props.form.title,
          onChange: this.onDatePicked,
          onShow: null,
          onDismiss: null,
          disabled: this.props.form.readonly,
          style: this.props.form.style || { width: '100%' } })
      );
    }
  }]);

  return DateElement;
})(_react2['default'].Component);

exports['default'] = (0, _ComposedComponent2['default'])(DateElement);
module.exports = exports['default'];