// Libraries
import Primitives from 'styled-components/primitives';

// Define a new function which we can assign our own styles to.
const Styled = (tag) => Primitives(tag);

// Inject Primitives to Styled that we can use `.extend` on.
Styled.Image = Primitives.Image``;
Styled.Text = Primitives.Text``;
Styled.Touchable = Primitives.Touchable``;
Styled.View = Primitives.View``;

export default Styled;
