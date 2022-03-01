import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ContentBody({ body }) {
  return <Text>{body}</Text>;
}

export default ContentBody;
ContentBody.propTypes = {
  body: PropTypes.string.isRequired,
};

const Text = styled.p`
  white-space: pre-wrap;
`;
