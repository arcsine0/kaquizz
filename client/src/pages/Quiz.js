import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';

import QuizQuestion from './QuizQuestion';

// import css here
import './Main.css'

export default function Quiz(props) {
    const count = props.count
    
    const [timerCount, setTimerCount] = useState(0)
    const [answer, setAnswer] = useState("")
    const [preview, setPreview] = useState(false)

    const submitAnswer = props.submitAnswer

    const sessionData = sessionStorage.getItem('sessionData')
    const data = JSON.parse(sessionData)
    
    const navigate = useNavigate()

    // console.log(data.timer, data.questions, data.choices, data.answer)
    const expTime = new Date();
    expTime.setSeconds(expTime.getSeconds() + data.timer);

    // const { seconds, start, restart } = useTimer({ expTime, onExpire: () => { console.log('timer done!') } })

    const [role, setRole] = useState(sessionStorage.getItem('role'))

    function validateAnswer(id) {
        console.log('answered!')
        setAnswer(toString(id))
        setPreview(false)

        var qPoint = 0

        if (data.choices[count][id] === data.answers[count]) {
            qPoint = 1000
        } else {
            qPoint = 0
        }

        // console.log(seconds)

        const score = qPoint
        submitAnswer(score)
        navigate('/placement')

    }

    function DisplayQuestion() {

        if (preview === false) {
            setTimeout(() => {
                setPreview(true)
            }, 2000)
            return (
                <div className={`quiz centerContainer ${role=="host" ? "hostQuiz" : ""}`}>
                    <h1 className='quizTitle'>{data.questions[count]}</h1>
                </div>
            )
        } else {
            // start()
            return (
                <div>
                    <QuizQuestion current={count} max={data.questions.length} question={data.questions[count]} choices={data.choices[count]} submitAnswer={(id) => validateAnswer(id)} />
                </div>
            )
        }
    }



    return (
        <DisplayQuestion />
    )
}
