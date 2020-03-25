import React from 'react';

class PokemonCard extends React.Component{

    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <div>
                {this.props.name}<br />
                {this.props.type1} / {this.props.type2}
                {this.props.sprite}
            </div>
        )
    }

}

export default PokemonCard;