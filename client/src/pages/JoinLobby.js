import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// you can also import individual css files here
// import './filename.css'

import PlayerCard from '../elements/PlayerCard'

import './Main.css'

import logoImg from '../images/Logo.png'
import defaultUserImg from '../images/profile-user.svg'

export default function JoinLobby(props) {
    // state hooks
    const [inputID, setInputID] = useState('')
    const [userName, setUserName] = useState('')

    var players = props.players
    var code = props.code

    const navigate = useNavigate()

    return (
        <div className='joinLobby'>
            <div className='exitButton'>
                <i class="ri-logout-box-line large-icon white-icon" onClick={() => { navigate('/') }}></i>
            </div>

            <div className='container lobbyInfoContainer'>
                <img src={logoImg} className='logo'></img>
                <h4>Waiting for players...</h4>

                <div className="gameCodeContainer">
                    <h3>GAME CODE</h3>
                    <input type="text" id="gameCode" value={code} readonly></input>
                </div>
            </div>

            <div className='lobbyDivider'>
                <div className="numPlayers">
                    <i class="ri-group-fill small-icon"></i>
                    <h4>{players.length}</h4>
                </div>
            </div>

            <div className='playersContainer'>
                {players.map((element, i) => {
                    return (<PlayerCard name={element.username}/>)
                })}
                {/* <div className='playerCard'>
                    <div className='playerInfo'>
                        <h4 className="playerName">Player 1</h4>
                        <p><span className="currentPlayer">You</span></p>
                    </div>
                    <img src={defaultUserImg} className='userImg'></img>
                </div>

                <div className='playerCard'>
                    <div className='playerInfo'>
                        <h4 className="playerName">Player 2</h4>
                    </div>
                    <img src={defaultUserImg} className='userImg'></img>
                </div>            */}

            </div>

            <div className='chatLobbyBtn'>
                <h4>Chat Lobby</h4>
                <i class="ri-chat-3-fill large-icon"></i>
            </div>
        </div>
        

        // i used this for testing
        // don't bother with creating the onClick function is the task is for UI
        // i'll just add the click functions for buttons and such when the UI is done

        // <form>
        //     <div class="mb-3">
        //         <label for="classCode" class="form-label">Enter code to join in lobby</label>
        //         <input type="text" class="form-control" id="classCode" aria-describedby="classCode" onChange={(event) => setInputID(event.target.value)} />
        //         <div id="classCode" class="form-text">code is a 6 character format, i.e ABCXYZ</div>
        //         <label for="userName" class="form-label">Enter your name</label>
        //         <input type="text" class="form-control" id="userName" aria-describedby="userName" onChange={(event) => setUserName(event.target.value)}  />
        //     </div>
        //     <button type="button" class="btn btn-primary" onClick={() => submitID(userName, inputID)}>Join</button>
        // </form>
    )
}