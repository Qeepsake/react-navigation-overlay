

/** Constants */
let OverlayRef = null;

const Overlay = {
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

Overlay.show = () => {
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


  if (!_isNil(ComponentJsxRef.current)) {
    return (
      <View style={{ flex: null }}>
        <ComponentJsxRef.current {...componentPropsRef} />
      </View>
    );
  }

  return null;
};

export { Overlay }