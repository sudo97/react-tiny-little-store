import React from "react";
export default store => mapStateToProps => WrappedComponent => {
  return class HOC extends React.Component {
    componentDidMount() {
      this.unsubscribe = store.subscribe(store => {
        this.setState({ ...mapStateToProps(store) });
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
