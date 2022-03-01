import React from 'react';
import PropTypes from 'prop-types';

function ContentYoutube({ youtube }) {
  return <p>{youtube}</p>;
}

export default ContentYoutube;
ContentYoutube.propTypes = {
  youtube: PropTypes.string.isRequired,
};
