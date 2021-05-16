import React, {Component} from 'react';
import CharacterDetail from '../components/characters/CharacterDetail';
import {getCharacterById} from '../services/RandMApi';

export default class DetailPage extends Component {
    state = {
        loading: true,
        character: {},
    }

    componentDidMount = async () => {
        const character = await getCharacterById(this.props.match.params.character)
        this.setState({loading: false, character})
    }

    render () {
        const {name, status, image} = this.state.character

        return (
            <div>
                {this.state.loading
                    ? <p>loading..</p>
                    : <CharacterDetail 
                        name={name}
                        status={status}
                        image={image}
                    
                    />
                }

            </div>
        )



    }




} 