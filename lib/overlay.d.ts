import { ReactElement, RefObject } from "react";
export interface OverlayRefHandle {
    show: (component: (...props: any) => ReactElement, props?: any) => void;
    close: () => void;
}
export declare const Overlay: {
    register: (ref: RefObject<OverlayRefHandle>) => void;
    show: (component: (...props: any) => ReactElement, props: any) => void;
    close: () => void;
};
