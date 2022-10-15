import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Main.css'

export default function Editor(props) {
    const [questionName, setQuestionName] = useState('')
    const [choiceA, setChoiceA] = useState('')
    const [choiceB, setChoiceB] = useState('')
    const [choiceC, setChoiceC] = useState('')
    const [choiceD, setChoiceD] = useState('')
    const [answer, setAnswer] = useState('')
    const [timer, setTimer] = useState('')
    const [count, setCount] = useState(0)

    const saveData = props.saveData

    const navigate = useNavigate()

    const sessionData = sessionStorage.getItem('sessionData')
    const temp = JSON.parse(sessionData)

    const [data, setData] = useState(temp)

    const [questions, setQuestions] = useState(data.questions)

    function insert(arr, val) {
        console.log(count)
        arr[count] = val
        return arr
    }

    function save() {
        console.log(data)
        console.log(data.questions)
        setData((data) => ({
            'timer': 5,
            'questions': insert(data.questions, questionName),
            'choices': insert(data.choices, [choiceA, choiceB, choiceC, choiceD]),
            'answers': insert(data.answers, answer)
        }))
        // data.timer = timer
        // data.questions[count] = questionName
        // data.choices[count] = [choiceA, choiceB, choiceC, choiceD]
        // data.answers[count] = answer
        // console.log(data, count)

        setQuestions(data.questions)
    }

    function add() {
        data.questions.push('temp_name')
        setQuestions(data.questions)
    }

    function load(id) {
        console.log(id, data.choices[id])
        setCount(id)
        if (data.choices[id] !== undefined) {
            setQuestionName(data.questions[id])
            setChoiceA(data.choices[id][0])
            setChoiceB(data.choices[id][1])
            setChoiceC(data.choices[id][2])
            setChoiceD(data.choices[id][3])
            setAnswer(data.answers)
            setTimer(data.timer)
        }
    }

    function proceed() {
        // sessionStorage.setItem('sessionData', JSON.stringify(data))
        saveData(JSON.stringify(data))
        navigate('/lobby')
    }

    return (
        <div className='editor-bg'>
            <form id='form'>
                <div className='header'>
                    <div className='exitButton'>
                        <i class="ri-logout-box-line large-icon white-icon" onClick={() => { navigate('/lobby') }}></i>
                    </div>
                    <div className='quizTitleContainer'>
                        <input type="text" id="gameCode" value="Quiz Name"></input>
                    </div>
                    <div className='proceed' onClick={(e) => proceed(e)}>
                        <h4>Proceed</h4>
                        <i class="ri-arrow-right-line large-icon"></i>
                    </div>
                </div>

                <div className='editorContainer'>
                    <div className='col-2 questionNumEditor'>
                        {data.questions.map((q, i) => {
                            return (
                                <div id={i} className='questionCard current' onClick={(e) => load(e.target.id)} >
                                    <h5 className="questionNum">Question {i + 1}</h5>
                                </div>
                            )
                        })}
                        
                        <div className='addQuestion-btn' onClick={() => add()}>
                            <i class="ri-add-line"></i>
                            <p>Add Question</p>
                        </div>
                    </div>
                    <div className='col-8 questionEditor'>
                        <input type="text" id="question" placeholder="Start typing your question..." value={questionName} onChange={(e) => setQuestionName(e.target.value)}></input>
                        <div className="choicesEditor">
                            <div className='choiceEditorCard yellow-border'>
                                <input type="text" id="choice" name='choice_0' value={choiceA} placeholder="Add answer 1" onChange={(e) => setChoiceA(e.target.value)}></input>
                            </div>
                            <div className='choiceEditorCard red-border'>
                                <input type="text" id="choice" name='choice_1' value={choiceB} placeholder="Add answer 2" onChange={(e) => setChoiceB(e.target.value)}></input>
                            </div>
                            <div className='choiceEditorCard green-border'>
                                <input type="text" id="choice" name='choice_2' value={choiceC} placeholder="Add answer 3" onChange={(e) => setChoiceC(e.target.value)}></input>
                            </div>
                            <div className='choiceEditorCard blue-border'>
                                <input type="text" id="choice" name='choice_3' value={choiceD} placeholder="Add answer 4" onChange={(e) => setChoiceD(e.target.value)}></input>
                            </div>    
                        </div>
                    </div>
                    <div className='col-2 quizSettings'>
                        <div>
                            <h3><span>Question Settings</span></h3>
                            <div className='setting'>
                                <label>
                                    <i class="ri-question-fill smaller-icon"></i>     
                                    <p>Question Type:</p>
                                </label>
                                <select>
                                    <option value="choice">Multiple Choice</option>
                                    <option value="survey">Survey</option>
                                </select>
                            </div>
                            <div className='setting'>
                                <label>
                                    <i class="ri-checkbox-circle-fill smaller-icon"></i>     
                                    <p>Correct Answer:</p>
                                </label>
                                <select name='answer' value={answer} onChange={(e) => setAnswer(e.target.value)}>
                                    <option value="0">Orange</option>
                                    <option value="1">Red</option>
                                    <option value="2">Green</option>
                                    <option value="3">Blue</option>
                                </select>
                            </div>
                            <h3><span>Quiz Settings</span></h3>
                            <div className='setting'>
                                <label>
                                    <i class="ri-time-fill smaller-icon"></i>     
                                    <p>Time Limit:</p>
                                </label>
                                <select name='timer' value={timer} onChange={(e) => setTimer(e.target.value)}>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="30">30</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="quizSettingsButtons">
                            <button type="button" className="red-btn">Delete</button>
                            <button type="button" className="violet-btn" onClick={() => save()}>Save</button>
                        </div>
                    </div>
                </div>
            </form> 
        </div>
    )
} 