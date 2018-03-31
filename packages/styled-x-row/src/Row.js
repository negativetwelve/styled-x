// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-x-primitives';

// --------------------------------------------------
// Components
// --------------------------------------------------
const format = (align) => {
  switch (align) {
    case 'top': return 'flex-start';
    case 'center': return 'center';
    case 'bottom': return 'flex-end';
    case 'stretch': return 'stretch';
  }
};

const Row = Styled.View.extend`
  flex-direction: row;
  align-items: ${props => format(props.align)};
`;

// --------------------------------------------------
// Props
// --------------------------------------------------
Row.propTypes = {
  align: PropTypes.oneOf(['top', 'center', 'bottom', 'stretch']),
};

Row.defaultProps = {
  align: 'stretch',
};

export default Row;
