// Libraries
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
  // NOTE(mark): We passing empty styles to the styled component so we can .extend it.
  return styled(Component)``;
};

export default createComponent;
