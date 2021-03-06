// Libraries
import {Image, Text, Touchable, View} from 'react-x-primitives';
import createComponent from 'styled-x-create-component';

const Primitives = {
  Image: createComponent(Image),
  Text: createComponent(Text),
  Touchable: createComponent(Touchable),
  View: createComponent(View),
};

// This allows us to import the entire Primitives object or specific
// components via `import {View} from 'styled-x-primitives';`.
module.exports = Primitives;
