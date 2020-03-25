import React from 'react';

class PokemonCard extends React.Component{

    constructor(props){
        super(props);
        
        
    }

    render(){
        return (
            <div className="col-md-4">
                {this.props.name}<br />
                {this.props.type1} / {this.props.type2}
                <img src={this.props.sprite} />
            </div>
        )
    }

}

export default PokemonCard;