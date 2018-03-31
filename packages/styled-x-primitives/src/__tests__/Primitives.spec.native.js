// Modules
import React from 'react';
import Primitives from '../Primitives';

const Title = Primitives.Text.extend`
  font-size: 16px;
  text-align: center;
`;

/* eslint-disable no-undef */
describe('Primitives`', () => {
  describe('Title', () => {
    itRenders(() => <Title />);
  });
});
