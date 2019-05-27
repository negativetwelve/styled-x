// Libraries
import styled from 'styled-components/primitives';

// Components
import {Image, Text, Touchable, View} from 'styled-x-primitives';

const Styled = (tag) => styled(tag);

Styled.Image = Image;
Styled.Text = Text;
Styled.Touchable = Touchable;
Styled.View = View;

// This allows us to import either the entire Styled object or individual
// imports such as `import {Image, Text, View} from 'styled-x';`.
module.exports = Styled;
