// Libraries
import styled from 'styled-components/primitives';

/**
 * Decorates a component and applies `styled` to it. Returns a new component
 * that can be extended.
 *
 * Ex:
 *
 *   const Button = createComponent(Touchable);
 *   const CustomButton = Styled(Button)`
 *     height: 60px;
 *     width: 160px;
 *   `;
 *
 */
const createComponent = (Component) => styled(Component);

export default createComponent;
