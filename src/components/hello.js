import React from 'react';
import PropTypes from 'prop-types';

function Hello(props) {
  const { title } = props;
  return <h1>{title}</h1>;
}

export default Hello;

Hello.propTypes = {
  title: PropTypes.string.isRequired,
};
