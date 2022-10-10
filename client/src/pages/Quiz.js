import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';

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

    const { seconds, start, restart } = useTimer({ expTime, onExpire: () => { console.log('timer done!') } })

    function validateAnswer(event) {
        const id = event.target.id
        setAnswer(toString(id))

        console.log(seconds)

        const score = 1000
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
                <div className='title question'>{data.questions[count]}</div>
            )
        } else {
            start()
            return (
                <div>
                    <div className='title question'>{data.questions[count]}</div>
                    <Choices />
                </div>
            )
        }
    }



    return (
        <DisplayQuestion />
    )
}