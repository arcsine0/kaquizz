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
            <div className='header'>
                <div className='exitButton'>
                    <i class="ri-logout-box-line large-icon white-icon" onClick={() => { navigate('/') }}></i>
                </div>
                <div className='quizTitleContainer'>
                    <input type="text" id="gameCode" value="Quiz Name"></input>
                </div>
                <div className='proceed'>
                    <h4>Proceed</h4>
                    <i class="ri-arrow-right-line large-icon"></i>
                </div>
            </div>

            <div className='editorContainer'>
                <div className='col-2 questionNumEditor'>
                    <div className='questionCard current'>
                        <h5 className="questionNum">Question 1</h5>
                    </div>
                    <div className='questionCard'>
                        <h5 className="questionNum">Question 2</h5>
                    </div>

                    {/* <div className='questionCard'>
                        <div className='dragIcon'></div>
                        <h5 className="questionNum">Question 2</h5>
                    </div> */}
                    
                    <div className='addQuestion-btn'>
                        <i class="ri-add-line"></i>
                        <p>Add Question</p>
                    </div>
                    <QuestionsList items={questions} />
                </div>
                <div className='col-8 questionEditor'>
                    <input type="text" id="question" placeholder="Start typing your question..."></input>
                    <div className="choicesEditor">
                        <div className='choiceEditorCard yellow-border'>
                            <input type="text" id="choice" placeholder="Add answer 1"></input>
                            <div className="correctToggleBtn correct">
                                <i class="ri-checkbox-circle-fill large-icon"></i>
                            </div>
                        </div>
                        <div className='choiceEditorCard red-border'>
                            <input type="text" id="choice" placeholder="Add answer 2"></input>
                            <div className="correctToggleBtn wrong">
                                <i class="ri-close-circle-fill large-icon"></i>
                            </div>
                        </div>
                        <div className='choiceEditorCard green-border'>
                            <input type="text" id="choice" placeholder="Add answer 3"></input>
                            <div className="correctToggleBtn wrong">
                                <i class="ri-close-circle-fill large-icon"></i>
                            </div>
                        </div>
                        <div className='choiceEditorCard blue-border'>
                            <input type="text" id="choice" placeholder="Add answer 4"></input>
                            <div className="correctToggleBtn wrong">
                                <i class="ri-close-circle-fill large-icon"></i>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className='col-2 quizSettings'>
                    <h3><span>Question Settings</span></h3>
                    <div className='questionType'>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Regular link</a>
                            <a class="dropdown-item active" href="#">Active link</a>
                            <a class="dropdown-item" href="#">Another link</a>
                        </div>
                    </div>
                    <h3><span>Quiz Settings</span></h3>
                </div>
            </div>
        </div>
    )
} 