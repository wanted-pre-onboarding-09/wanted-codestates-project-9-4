import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import CardImg from '../atoms/CardImg';
import ContentTitle from '../atoms/ContentTitle';
import ContentHeader from '../atoms/ContentHeader';
import ContentYoutube from '../atoms/ContentYoutube';
import ContentBody from '../atoms/ContentBody';
import ContentMove from '../atoms/ContentMove';
import BackArrow from '../atoms/BackArrow';
import Likes from '../atoms/Likes';
import Share from '../atoms/Share';

function DetailList({ contents }) {
  console.log(contents);
  return (
    <>
      {contents.map((content) => (
        <main key={content.id}>
          <div className="detail-header">
            <BackArrow />
            <ContentHeader header={content.sector_id} />
          </div>
          {content.sector_id === 2 ? (
            <div className="detail-youtube">
              <ContentYoutube youtube={content.link} />
            </div>
          ) : (
            <div className="detail-img">
              <CardImg itemSrc={content.image} />
            </div>
          )}
          <div className="title-wrap">
            <ContentTitle title={content.title} />
          </div>
          {content.sector_id === 1 ? null : (
            <div className="detail-content">
              <ContentBody body={content.body} />
            </div>
          )}
          <div className="like-share">
            <Likes id={content.id} likeCnt={content.like_cnt} />
            <Share url={content.link} />
          </div>
          {content.sector_id === 2 ? null : (
            <div className="detail-move">
              <ContentMove move={content.link} />
            </div>
          )}
        </main>
      ))}
    </>
  );
}

DetailList.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      body: null || PropTypes.string,
      id: PropTypes.number,
      image: PropTypes.string,
      like_cnt: PropTypes.number,
      like_top: PropTypes.number,
      link: PropTypes.string,
      sector_id: PropTypes.number,
      title: PropTypes.string,
      upload_date: PropTypes.string,
    }),
  ).isRequired,
};

export default DetailList;
