import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// import the css here
import './Main.css';

// all pages should be put inside the page directory
// all elements that can be re-used, i.e, a player card should be put in the elements directory

// add all your components here
import CreateLobby from './CreateLobby';
import JoinLobby from './JoinLobby';
import Lobby from './Lobby';
import Editor from './Editor';
import Quiz from './Quiz';
import QuizQuestion from './QuizQuestion';
import RoundPlacement from './RoundPlacement';
import FinalPlacement from './Winners'
import Leaderboard from './Leaderboard';

import logoImg from '.././images/Logo.png';


// socket.io is for the websocket connection implementation
// i've commented these for now so that your side doesn't error out if the server is running or not
const io = require('socket.io-client');
const socket = io.connect('http://localhost:4000', {
  withCredentials: true
});

function Main() {

    const [roomID, setRoomID] = useState(null);

    const [inputID, setInputID] = useState('');
    const [userName, setUserName] = useState('');

    const [questionCount, setQuestionCount] = useState(0)

    // i made this one for testing purposes, don't mind
    // const [mode, setMode] = useState('create');

    // test data
    var sessionData = {"timer": 10, "questions": ["What is 1+1?", "How stupid am I?", "What the Huh?"], "choices": [["2", "11", "idk", "none of the above"], ["Yes", "No", "Maybe", "A Little"], ["Indeed", "I know right", "Yup", "True"]], "answers": ["2", "Yes", "I know right"]}
    sessionStorage.setItem('sessionData', JSON.stringify(sessionData))

    var scores = [["player1", 1000], ["player2", 2000], ["player3", 50]]
    sessionStorage.setItem('scores', JSON.stringify(scores))

    // this state hook is for receiving all player data inside the room from the server
    const [playersList, setPlayersList] = useState([]);

    const navigate = useNavigate()

    socket.on('connect', () => {
        console.log('connected to server!');
    })
      
    socket.on('UID', (id) => {
        setRoomID(id)
    })

    socket.on('userData', (data) => {
        setPlayersList(data);
    })

    socket.on('start', () => {
        navigate('/quiz')
    })

    socket.on('scores', (data) => {
        const scores = sessionStorage.getItem('scores')
        var scoreList = JSON.parse(scores)
        scoreList[0][data.name] = data.score

        sessionStorage.setItem('scores', JSON.stringify(scoreList))

    })

    socket.on('nextQ', () => {
        console.log('next')
        setQuestionCount(questionCount + 1)
        navigate('/quiz')
    })

    function join(name, id) {
        setUserName(name);
        setInputID(id);

        console.log(name, id)
        
        if (id !== undefined) {
            if (id !== '') {
                console.log('joining lobby...')
                socket.emit('join', {'name': name, 'id': id, 'role': "player"})
                setRoomID(id)
                sessionStorage.setItem('role', 'player')
            }
        } else {
            if (name !== '') {
                console.log('creating lobby...')
                socket.emit('create', {'name': name, 'role': "host"})
                sessionStorage.setItem('role', 'host')
            }
        }

        navigate('/lobby')
    }

    function start() {
        socket.emit('start')
    }

    function submitAnswer(score) {
        socket.emit('answered', {'name': userName, 'score': score})
    }

    function nextQuestion() {
        socket.emit('next')
    }

    return (

        <Routes>
            <Route exact path='/' element={<Lobby toLobby={(name, id) => join(name, id)} />} />
            <Route exact path='/lobby' element={<JoinLobby players={playersList} code={roomID} start={() => start()} />} />
            <Route exact path='/editor' element={<Editor />} />
            <Route exact path='/quiz' element={<Quiz submitAnswer={(score) => submitAnswer(score)} count={questionCount} />} />
            <Route exact path='/placement' element={<RoundPlacement next={() => nextQuestion()} data={JSON.parse(sessionStorage.getItem('scores'))} />} />
            <Route exact path='/winners' element={<FinalPlacement next={() => nextQuestion()} data={JSON.parse(sessionStorage.getItem('scores'))} />} />
            <Route exact path='/leaderboard' element={<Leaderboard next={() => nextQuestion()} data={JSON.parse(sessionStorage.getItem('scores'))} />} />
        </Routes>

    )
}

// exports to index.js
export default Main;