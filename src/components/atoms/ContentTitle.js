import React from 'react';
import PropTypes from 'prop-types';

function ContentTitle({ title }) {
  return <h1>{title}</h1>;
}

export default ContentTitle;
ContentTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
