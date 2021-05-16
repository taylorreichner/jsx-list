import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, status, image}) => (
    <>
    <img src={image} alt={name} />
    <p>{name}</p>
    <p>{status}</p>

    </>
)

CharacterDetail.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default CharacterDetail;