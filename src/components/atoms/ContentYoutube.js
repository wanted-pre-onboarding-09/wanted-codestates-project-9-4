import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/youtube';

function ContentYoutube({ youtube }) {
  return (
    <ReactPlayer width="100%" controls="true" url={`youtu.be/${youtube}`} />
  );
}

export default ContentYoutube;
ContentYoutube.propTypes = {
  youtube: PropTypes.string.isRequired,
};
