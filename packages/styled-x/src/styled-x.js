// Libraries
import createComponent from 'styled-x-create-component';

// Components
import {Image, Text, Touchable, View} from 'styled-x-primitives';

const Styled = (Component) => createComponent(Component);

Styled.Image = Image;
Styled.Text = Text;
Styled.Touchable = Touchable;
Styled.View = View;

// This allows us to import either the entire Styled object or individual
// imports such as `import {Image, Text, View} from 'styled-x';`.
module.exports = Styled;
