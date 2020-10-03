"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseSelector = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _default = function _default(store) {
  return function (mapStateToProps) {
    return function (WrappedComponent) {
      return /*#__PURE__*/function (_React$Component) {
        _inherits(HOC, _React$Component);

        var _super = _createSuper(HOC);

        function HOC() {
          _classCallCheck(this, HOC);

          return _super.apply(this, arguments);
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
            var obj = _objectSpread(_objectSpread({}, this.props), this.state);

            return /*#__PURE__*/_react["default"].createElement(WrappedComponent, obj);
          }
        }]);

        return HOC;
      }(_react["default"].Component);
    };
  };
};

exports["default"] = _default;

var createUseSelector = function createUseSelector(store) {
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

exports.createUseSelector = createUseSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIldyYXBwZWRDb21wb25lbnQiLCJtYXAiLCJzIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJzZXRTdGF0ZSIsIm9iaiIsInByb3BzIiwic3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZVVzZVNlbGVjdG9yIiwic2VsZWN0b3IiLCJ1c2VTdGF0ZSIsInZhbCIsInNldFZhbCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUNlLGtCQUFDQSxLQUFEO0FBQUEsU0FBVyxVQUFDQyxlQUFEO0FBQUEsV0FBcUIsVUFBQ0MsZ0JBQUQsRUFBc0I7QUFDbkU7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDhDQUNzQjtBQUFBOztBQUNsQixnQkFBTUMsR0FBRyxHQUFHRixlQUFlLElBQUssVUFBQ0csQ0FBRDtBQUFBLHFCQUFPQSxDQUFQO0FBQUEsYUFBaEM7O0FBQ0EsaUJBQUtDLFdBQUwsR0FBbUJMLEtBQUssQ0FBQ00sU0FBTixDQUFnQixVQUFDTixLQUFELEVBQVc7QUFDNUMsY0FBQSxLQUFJLENBQUNPLFFBQUwsbUJBQW1CSixHQUFHLENBQUNILEtBQUQsQ0FBdEI7QUFDRCxhQUZrQixDQUFuQjtBQUdEO0FBTkg7QUFBQTtBQUFBLGlEQVF5QjtBQUNyQixpQkFBS0ssV0FBTDtBQUNEO0FBVkg7QUFBQTtBQUFBLG1DQVlXO0FBQ1AsZ0JBQUlHLEdBQUcsbUNBQVEsS0FBS0MsS0FBYixHQUF1QixLQUFLQyxLQUE1QixDQUFQOztBQUNBLGdDQUFPLGdDQUFDLGdCQUFELEVBQXNCRixHQUF0QixDQUFQO0FBQ0Q7QUFmSDs7QUFBQTtBQUFBLFFBQXlCRyxrQkFBTUMsU0FBL0I7QUFpQkQsS0FsQnlCO0FBQUEsR0FBWDtBQUFBLEM7Ozs7QUFvQlIsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDYixLQUFEO0FBQUEsU0FBVyxZQUF5QjtBQUFBLFFBQXhCYyxRQUF3Qix1RUFBYixVQUFDVixDQUFEO0FBQUEsYUFBT0EsQ0FBUDtBQUFBLEtBQWE7O0FBQUEsb0JBQzdDVyxRQUFRLENBQUMsSUFBRCxDQURxQztBQUFBO0FBQUEsUUFDNURDLEdBRDREO0FBQUEsUUFDdkRDLE1BRHVEOztBQUVuRUMsSUFBQUEsU0FBUyxDQUFDLFlBQU07QUFDZGxCLE1BQUFBLEtBQUssQ0FBQ00sU0FBTixDQUFnQixVQUFDTixLQUFELEVBQVc7QUFDekJpQixRQUFBQSxNQUFNLENBQUNILFFBQVEsQ0FBQ2QsS0FBRCxDQUFULENBQU47QUFDRCxPQUZEO0FBSUEsYUFBTztBQUFBLGVBQU1BLEtBQUssQ0FBQ0ssV0FBTixFQUFOO0FBQUEsT0FBUDtBQUNELEtBTlEsRUFNTixFQU5NLENBQVQ7QUFPQSxXQUFPVyxHQUFQO0FBQ0QsR0FWZ0M7QUFBQSxDQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IChzdG9yZSkgPT4gKG1hcFN0YXRlVG9Qcm9wcykgPT4gKFdyYXBwZWRDb21wb25lbnQpID0+IHtcbiAgcmV0dXJuIGNsYXNzIEhPQyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCBtYXAgPSBtYXBTdGF0ZVRvUHJvcHMgfHwgKChzKSA9PiBzKTtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKHN0b3JlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi5tYXAoc3RvcmUpIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgbGV0IG9iaiA9IHsgLi4udGhpcy5wcm9wcywgLi4udGhpcy5zdGF0ZSB9O1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5vYmp9IC8+O1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VTZWxlY3RvciA9IChzdG9yZSkgPT4gKHNlbGVjdG9yID0gKHMpID0+IHMpID0+IHtcbiAgY29uc3QgW3ZhbCwgc2V0VmFsXSA9IHVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN0b3JlLnN1YnNjcmliZSgoc3RvcmUpID0+IHtcbiAgICAgIHNldFZhbChzZWxlY3RvcihzdG9yZSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHN0b3JlLnVuc3Vic2NyaWJlKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHZhbDtcbn07XG4iXX0=