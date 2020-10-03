"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelector = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default = function _default(store) {
  return function (mapStateToProps) {
    return function (WrappedComponent) {
      return (
        /*#__PURE__*/
        function (_React$Component) {
          _inherits(HOC, _React$Component);

          function HOC() {
            _classCallCheck(this, HOC);

            return _possibleConstructorReturn(this, _getPrototypeOf(HOC).apply(this, arguments));
          }

          _createClass(HOC, [{
            key: "componentDidMount",
            value: function componentDidMount() {
              var _this = this;

              var map = mapStateToProps || function (s) {
                return s;
              };

              this.unsubscribe = store.subscribe(function (store) {
                _this.setState(_objectSpread({}, map(store)));
              });
            }
          }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              this.unsubscribe();
            }
          }, {
            key: "render",
            value: function render() {
              var obj = _objectSpread({}, this.props, {}, this.state);

              return _react["default"].createElement(WrappedComponent, obj);
            }
          }]);

          return HOC;
        }(_react["default"].Component)
      );
    };
  };
};

exports["default"] = _default;

var useSelector = function useSelector(store) {
  return function () {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (s) {
      return s;
    };

    var _useState = useState(null),
        _useState2 = _slicedToArray(_useState, 2),
        val = _useState2[0],
        setVal = _useState2[1];

    useEffect(function () {
      store.subscribe(function (store) {
        setVal(selector(store));
      });
      return function () {
        return store.unsubscribe();
      };
    }, []);
    return val;
  };
};

exports.useSelector = useSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIldyYXBwZWRDb21wb25lbnQiLCJtYXAiLCJzIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJzZXRTdGF0ZSIsIm9iaiIsInByb3BzIiwic3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInVzZVNlbGVjdG9yIiwic2VsZWN0b3IiLCJ1c2VTdGF0ZSIsInZhbCIsInNldFZhbCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFDZSxrQkFBQ0EsS0FBRDtBQUFBLFNBQVcsVUFBQ0MsZUFBRDtBQUFBLFdBQXFCLFVBQUNDLGdCQUFELEVBQXNCO0FBQ25FO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsZ0RBQ3NCO0FBQUE7O0FBQ2xCLGtCQUFNQyxHQUFHLEdBQUdGLGVBQWUsSUFBSyxVQUFDRyxDQUFEO0FBQUEsdUJBQU9BLENBQVA7QUFBQSxlQUFoQzs7QUFDQSxtQkFBS0MsV0FBTCxHQUFtQkwsS0FBSyxDQUFDTSxTQUFOLENBQWdCLFVBQUNOLEtBQUQsRUFBVztBQUM1QyxnQkFBQSxLQUFJLENBQUNPLFFBQUwsbUJBQW1CSixHQUFHLENBQUNILEtBQUQsQ0FBdEI7QUFDRCxlQUZrQixDQUFuQjtBQUdEO0FBTkg7QUFBQTtBQUFBLG1EQVF5QjtBQUNyQixtQkFBS0ssV0FBTDtBQUNEO0FBVkg7QUFBQTtBQUFBLHFDQVlXO0FBQ1Asa0JBQUlHLEdBQUcscUJBQVEsS0FBS0MsS0FBYixNQUF1QixLQUFLQyxLQUE1QixDQUFQOztBQUNBLHFCQUFPLGdDQUFDLGdCQUFELEVBQXNCRixHQUF0QixDQUFQO0FBQ0Q7QUFmSDs7QUFBQTtBQUFBLFVBQXlCRyxrQkFBTUMsU0FBL0I7QUFBQTtBQWlCRCxLQWxCeUI7QUFBQSxHQUFYO0FBQUEsQzs7OztBQW9CUixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDYixLQUFEO0FBQUEsU0FBVyxZQUF5QjtBQUFBLFFBQXhCYyxRQUF3Qix1RUFBYixVQUFDVixDQUFEO0FBQUEsYUFBT0EsQ0FBUDtBQUFBLEtBQWE7O0FBQUEsb0JBQ3ZDVyxRQUFRLENBQUMsSUFBRCxDQUQrQjtBQUFBO0FBQUEsUUFDdERDLEdBRHNEO0FBQUEsUUFDakRDLE1BRGlEOztBQUU3REMsSUFBQUEsU0FBUyxDQUFDLFlBQU07QUFDZGxCLE1BQUFBLEtBQUssQ0FBQ00sU0FBTixDQUFnQixVQUFDTixLQUFELEVBQVc7QUFDekJpQixRQUFBQSxNQUFNLENBQUNILFFBQVEsQ0FBQ2QsS0FBRCxDQUFULENBQU47QUFDRCxPQUZEO0FBSUEsYUFBTztBQUFBLGVBQU1BLEtBQUssQ0FBQ0ssV0FBTixFQUFOO0FBQUEsT0FBUDtBQUNELEtBTlEsRUFNTixFQU5NLENBQVQ7QUFPQSxXQUFPVyxHQUFQO0FBQ0QsR0FWMEI7QUFBQSxDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IChzdG9yZSkgPT4gKG1hcFN0YXRlVG9Qcm9wcykgPT4gKFdyYXBwZWRDb21wb25lbnQpID0+IHtcbiAgcmV0dXJuIGNsYXNzIEhPQyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCBtYXAgPSBtYXBTdGF0ZVRvUHJvcHMgfHwgKChzKSA9PiBzKTtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKHN0b3JlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi5tYXAoc3RvcmUpIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgbGV0IG9iaiA9IHsgLi4udGhpcy5wcm9wcywgLi4udGhpcy5zdGF0ZSB9O1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5vYmp9IC8+O1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VTZWxlY3RvciA9IChzdG9yZSkgPT4gKHNlbGVjdG9yID0gKHMpID0+IHMpID0+IHtcbiAgY29uc3QgW3ZhbCwgc2V0VmFsXSA9IHVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN0b3JlLnN1YnNjcmliZSgoc3RvcmUpID0+IHtcbiAgICAgIHNldFZhbChzZWxlY3RvcihzdG9yZSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHN0b3JlLnVuc3Vic2NyaWJlKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHZhbDtcbn07XG4iXX0=