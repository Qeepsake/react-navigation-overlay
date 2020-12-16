

/** Constants */
let OverlayRef = null;

export const Overlay = {
    register: (ref) => {
      OverlayRef = ref.current;
    },
    show: (component, props) => {
      OverlayRef.show(component, props);
    },
    close: () => {
      OverlayRef.close();
    }
};