import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

import './Main.css'

export default function Editor() {
    const [questions, setQuestions] = useState(['QuestionTitle'])

    const navigate = useNavigate()
    const Question = SortableElement(({name}) => <li>{name}</li>)
    const QuestionsList = SortableContainer(({items}) => {
        return (
            <ul>
                {items.map((v, i) => {
                    <Question key={`item-${v}`} index={i} name={"QuestionTitle"} />
                })}
            </ul>
        )
    })

    return (
        <div className='editor-bg'>
            <div className='top-menu justify-content-between'>
                <i class="ri-logout-box-line large-icon white-icon" onClick={() => { navigate('/') }}></i>
                <div className="quizNameContainer">
                    <input type="text" id="gameCode" value="Quiz Name" readonly></input>
                </div>
                <div className='proceed-btn'>
                    <div className='btn'>Proceed -{'>'}</div>
                </div>
            </div>
            <div className='container-fluid row'>
                <div className='col-2'>
                    <QuestionsList items={questions} />
                </div>
                <div className='col-8'>

                </div>
                <div className='col-2'>

                </div>
            </div>
        </div>
    )
} 