import React from 'react';

import PokemonCard from './PokemonCard';

class PokemonGrid extends React.Component{

    constructor(props){
        super(props);
        //console.log(this.props);
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