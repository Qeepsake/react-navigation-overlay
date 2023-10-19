function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Modal = _interopDefault(require('react-native-modal'));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var OverlayRef = null;
var Overlay = {
  register: function register(ref) {
    OverlayRef = ref.current;
  },
  show: function show(component, props) {
    var _OverlayRef;
    (_OverlayRef = OverlayRef) === null || _OverlayRef === void 0 ? void 0 : _OverlayRef.show(component, props);
  },
  close: function close() {
    var _OverlayRef2;
    (_OverlayRef2 = OverlayRef) === null || _OverlayRef2 === void 0 ? void 0 : _OverlayRef2.close();
  }
};

var _excluded = ["style", "animationIn", "animationOut", "onModalHide"];
var ReactNavigationOverlay = function ReactNavigationOverlay(_ref) {
  var style = _ref.style,
    _ref$animationIn = _ref.animationIn,
    animationIn = _ref$animationIn === void 0 ? "slideInUp" : _ref$animationIn,
    _ref$animationOut = _ref.animationOut,
    animationOut = _ref$animationOut === void 0 ? "slideOutDown" : _ref$animationOut,
    _onModalHide = _ref.onModalHide,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var thisRef = React__default.createRef();
  var ComponentJsxRef = React.useRef(null);
  var _useState = React.useState({}),
    componentPropsRef = _useState[0],
    setComponentPropsRef = _useState[1];
  var _useState2 = React.useState(false),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  React.useEffect(function () {
    return Overlay.register(thisRef);
  }, [thisRef]);
  React.useImperativeHandle(thisRef, function () {
    return {
      show: function show(component, props) {
        if (props === void 0) {
          props = {};
        }
        ComponentJsxRef.current = component;
        setComponentPropsRef(props);
        setIsVisible(true);
      },
      close: function close() {
        setIsVisible(false);
      }
    };
  });
  if (ComponentJsxRef.current) {
    return React__default.createElement(Modal, Object.assign({
      isVisible: isVisible,
      style: [{
        flex: 1,
        margin: 0
      }, style],
      animationIn: animationIn,
      animationOut: animationOut,
      onModalHide: function onModalHide() {
        ComponentJsxRef.current = null;
        setComponentPropsRef({});
        if (_onModalHide) _onModalHide();
      }
    }, props), React__default.cloneElement(ComponentJsxRef.current, componentPropsRef));
  }
  return null;
};

exports.Overlay = Overlay;
exports.ReactNavigationOverlay = ReactNavigationOverlay;
//# sourceMappingURL=index.js.map
