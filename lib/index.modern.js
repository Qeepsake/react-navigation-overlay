import React, { useRef, useState, useEffect, useImperativeHandle } from 'react';
import Modal from 'react-native-modal';

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

var _excluded = ["style", "animationIn", "animationOut", "onModalHidden"];
var ReactNavigationOverlay = function ReactNavigationOverlay(_ref) {
  var style = _ref.style,
    _ref$animationIn = _ref.animationIn,
    animationIn = _ref$animationIn === void 0 ? "slideInUp" : _ref$animationIn,
    _ref$animationOut = _ref.animationOut,
    animationOut = _ref$animationOut === void 0 ? "slideOutDown" : _ref$animationOut,
    onModalHidden = _ref.onModalHidden,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var thisRef = React.createRef();
  var ComponentJsxRef = useRef(null);
  var _useState = useState({}),
    componentPropsRef = _useState[0],
    setComponentPropsRef = _useState[1];
  var _useState2 = useState(false),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  useEffect(function () {
    return Overlay.register(thisRef);
  }, [thisRef]);
  useImperativeHandle(thisRef, function () {
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
    return React.createElement(Modal, Object.assign({}, props, {
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
        if (onModalHidden) onModalHidden();
      }
    }), React.createElement(ComponentJsxRef.current, Object.assign({}, componentPropsRef)));
  }
  return null;
};

export { Overlay, ReactNavigationOverlay };
//# sourceMappingURL=index.modern.js.map
