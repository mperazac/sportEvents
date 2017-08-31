import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  maxLength: PropTypes.number
};

const defaultProps = {
  text: '',
  link: '',
  maxLength: 400
};


const shorten = (text, maxLength) => {
  let ret = text;
  if (ret.length > maxLength) {
    ret = `${ret.substr(0,maxLength-3)}... `;
  }
  return ret;
};

const Description = props => (
  <div className="description">
    <p className="description-text">
      {shorten(props.text, props.maxLength)}
    </p>
    { props.text.length > props.maxLength && (
      <a href={props.link} className="btn btn-outline-primary">
        Ver más <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>
    )}
  </div>
);

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;