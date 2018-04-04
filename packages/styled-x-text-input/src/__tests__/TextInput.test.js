// Modules
import React from 'react';
import TextInput from '../TextInput';

const Input = TextInput.extend`
  font-size: 14px;
  border-radius: 3px;
  border: solid rgba(229, 229, 229, 1.0) 1px;
  padding: 12px;
`;

/* eslint-disable no-undef */
describe('TextInput`', () => {
  describe('Input', () => {
    itRenders(() => <Input />);
  });
});
