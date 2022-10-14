import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import css here
import './Main.css'

import logoImg from '../images/Logo.png'
import { PlacementTable } from '../elements/PlacementTable';
import { WinnersTable } from '../elements/WinnersTable';

export default function FinalPlacement(props) {
    // put state hooks here
    const next = props.next

    const scores = sessionStorage.getItem('scores')
    const role = sessionStorage.getItem('role')
    console.log(JSON.parse(scores).player1)

    const navigate = useNavigate()

    function Congratulations() {
        if (role === 'host') {
            return (
                <div className='congratulationsText'>
                    <h3>Congratulations to the <span>Top 3 Winners</span>!</h3>
                </div>
            )
        } else {
            return (
                <div className='congratulationsText'>
                    <h3>Congratulations! You've got the <span>1st Place</span>.</h3>
                </div>
            )
        }
    }

    return (
        <div className={'winnerScreen winner-bg'}>
            <div className='exitButton'>
                <i class="ri-logout-box-line large-icon white-icon" onClick={() => { navigate('/lobby') }}></i>
            </div>

            <div className='winnersContainer'>
                <img src={logoImg} className='logo'></img>
                <h1 className='title'>KaQuizz!</h1>
                <Congratulations />
                <WinnersTable data={JSON.parse(scores)} />
                <div className='winnersButton'>
                    <button type="button" className="red-btn" onClick={() => { navigate('/leaderboard') }}>Show Leaderboard</button>
                    <button type="button" className="yellow-btn" onClick={() => { navigate('/lobby') }}>Return to Lobby</button>
                </div>
            </div>
            
        </div>
        // <PlacementTable/>
    )
}