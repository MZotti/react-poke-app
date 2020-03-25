import React from 'react';
import axios from 'axios';

import PokemonGrid from './PokemonGrid';
import PokemonCard from './PokemonCard';

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
                    pokemonList.map(pokemon=>{
                        axios.get(pokemon.url)
                        .then(res => {
                                const pokemon = res.data;
                                this.setState({
                                    pokemonList: [...this.state.pokemonList, pokemon]
                                });
                                this.state.pokemonList.sort(function(a, b){
                                    return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);
                                });
                            })
                        
                    })

                })
    }

    render(){
        return (
            <div className="row">
                { this.state.pokemonList ? this.state.pokemonList.map(pokemon => 
                <PokemonCard 
                    name={toUpperFirstLetter(pokemon.name)}
                    type1={pokemon.types[0].slot === 1 ?toUpper( pokemon.types[0].type.name) : toUpper(pokemon.types[1].type.name) }
                    type2={pokemon.types[1] ?
                        pokemon.types[1].slot === 2 ? toUpper(pokemon.types[1].type.name) : toUpper(pokemon.types[0].type.name)
                    : '' }
                    sprite={pokemon.sprites.front_default}
                />
                ) : '' }
            </div>
        )
    }

}

function toUpperFirstLetter(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function toUpper(name){
    return name.toUpperCase();
}

export default Pokedex;