import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  ReactElement,
} from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Overlay, OverlayRefHandle } from "./overlay";
import Modal, { ReactNativeModal } from "react-native-modal";

type AniamtionInType =
  | "bounce"
  | "flash"
  | "jello"
  | "pulse"
  | "rotate"
  | "rubberBand"
  | "shake"
  | "swing"
  | "tada"
  | "wobble"
  | "bounceIn"
  | "bounceInDown"
  | "bounceInUp"
  | "bounceInLeft"
  | "bounceInRight"
  | "bounceOut"
  | "bounceOutDown"
  | "bounceOutUp"
  | "bounceOutLeft"
  | "bounceOutRight"
  | "fadeIn"
  | "fadeInDown"
  | "fadeInDownBig"
  | "fadeInUp"
  | "fadeInUpBig"
  | "fadeInLeft"
  | "fadeInLeftBig"
  | "fadeInRight"
  | "fadeInRightBig"
  | "fadeOut"
  | "fadeOutDown"
  | "fadeOutDownBig"
  | "fadeOutUp"
  | "fadeOutUpBig"
  | "fadeOutLeft"
  | "fadeOutLeftBig"
  | "fadeOutRight"
  | "fadeOutRightBig"
  | "flipInX"
  | "flipInY"
  | "flipOutX"
  | "flipOutY"
  | "lightSpeedIn"
  | "lightSpeedOut"
  | "slideInDown"
  | "slideInUp"
  | "slideInLeft"
  | "slideInRight"
  | "slideOutDown"
  | "slideOutUp"
  | "slideOutLeft"
  | "slideOutRight"
  | "zoomIn"
  | "zoomInDown"
  | "zoomInUp"
  | "zoomInLeft"
  | "zoomInRight"
  | "zoomOut"
  | "zoomOutDown"
  | "zoomOutUp"
  | "zoomOutLeft"
  | "zoomOutRight";
type AnimationOutType =
  | "bounce"
  | "flash"
  | "jello"
  | "pulse"
  | "rotate"
  | "rubberBand"
  | "shake"
  | "swing"
  | "tada"
  | "wobble"
  | "bounceIn"
  | "bounceInDown"
  | "bounceInUp"
  | "bounceInLeft"
  | "bounceInRight"
  | "bounceOut"
  | "bounceOutDown"
  | "bounceOutUp"
  | "bounceOutLeft"
  | "bounceOutRight"
  | "fadeIn"
  | "fadeInDown"
  | "fadeInDownBig"
  | "fadeInUp"
  | "fadeInUpBig"
  | "fadeInLeft"
  | "fadeInLeftBig"
  | "fadeInRight"
  | "fadeInRightBig"
  | "fadeOut"
  | "fadeOutDown"
  | "fadeOutDownBig"
  | "fadeOutUp"
  | "fadeOutUpBig"
  | "fadeOutLeft"
  | "fadeOutLeftBig"
  | "fadeOutRight"
  | "fadeOutRightBig"
  | "flipInX"
  | "flipInY"
  | "flipOutX"
  | "flipOutY"
  | "lightSpeedIn"
  | "lightSpeedOut"
  | "slideInDown"
  | "slideInUp"
  | "slideInLeft"
  | "slideInRight"
  | "slideOutDown"
  | "slideOutUp"
  | "slideOutLeft"
  | "slideOutRight"
  | "zoomIn"
  | "zoomInDown"
  | "zoomInUp"
  | "zoomInLeft"
  | "zoomInRight"
  | "zoomOut"
  | "zoomOutDown"
  | "zoomOutUp"
  | "zoomOutLeft"
  | "zoomOutRight";

interface IReactNavigationOverlayProps extends ReactNativeModal {
  style?: StyleProp<ViewStyle>;
  animationIn: AniamtionInType;
  animationOut: AnimationOutType;
  onModalHide?: () => void;
}

export const ReactNavigationOverlay = ({
  style,
  animationIn = "slideInUp",
  animationOut = "slideOutDown",
  onModalHide,
  ...props
}: IReactNavigationOverlayProps) => {
  const thisRef = React.createRef<OverlayRefHandle>();
  const ComponentJsxRef = useRef<ReactElement | null>(null);
  const [componentPropsRef, setComponentPropsRef] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  /** Effects */
  useEffect(() => Overlay.register(thisRef), [thisRef]);
  useImperativeHandle(thisRef, () => ({
    show: (component: ReactElement, props = {}) => {
      ComponentJsxRef.current = component;
      setComponentPropsRef(props);
      setIsVisible(true);
    },
    close: () => {
      setIsVisible(false);
    },
  }));

  if (ComponentJsxRef.current) {
    return (
      <Modal
        isVisible={isVisible}
        style={[{ flex: 1, margin: 0 }, style]}
        animationIn={animationIn}
        animationOut={animationOut}
        onModalHide={() => {
          ComponentJsxRef.current = null;
          setComponentPropsRef({});
          if (onModalHide) onModalHide();
        }}
        {...props}
      >
        {React.cloneElement(ComponentJsxRef.current, componentPropsRef)}
      </Modal>
    );
  }

  return null;
};
