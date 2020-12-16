/**
 * @author Qeepsake, Inc.
 * @description
 */

import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import _isNil from "lodash/isNil";
import { Overlay } from "./overlay";
import { View } from "react-native-animatable";

export const ReactNavigationOverlay = () => {
    const thisRef = React.createRef();
    const ComponentJsxRef = useRef(null);
    const [componentPropsRef, setComponentPropsRef] = useState({});
    /** Effects */
    useEffect(() => Overlay.register(thisRef), [thisRef]);
    useImperativeHandle(thisRef, () => ({
        show: (component, props = {}) => {
            ComponentJsxRef.current = component;
            setComponentPropsRef(props);
        },
        close: () => {
            ComponentJsxRef.current = null;
            setComponentPropsRef({});
        },
    }));
   

    if(!_isNil(ComponentJsxRef.current)){
        return (
            <View style={{ flex: null }}>
               <ComponentJsxRef.current {...componentPropsRef} />
            </View>
        );
    }
    
    return null;
};