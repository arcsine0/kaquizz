import React, { useState } from 'react';

// import css here
import './Main.css'

import logoImg from '../images/Logo.png'
import { PlacementTable } from '../elements/PlacementTable';

export default function RoundPlacement(props) {
    // put state hooks here
    const next = props.next

    const scores = sessionStorage.getItem('scores')
    const role = sessionStorage.getItem('role')

    function Waiting() {
        if (role === 'host') {
            return (
                <div className={'waitingText hostText'}>
                    <h3 onClick={() => next()}>Click anywhere to start the next round...</h3>
                </div>
            )
        } else {
            return (
            <div className={'waitingText'}>
                <h3>Waiting for host to start the next round...</h3>
            </div>
            )
        }
    }

    return (
        <div className={`quiz roundPlacement ${role=="host" ? "hostQuiz" : ""}`}>
            <div className='timerContainer'>
                <div>
                    <img src={logoImg} className='logo'></img>
                    <h4 className="questionsNum">1 / 4</h4>
                </div>     
                <div className="currentPlacement">
                    <i className="ri-medal-line large-icon"></i>
                    <h4 className="placement">1st</h4>
                </div>
            </div>
            
            <Waiting />
            
            <div className='placementContainer'>
                <PlacementTable data={JSON.parse(scores)} />
            </div>
            
        </div>
        // <PlacementTable/>
    )
}