import React, { Fragment } from 'react';

class BoozyError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Fragment>
          <h2>Could not display this screen.</h2>
        </Fragment>
      );
    }
    return this.props.children;
  }
}

export default BoozyError;
