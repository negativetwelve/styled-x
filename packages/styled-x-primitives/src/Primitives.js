// Libraries
import Primitives from 'react-primitives';
import createComponent from 'styled-x-create-component';

// Inject Primitives to Styled that we can use `.extend` on.
Primitives.Image = createComponent(Primitives.Image);
Primitives.Text = createComponent(Primitives.Text);
Primitives.Touchable = createComponent(Primitives.Touchable);
Primitives.View = createComponent(Primitives.View);

// This allows us to import the entire Primitives object or specific
// components via `import {View} from 'styled-x-primitives';`.
module.exports = Primitives;
