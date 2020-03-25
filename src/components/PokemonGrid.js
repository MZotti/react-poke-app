import React from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';

class PokemonGrid extends React.Component{

    constructor(props){
        super(props);
        //console.log(this.props);
        this.state = {
            pokemonList: []
        }
    }

    compon

    componentDidMount(){      
        this.props.pokemonList.map(pokemon => {
            axios.get(pokemon.url)
            .then(res => {
                    const pokemon = res.data;
                    console.log(pokemon);
                    //this.setState({pokemonList: pokemon});
                })
        });
    }

    componentDidUpdate(){

    }

    render(){
        return (
            this.props.pokemonList.map(pokemon => 
                <PokemonCard 
                    
                />
            )
        )
    }

}

export default PokemonGrid;