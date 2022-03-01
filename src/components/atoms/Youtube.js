import React from 'react';
import ReactPlayer from 'react-player/youtube';
// import PropTypes from 'prop-types';

function Youtube() {
  // console.log(props.filter((item) => item));
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      controls="true"
      url="https://youtu.be/0p4GD7KecyI"
    />
  );
}

export default Youtube;
// Youtube.propTypes = {
//   content: PropTypes.string.isRequired,
// };
