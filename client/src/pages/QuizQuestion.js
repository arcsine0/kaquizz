import React, { useState } from 'react';

// import css here
import './Main.css'

import logoImg from '../images/Logo.png'

export default function QuizQuestion() {
    // put state hooks here
    

    return (
        
        // <div className='quiz centerContainer'>
        //     <h2 className='quizQuestionTitle'>What is your Question 1?</h2>
        // </div>

        <div className = 'quiz questionContainer'>
            <div className = 'timerContainer'>
                <div>
                    <img src={logoImg} className='logo'></img>
                    <h4 className="questionsNum">1 / 4</h4>
                </div>
                
                <div className="timer"></div>
                <div className="placementContainer">
                    <i class="ri-medal-line large-icon"></i>
                    <h4 className="placement">1st</h4>
                </div>
                
            </div>
            <div className = 'question'>
                <h3>What is your Question 1?</h3>
            </div>
            <div className = 'choices'>
                <div className = 'choiceCard yellow-bg'>
                    <h3>Choice 1</h3>
                </div>
                <div className = 'choiceCard red-bg'>
                    <h3>Choice 2</h3>
                </div>
                <div className = 'choiceCard blue-bg'>
                    <h3>Choice 3</h3>
                </div>
                <div className = 'choiceCard green-bg'>
                    <h3>Choice 4</h3>
                </div>
            </div>
            

        </div>
        
    )
}