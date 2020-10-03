import React from "react";
export default (store) => (mapStateToProps) => (WrappedComponent) => {
  return class HOC extends React.Component {
    componentDidMount() {
      const map = mapStateToProps || ((s) => s);
      this.unsubscribe = store.subscribe((store) => {
        this.setState({ ...map(store) });
      });
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      let obj = { ...this.props, ...this.state };
      return <WrappedComponent {...obj} />;
    }
  };
};

export const useSelector = (store) => (selector = (s) => s) => {
  const [val, setVal] = useState(null);
  useEffect(() => {
    store.subscribe((store) => {
      setVal(selector(store));
    });

    return () => store.unsubscribe();
  }, []);
  return val;
};
