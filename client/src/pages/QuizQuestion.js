import React, { useState } from 'react';

// import css here
import './Main.css'

import logoImg from '../images/Logo.png'

export default function QuizQuestion(props) {
    // put state hooks here
    const current = props.current + 1
    const max = props.max
    const question = props.question
    const choices = props.choices
    const submitAnswer = props.submitAnswer

    function sendAnswer(e) {
        submitAnswer(e.target.id)
    }
    
    return (
        
        // <div className='quiz centerContainer'>
        //     <h2 className='quizQuestionTitle'>What is your Question 1?</h2>
        // </div>

        <div className = 'quiz questionContainer'>
            <div className = 'timerContainer'>
                <div>
                    <img src={logoImg} className='logo'></img>
                    <h4 className="questionsNum">{current} / {max}</h4>
                </div>
                
                <div className="timer"></div>
                <div className="currentPlacement">
                    <i class="ri-medal-line large-icon"></i>
                    <h4 className="placement">1st</h4>
                </div>
                
            </div>
            <div className = 'question'>
                <h3>{question}</h3>
            </div>
            <div className = 'choices'>
                <div id='0' className = 'choiceCard yellow-bg' onClick={(e) => sendAnswer(e)}>
                    <h3>{choices[0]}</h3>
                </div>
                <div id='1' className = 'choiceCard red-bg' onClick={(e) => sendAnswer(e)}>
                    <h3>{choices[1]}</h3>
                </div>
                <div id='2' className = 'choiceCard blue-bg' onClick={(e) => sendAnswer(e)}>
                    <h3>{choices[2]}</h3>
                </div>
                <div id='3' className = 'choiceCard green-bg' onClick={(e) => sendAnswer(e)}>
                    <h3>{choices[3]}</h3>
                </div>
            </div>
            

        </div>
        
    )
}