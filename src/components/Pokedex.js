import React from 'react';
import axios from 'axios';

import PokemonGrid from './PokemonGrid';

class Pokedex extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            pokemonList : []
        }
    }

    componentDidMount(){
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`)
            .then(res => {
                    const pokemonList = res.data.results;
                    this.setState({ pokemonList : pokemonList});
                })
    }

    render(){
            return (
                <PokemonGrid 
                    pokemonList={this.state.pokemonList}
                />
            )
    }

}

export default Pokedex;