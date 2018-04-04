// Components
import styled from 'styled-components/primitives';
import Button from 'styled-x-button';
import {Image, Text, Touchable, View} from 'styled-x-primitives';
import Row from 'styled-x-row';
import TextInput from 'styled-x-text-input';

const Styled = (tag) => styled(tag);

Styled.Button = Button;
Styled.Image = Image;
Styled.Row = Row;
Styled.Text = Text;
Styled.TextInput = TextInput;
Styled.Touchable = Touchable;
Styled.View = View;

export default Styled;
