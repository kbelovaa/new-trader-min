import React from 'react';
import './ShowMoreLess.scss';

const ShowMoreLess = ({ showMore, setShowMore }) => (
  <div className="show-more-less" onClick={() => setShowMore((state) => !state)}>
    <span className="show-more-less__text">{showMore ? 'Read less' : 'Read more'}</span>
    <svg
      className="show-more-less__arrow"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path d="M12 3.96387L12 21.9639" stroke="#284657" strokeLinecap="round" />
      <path d="M18 15.9639L12 21.9639L6 15.9639" stroke="#284657" strokeLinecap="round" />
    </svg>
  </div>
);

export default ShowMoreLess;
