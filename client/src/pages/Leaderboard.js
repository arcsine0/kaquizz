import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import css here
import './Main.css'

import logoImg from '../images/Logo.png'
import { PlacementTable } from '../elements/PlacementTable';

export default function Leaderboard(props) {
    // put state hooks here
    const next = props.next

    const scores = sessionStorage.getItem('scores')
    const role = sessionStorage.getItem('role')
    console.log(JSON.parse(scores).player1)

    const navigate = useNavigate()

    return (
        <div className={`winnerScreen winner-bg`}>
            <div className='exitButton'>
                <i class="ri-arrow-left-line large-icon white-icon" onClick={() => { navigate('/winners') }}></i>
            </div>

            <div className='placementContainer'>
                <h2>Scoreboard</h2>
                <PlacementTable data={JSON.parse(scores)} />
            </div>
            
        </div>
        // <PlacementTable/>
    )
}