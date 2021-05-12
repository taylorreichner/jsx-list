import React, {Component} from 'react';
import CharacterList from '../components/characters/CharacterList';
import getCharacters from '../services/RandMApi';

export default class RandMContainer extends Component {
    state = {
        loading: true,
        characters: [],
    };

    async componentDidMount() {
        const characters = await getCharacters();
        this.setState({
            characters,
            loading: false,
        })
    }

    render() {
        const {loading, characters } = this.state;
        if (loading) return <h1>Loading...</h1>
        return <CharacterList characters={characters} />
    }
}