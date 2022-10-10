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
    const [role, setRole] = useState(sessionStorage.getItem('role'))

    const players = props.players
    const code = props.code
    const start = props.start

    const navigate = useNavigate()

    console.log(role)

    function HostControls() {
        if (role === 'host') {
            return (
                <button type="button" class="violet-btn" onClick={() => start()}>Start!</button>
            )
        }
    }

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
                <HostControls />
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
            </div>

            <div className='chatLobbyBtn'>
                <h4>Chat Lobby</h4>
                <i class="ri-chat-3-fill large-icon"></i>
            </div>
        </div>
    )
}