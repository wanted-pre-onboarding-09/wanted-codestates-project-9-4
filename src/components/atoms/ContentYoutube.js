import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/youtube';

function ContentYoutube({ youtube }) {
  return (
    <ReactPlayer
      width="100%"
      controls
      url={`https://www.youtube.com/watch?v=${youtube}`}
    />
  );
}

export default ContentYoutube;
ContentYoutube.propTypes = {
  youtube: PropTypes.string.isRequired,
};
