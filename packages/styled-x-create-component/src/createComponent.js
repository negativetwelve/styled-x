// Libraries
import React from 'react';
import pick from 'lodash.pick';
import styled from 'styled-components/primitives';

/**
 * Decorates a component and applies `styled` to it. Returns a new component
 * that can be `.extend`ed.
 *
 * Ex:
 *
 *   const Button = createComponent(Touchable);
 *   const CustomButton = Button.extend`
 *     height: 60px;
 *     width: 160px;
 *   `;
 *
 */
const createComponent = (Component) => {
  // Do not filter based on propTypes which are stripped in production.
  if (process.env.NODE_ENV === 'production') {
    return styled(Component)``;
  }

  const propTypes = Component.propTypes || {};
  const keys = Object.keys(propTypes);
  const withFilter = props => <Component {...pick(props, keys)} />;

  // Inject a displayName for React DevTools.
  withFilter.displayName = `StyledX(${Component.displayName})`;

  // NOTE(mark): We passing empty styles to the styled component so we can .extend it.
  return styled(withFilter)``;
};

export default createComponent;
