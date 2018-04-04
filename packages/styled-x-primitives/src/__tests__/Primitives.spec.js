// Modules
import React from 'react';
import Primitives from '../Primitives';

const Square = Primitives.View.extend`
  height: 20px;
  width: 20px;
`;

const SquareWithProps = Primitives.View.extend`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
`;

const Title = Primitives.Text.extend`
  font-size: 16px;
  text-align: center;
`;

const TitleWithProps = Primitives.Text.extend`
  font-size: ${props => props.size}px;
`;

/* eslint-disable no-undef */
describe('Primitives`', () => {
  describe('View', () => {
    describe('Square', () => {
      itRenders(() => <Square />);
    });

    describe('SquareWithProps', () => {
      itRenders(() => <SquareWithProps size={20} />);
    });
  });

  describe('Text', () => {
    describe('Title', () => {
      itRenders(() => <Title />);
    });

    describe('TitleWithProps', () => {
      itRenders(() => <TitleWithProps size={20} />);
    });
  });
});
