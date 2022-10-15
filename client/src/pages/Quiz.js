import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';

import QuizQuestion from './QuizQuestion';

// import css here
import './Main.css'

export default function Quiz(props) {
    const count = props.count
    const socket = props.socket
    const name = props.name
    
    const [timerCount, setTimerCount] = useState(0)
    const [answer, setAnswer] = useState("")
    const [preview, setPreview] = useState(false)

    const [start, setStart] = useState(0)

    const submitAnswer = props.submitAnswer

    const sessionData = props.data
    const data = JSON.parse(sessionData)
    
    const navigate = useNavigate()

    // console.log(data.timer, data.questions, data.choices, data.answer)
    const expTime = new Date();
    expTime.setSeconds(expTime.getSeconds() + data.timer);

    // const { seconds, start, restart } = useTimer({ expTime, onExpire: () => { console.log('timer done!') } })

    const role = sessionStorage.getItem('role')

    function validateAnswer(id) {
        console.log('answered!')
        setAnswer(toString(id))
        setPreview(false)

        const end = Date.now()
        const elapsed = Math.floor((end - start) / 1000)
        const max = 1000

        var qPoint = 0

        if (id === data.answers[count]) {
            if (elapsed < data.timer) {
                qPoint = max - ((elapsed  * max) / data.timer)
            }
        } else {
            qPoint = 0
        }

        console.log(qPoint)

        // console.log(seconds)

        const score = qPoint
        submitAnswer(score)
        // socket.emit('answered', {'name': name, 'score': score})
        
        if ((count + 1) === data.questions.length) {
            navigate('/leaderboard')
        } else {
            navigate('/placement')
        }
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
            setStart(Date.now())
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
