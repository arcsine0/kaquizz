import React, { useState } from 'react';

// this is the player card element for the lobby, feel free to according to ui
import PlayerCard from '../elements/PlayerCard';

// props, short for properties are those inside the element tag
// so if we were to import this Lobby to Main
// <Lobby propname='' /> or <Lobby playerList='' />
export default function Lobby(props) {
    // variable players is set according to the data of the playerList prop
    var players = props.playerList
   
    console.log(players); // for testing
    return (
        <div className=''>
            Lobby
        </div>

        // written below is how i've imported a player card element per data received from the server
        // essentially the app receives a JSON data / array that contains a list of players
        // at this point in time, the data consists of the player name and id
        
        // for the loop to insert elements per player, just use .map as shown below
        // to insert code in the jsx / html format, add a {}
        // so { player.map((element. i) => { }) }

        // <div className='container m-3'>
        //     <h1>Lobby</h1>
        //     {players.map((element, i) => {
        //         return (<PlayerCard name={element.username}/>)
        //     })}
        // </div>
    )
}