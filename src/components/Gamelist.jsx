import React, { Component } from 'react';
import axios from 'axios';
import Game from './Game';

class Gamelist extends Component {
constructor(props){
    super(props);
    this.state={
        games:[],
    }
}

fetchData=()=>{
    axios.get('https://apis.wilders.dev/wild-games/games')
    .then(response=>this.setState({games: response.data}))
}

componentDidMount(){
    this.fetchData();
}




    render() {
        const games=this.state.games;
        return (
            <section className="GameList">
                <div>
                    {games.map((game)=>(
                        <Game  key={game.id} game={game}/>
                    ))}
                   
                </div>

            </section>
        )
    }
}
export default Gamelist;