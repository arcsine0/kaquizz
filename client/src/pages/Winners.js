import React, { useState } from 'react';

// import css here
import './Main.css'

import logoImg from '../images/Logo.png'
import { PlacementTable } from '../elements/PlacementTable';

export default function FinalPlacement(props) {
    // put state hooks here
    const next = props.next

    const scores = sessionStorage.getItem('scores')
    const role = sessionStorage.getItem('role')
    console.log(JSON.parse(scores).player1)

    function Waiting() {
        if (role === 'host') {
            return (
                <div className={`waitingText ${role=="host" ? "hostText" : ""}`}>
                    <h3 onClick={() => next()}>Click anywhere to start the next round...</h3>
                </div>
            )
        } else {
            return (
                <h3>Waiting for host to start the next round...</h3>
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