import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// this is the player card element for the lobby, feel free to according to ui
import PlayerCard from '../elements/PlayerCard';

import logoImg from '../images/Logo.png'

import './Main.css'

// props, short for properties are those inside the element tag
// so if we were to import this Lobby to Main
// <Lobby propname='' /> or <Lobby playerList='' />
export default function Lobby(props) {

    var toLobby = props.toLobby

    const [inputID, setInputID] = useState('')

    return (
        <div className='home'>
            <div className='container homeContainer'>
                <img src={logoImg} className='logo'></img>
                <h1 className='title'>KaQuizz!</h1>
                <form>
                    <input type="text" name="game-code" placeholder="Input Game Code" onChange={(event) => setInputID(event.target.value)} />
                    <button type="button" class="violet-btn" onClick={() => toLobby('Player', inputID)}>Join Lobby</button>
                    <hr></hr>
                    <button type="button" class="red-btn" onClick={() => toLobby('Player')}>Create Lobby</button>
                </form>
            </div>
        </div>

        // written below is how i've imported a player card element per data received from the server
        // essentially the app receives a JSON data / array that contains a list of players
        // at this point in time, the data consists of the player name and id
        
        // for the loop to insert elements per player, just use .map as shown below
        // to insert code in the jsx / html format, add a {}
        // so { player.map((element. i) => { }) }

        // <div className='container m-3'>
        //     <h1>Lobby</h1>
        // </div>
    )
}