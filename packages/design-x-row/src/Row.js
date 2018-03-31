// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import {Styled} from 'react-x';

const format = (align) => {
  switch (align) {
    case 'top': return 'flex-start';
    case 'center': return 'center';
    case 'bottom': return 'flex-end';
    case 'stretch': return 'stretch';
  }
};

const Row = Styled.View`
  flex-direction: row;
  align-items: ${props => format(props.align)};
`;

Row.propTypes = {
  align: PropTypes.oneOf(['top', 'center', 'bottom', 'stretch']),
};

Row.defaultProps = {
  align: 'stretch',
};

export default Row;
