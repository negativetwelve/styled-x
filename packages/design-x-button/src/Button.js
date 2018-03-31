// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import {Touchable} from 'react-x';

/**
 * Cross-platform Button component for React DOM and React Native.
 */
class Button extends React.Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static propTypes = {
    // TODO
  };

  static defaultProps = {
    // TODO
  };

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return <Touchable {...this.props} />;
  }

}

export default Button;
