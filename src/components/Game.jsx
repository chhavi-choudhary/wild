import React, { Component } from 'react';
import './Game.css';

export default class Game extends Component {
    constructor(props){
        //console.log(props)
        super(props);
    }
    
    
    render() {
        const {game}=this.props;// in case of api, react, dynamic data
        return (
            <div className="games">
                <h1>Name:{game.name}</h1>
                <h2>Rating:{game.rating}</h2>
               <div>{(game.genres).map(genre=><h2>name2:{genre.name}</h2>)  } </div>
                <img className= "game" src={game.background_image} alt="images"/>
               
            </div>
        )
    }
}
