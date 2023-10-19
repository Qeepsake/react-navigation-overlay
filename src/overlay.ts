import { ReactElement, RefObject } from "react";

export interface OverlayRefHandle {
  show: (component: (...props: any) => ReactElement, props?: any) => void;
  close: () => void;
}

/** Constants */
let OverlayRef: OverlayRefHandle | null = null;

export const Overlay = {
  register: (ref: RefObject<OverlayRefHandle>) => {
    OverlayRef = ref.current;
  },
  show: (component: (...props: any) => ReactElement, props: any) => {
    OverlayRef?.show(component, props);
  },
  close: () => {
    OverlayRef?.close();
  },
};
