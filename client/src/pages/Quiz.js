import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';

import QuizQuestion from './QuizQuestion';

// import css here
import './Main.css'

export default function Quiz(props) {
    const [count, setCount] = useState(0)
    const [timerCount, setTimerCount] = useState(0)
    const [answer, setAnswer] = useState("")
    const [preview, setPreview] = useState(false)

    const submitAnswer = props.submitAnswer

    const sessionData = localStorage.getItem('sessionData')
    const data = JSON.parse(sessionData)

    // console.log(data.timer, data.questions, data.choices, data.answer)
    const expTime = new Date();
    expTime.setSeconds(expTime.getSeconds() + data.timer);

    // const { seconds, start, restart } = useTimer({ expTime, onExpire: () => { console.log('timer done!') } })

    function validateAnswer(id) {
        setAnswer(toString(id))
        setPreview(false)
        setCount(count + 1)

        var qPoint = 0

        if (data.choices[count][id] === data.answers[count]) {
            qPoint = 1000
        } else {
            qPoint = 0
        }

        // console.log(seconds)

        const score = qPoint
        submitAnswer(score)
    }

    function Choices() {
        // data.choices[count].forEach((choice, index) => {
        //     return (
        //         <div id={index} className='title' onClick={(event) => validateAnswer(event)}>{choice}</div>
        //     )
        // })
        return (
            <div id={"index"} className='title' onClick={(event) => validateAnswer(event)}>{"choice"}</div>
        )
    }

    function DisplayQuestion() {

        if (preview === false) {
            setTimeout(() => {
                setPreview(true)
            }, 2000)
            return (
                <div className='quiz centerContainer'>
                    <h1 className='quizTitle'>{data.questions[count]}</h1>
                </div>
            )
        } else {
            // start()
            return (
                <div>
                    <QuizQuestion question={data.questions[count]} choices={data.choices[count]} submitAnswer={(id) => validateAnswer(id)} />
                </div>
            )
        }
    }



    return (
        <DisplayQuestion />
    )
}