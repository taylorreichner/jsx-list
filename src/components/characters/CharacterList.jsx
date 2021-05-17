import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => (
    <ul aria-label="characters">
        {characters.map((character) => (
            <li key={character.id}>
              <Link to={`/${character.id}`}> <Character 
                name={character.name}
                status={character.status}
                image={character.image}
                />
                </Link>
            </li>
        ))}
    </ul>
)

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,  
        })
    )
}

export default CharacterList;