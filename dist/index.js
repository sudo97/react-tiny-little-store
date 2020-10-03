"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelector = exports["default"] = void 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIldyYXBwZWRDb21wb25lbnQiLCJtYXAiLCJzIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJzZXRTdGF0ZSIsIm9iaiIsInByb3BzIiwic3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInVzZVNlbGVjdG9yIiwic2VsZWN0b3IiLCJ1c2VTdGF0ZSIsInZhbCIsInNldFZhbCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUNlLGtCQUFDQSxLQUFEO0FBQUEsU0FBVyxVQUFDQyxlQUFEO0FBQUEsV0FBcUIsVUFBQ0MsZ0JBQUQsRUFBc0I7QUFDbkU7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDhDQUNzQjtBQUFBOztBQUNsQixnQkFBTUMsR0FBRyxHQUFHRixlQUFlLElBQUssVUFBQ0csQ0FBRDtBQUFBLHFCQUFPQSxDQUFQO0FBQUEsYUFBaEM7O0FBQ0EsaUJBQUtDLFdBQUwsR0FBbUJMLEtBQUssQ0FBQ00sU0FBTixDQUFnQixVQUFDTixLQUFELEVBQVc7QUFDNUMsY0FBQSxLQUFJLENBQUNPLFFBQUwsbUJBQW1CSixHQUFHLENBQUNILEtBQUQsQ0FBdEI7QUFDRCxhQUZrQixDQUFuQjtBQUdEO0FBTkg7QUFBQTtBQUFBLGlEQVF5QjtBQUNyQixpQkFBS0ssV0FBTDtBQUNEO0FBVkg7QUFBQTtBQUFBLG1DQVlXO0FBQ1AsZ0JBQUlHLEdBQUcsbUNBQVEsS0FBS0MsS0FBYixHQUF1QixLQUFLQyxLQUE1QixDQUFQOztBQUNBLGdDQUFPLGdDQUFDLGdCQUFELEVBQXNCRixHQUF0QixDQUFQO0FBQ0Q7QUFmSDs7QUFBQTtBQUFBLFFBQXlCRyxrQkFBTUMsU0FBL0I7QUFpQkQsS0FsQnlCO0FBQUEsR0FBWDtBQUFBLEM7Ozs7QUFvQlIsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2IsS0FBRDtBQUFBLFNBQVcsWUFBeUI7QUFBQSxRQUF4QmMsUUFBd0IsdUVBQWIsVUFBQ1YsQ0FBRDtBQUFBLGFBQU9BLENBQVA7QUFBQSxLQUFhOztBQUFBLG9CQUN2Q1csUUFBUSxDQUFDLElBQUQsQ0FEK0I7QUFBQTtBQUFBLFFBQ3REQyxHQURzRDtBQUFBLFFBQ2pEQyxNQURpRDs7QUFFN0RDLElBQUFBLFNBQVMsQ0FBQyxZQUFNO0FBQ2RsQixNQUFBQSxLQUFLLENBQUNNLFNBQU4sQ0FBZ0IsVUFBQ04sS0FBRCxFQUFXO0FBQ3pCaUIsUUFBQUEsTUFBTSxDQUFDSCxRQUFRLENBQUNkLEtBQUQsQ0FBVCxDQUFOO0FBQ0QsT0FGRDtBQUlBLGFBQU87QUFBQSxlQUFNQSxLQUFLLENBQUNLLFdBQU4sRUFBTjtBQUFBLE9BQVA7QUFDRCxLQU5RLEVBTU4sRUFOTSxDQUFUO0FBT0EsV0FBT1csR0FBUDtBQUNELEdBVjBCO0FBQUEsQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCAoc3RvcmUpID0+IChtYXBTdGF0ZVRvUHJvcHMpID0+IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gIHJldHVybiBjbGFzcyBIT0MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgbWFwID0gbWFwU3RhdGVUb1Byb3BzIHx8ICgocykgPT4gcyk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKChzdG9yZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4ubWFwKHN0b3JlKSB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGxldCBvYmogPSB7IC4uLnRoaXMucHJvcHMsIC4uLnRoaXMuc3RhdGUgfTtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4ub2JqfSAvPjtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlU2VsZWN0b3IgPSAoc3RvcmUpID0+IChzZWxlY3RvciA9IChzKSA9PiBzKSA9PiB7XG4gIGNvbnN0IFt2YWwsIHNldFZhbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdG9yZS5zdWJzY3JpYmUoKHN0b3JlKSA9PiB7XG4gICAgICBzZXRWYWwoc2VsZWN0b3Ioc3RvcmUpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiBzdG9yZS51bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG4gIHJldHVybiB2YWw7XG59O1xuIl19