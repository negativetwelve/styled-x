// Modules
import React from 'react';
import Primitives from '../Primitives';

const Square = Primitives.View`
  height: 20px;
  width: 20px;
`;

const SquareWithProps = Primitives.View`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  borderRadius: ${props => props.borderRadius}px;
`;

const Title = Primitives.Text`
  font-size: 16px;
  text-align: center;
`;

const TitleWithProps = Primitives.Text`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
`;

/* eslint-disable no-undef */
describe('Primitives', () => {
  describe('View', () => {
    describe('Square', () => {
      itRenders(() => <Square />);
    });

    describe('SquareWithProps', () => {
      itRenders(() => <SquareWithProps size={20} borderRadius={5} />);
    });
  });

  describe('Text', () => {
    describe('Title', () => {
      itRenders(() => <Title />);
    });

    describe('TitleWithProps', () => {
      itRenders(() => <TitleWithProps size={20} color={'#FFFFFF'} />);
    });
  });
});
