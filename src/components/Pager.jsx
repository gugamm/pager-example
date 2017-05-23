import React from 'react';
import propTypes from 'prop-types';

const Pager = ({ onPrev, onNext, currentPage }) => (
  <div>
    <button type="button" onClick={onPrev}>prev</button>
    {currentPage}
    <button type="button" onClick={onNext}>next</button>
  </div>
);

Pager.propTypes = {
  onPrev: propTypes.func.isRequired,
  onNext: propTypes.func.isRequired,
  currentPage: propTypes.string.isRequired,
};

export default Pager;
