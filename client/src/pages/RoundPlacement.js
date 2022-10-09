import React, { useState } from 'react';

// import css here
import './Main.css'

import logoImg from '../images/Logo.png'
import { PlacementTable } from '../elements/PlacementTable';

export default function RoundPlacement() {
    // put state hooks here

    return (
        <div className='quiz roundPlacement'>
            <div className='timerContainer'>
                <div>
                    <img src={logoImg} className='logo'></img>
                    <h4 className="questionsNum">1 / 4</h4>
                </div>     
                <div className="currentPlacement">
                    <i class="ri-medal-line large-icon"></i>
                    <h4 className="placement">1st</h4>
                </div>
            </div>
            
            <div className='placementContainer'>
                <PlacementTable/>
            </div>

            <h3 className='waitingText'>Waiting for host to start the next round...</h3>
        </div>
        // <PlacementTable/>
    )
}